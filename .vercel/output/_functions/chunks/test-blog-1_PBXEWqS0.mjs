import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "";

				const frontmatter = {"title":"update no.1 2021","description":"nearly too much to tell","publishDate":"2025-03-23T17:35:23.107Z","tags":["catchup"],"draft":true,"minutesRead":"0 min read"};
				const file = "D:/joe-website/src/content/post/test-blog-1.md";
				const url = undefined;
				function rawContent() {
					return "\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
