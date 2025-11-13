require_relative "Parser"


module OrganizationChart

    def self.parse(nodes)

        output = {}

        nodes.each do |node|

            case node.type
            when :header

                if node.options[:level] == 3

                    output["title"] = Parser.parse(node)

                end

            when :p

                output["desc"] ||= []
                output["desc"] << {
                    "type" => "paragraph",
                    "text" => Parser.parse(node),
                }

            when :ul

                output["list"] ||= []

                node.children.each do |child|

                    link = child.children[0].children[0]
                    output["list"] << {
                        "href" => link.attr["href"],
                        "title" => link.attr["title"],
                        "value" => Parser.parse(link),
                    }

                end

            end

        end

        return output

    end

end
