require_relative "Parser"


module DependenciesList

    def self.parse(nodes)

        output = {}

        nodes.each do |node|

            case node.type
            when :header

                if node.options[:level] == 3

                    output["title"] = Parser.parse(node)

                end

            when :ul

                output["list"] ||= []

                node.children.each do |child|

                    input = {
                        "name" => Parser.parse(child.children[0]),
                        "license" => Parser.parse(child.children[1]),
                    }

                    if child.children[2]

                        input["link"] = Parser.parse(child.children[2])

                    end

                    output["list"] << input

                end

            end

        end

        return output

    end

end
