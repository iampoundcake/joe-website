import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"author\">author</h2>\n<p>Claire Keegan</p>\n<h2 id=\"genre\">genre</h2>\n<p>short story</p>\n<h2 id=\"my-one-sentence-synop\">my one sentence synop</h2>\n<p>a shy young girl is sent off with foster parents while her mother gives birth where she learns about love, what she had been missing in her own family, and the thought of losing it when its found.</p>\n<h2 id=\"slap-rating\">slap rating</h2>\n<p>this slaaaaaaps. keegan has a special way with words. her ability to tell so much in such a small book. sentences are packed with so much emotion and depth. i enjoyed this story a ton.</p>";

				const frontmatter = {"title":"foster","description":"a beautiful emotional gut punch","publishDate":"25 Apr 2024","coverImage":{"src":"./cover1.jpg","alt":"book cover"},"tags":["📖","novella","★★★★★"],"draft":false,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/media-library/foster/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## author\r\n\r\nClaire Keegan\r\n\r\n## genre\r\n\r\nshort story\r\n\r\n## my one sentence synop\r\n\r\na shy young girl is sent off with foster parents while her mother gives birth where she learns about love, what she had been missing in her own family, and the thought of losing it when its found.\r\n\r\n## slap rating\r\n\r\nthis slaaaaaaps. keegan has a special way with words. her ability to tell so much in such a small book. sentences are packed with so much emotion and depth. i enjoyed this story a ton.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"author","text":"author"},{"depth":2,"slug":"genre","text":"genre"},{"depth":2,"slug":"my-one-sentence-synop","text":"my one sentence synop"},{"depth":2,"slug":"slap-rating","text":"slap rating"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
