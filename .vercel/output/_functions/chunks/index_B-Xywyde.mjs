import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"summary\">Summary</h2>\n<h2 id=\"season-notes\">Season Notes</h2>\n<h3 id=\"season-1\">Season 1</h3>\n<h2 id=\"overall-thoughts\">Overall Thoughts</h2>";

				const frontmatter = {"title":"Common Side Effects (Test)","description":"","publishDate":"2025-03-24T01:15:55.658Z","mediaType":"tv-show","status":"to-consume","rating":0,"episodes":0,"tags":[],"draft":true,"coverImage":{"src":"./cover.jpg","alt":"Cover image for Common Side Effects"},"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/media-library/common-side-effects-test/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## Summary\n\n## Season Notes\n\n### Season 1\n\n## Overall Thoughts\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"summary","text":"Summary"},{"depth":2,"slug":"season-notes","text":"Season Notes"},{"depth":3,"slug":"season-1","text":"Season 1"},{"depth":2,"slug":"overall-thoughts","text":"Overall Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
