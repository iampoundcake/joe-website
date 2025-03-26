import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"testing-the-title-tag\">Testing the title tag</h2>";

				const frontmatter = {"title":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id","description":"This post is purely for testing if the css is correct for the title on the page","publishDate":"01 Feb 2023","tags":["test"],"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/post_archive/long-title-20230201.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Testing the title tag\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"testing-the-title-tag","text":"Testing the title tag"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
