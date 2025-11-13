module Parser

    def self.parse(node)

        document = Kramdown::Document.new("")
        root = document.root

        node.children.map { |child| root.children << child }

        Kramdown::Converter::Html.convert(root, document.options).join

    end

end
