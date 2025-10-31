require_relative "Parser"


module TabsPageParser

    def self.parse(nodes)

        output = {}
        indent = 0

        last_tab = nil
        last_section = nil
        last_card = nil

        skip_nodes = 0

        nodes.children.each_with_index do |node, index|

            if skip_nodes > 0

                skip_nodes = [0, skip_nodes - 1].max
                next

            end

            case node.type
            when :header

                level = node.options[:level]

                case level
                when 1

                    # Page Header
                    output["subheader"] = {
                        "title" => Parser.parse(node),
                    }
                    indent = 1

                when 2

                    # Tab header
                    output["tabs"] ||= []
                    last_tab = {
                        "title" => Parser.parse(node),
                    }
                    output["tabs"] << last_tab
                    indent = 2

                when 3

                    # Section header
                    last_tab["sections"] ||= []
                    last_section = {}

                    template = node.attr["data-template"]

                    if template

                        # Parse the whole section using custom parser.
                        # Skip parsing of the next nodes that already
                        # are in this custom section

                        last_section["template"] = template

                        parser_name = template.split("-").map(&:capitalize).join

                        if File.exist?(File.join(__dir__, "#{parser_name}.rb"))

                            require_relative "#{parser_name}.rb"
                            sectionParser = Object.const_get(parser_name)

                            section_nodes = [node]

                            nodes.children[(index + 1)..-1].each do |node|

                                break if node.type == :header &&
                                    node.options[:level] <= 3
                                section_nodes << node
                                skip_nodes += 1

                            end

                            last_section.merge!(
                                sectionParser.parse(section_nodes),
                            )

                        else

                            last_section["title"] = Parser.parse(node)

                        end

                    else

                        last_section["title"] = Parser.parse(node)

                    end

                    last_tab["sections"] << last_section

                    indent = 3

                when 4

                    # Section subheader
                    last_section["desc"] ||= []
                    last_section["desc"] << {
                        "type" => "header",
                        "text" => Parser.parse(node),
                    }

                when 5

                    # Card header
                    last_section["cards"] ||= []
                    last_card = {
                        "title" => Parser.parse(node),
                    }
                    last_section["cards"] << last_card
                    indent = 4

                end

            when :p

                case indent
                when 1

                    # Subheader description
                    output["subheader"]["desc"] ||= []
                    output["subheader"]["desc"] << {
                        "paragraph" => Parser.parse(node),
                    }

                when 2

                    # Tab description
                    last_tab["desc"] ||= []
                    last_tab["desc"] << {
                        "paragraph" => Parser.parse(node),
                    }

                when 3

                    # Section description
                    last_section["desc"] ||= []
                    last_section["desc"] << {
                        "type" => "paragraph",
                        "text" => Parser.parse(node),
                    }


                when 4

                    # Card text
                    last_card["text"] ||= []
                    last_card["text"] << {
                        "paragraph" => Parser.parse(node),
                    }

                end

            when :ul

                if indent == 4

                    # Card tags
                    last_card["tags"] ||= []
                    node.children.each do |child|
                        last_card["tags"] << Parser.parse(child)
                    end

                end

            end

        end

        return output

    end

end