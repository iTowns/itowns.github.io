require_relative "Parser"


module NotReady

    def self.parse(nodes)

        output = {}

        nodes.each do |node|

            case node.type
            when :header

                output["title"] = Parser.parse(node)

            when :p

                if node.children.length() == 1 &&
                    node.children[0].type == :a

                    link = node.children[0]

                    output["link"] = {
                        "href" => link.attr["href"],
                        "title" => link.attr["title"],
                        "text" => Parser.parse(link),
                    }

                else

                    output["desc"] ||= []
                    output["desc"] << {
                        "type" => "paragraph",
                        "text" => Parser.parse(node),
                    }

                end

            end

        end

        return output

    end

end
