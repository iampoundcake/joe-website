import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "";

				const frontmatter = {"title":"This post doesn't have any content","description":"This post is purely for testing the table of content, which should not be rendered","publishDate":"22 Feb 2023","tags":["test","toc"],"minutesRead":"0 min read"};
				const file = "D:/joe-website/src/content/post_archive/missing-content-20230222.md";
				const url = undefined;
				function rawContent() {
					return "";
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
