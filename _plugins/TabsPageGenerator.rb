require "uri"
require_relative "Parsers/TabsPageParser"


module Jekyll
    class TabsPageGenerator < Generator

        safe true
        priority :high

        def generate(site)

            site.pages.each do |page|

                next unless page.data["layout"] == "page-with-tabs"

                markdown = File.read(page.path)

                root = preprocess_tree(
                    Kramdown::Document.new(markdown).root,
                )

                content = TabsPageParser.parse(root)

                page.data["structured_content"] = content

            end

        end


        def preprocess_tree(node)

            node.children.each { |child| preprocess_tree(child) }

            # Remove blank nodes
            node.children.reject! { |child| child.type == :blank }

            # Classify link nodes and add target attribute for external links
            if node.type == :a

                node.attr["class"] ||= ""

                if node.attr["href"]

                    target_domain = URI.parse(node.attr["href"])&.host

                    if target_domain && target_domain != @site_domain

                        node.attr["target"] ||= "_blank"

                    end

                end

                if node.attr["data-display"] == "button"

                    node.attr["class"] << " button medium tertiary"

                else

                    node.attr["class"] << " inline-link"

                end

            end

            return node

        end

    end
end
