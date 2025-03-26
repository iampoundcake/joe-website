import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<p>currently reading…</p>\n<h2 id=\"author\">author</h2>\n<h2 id=\"genre\">genre</h2>\n<h2 id=\"my-one-sentence-synop\">my one sentence synop</h2>\n<h2 id=\"rating\">rating</h2>\n<h2 id=\"longer-review\">longer review</h2>";

				const frontmatter = {"title":"Test book example #8","description":"another test run of books","publishDate":"Mar 22, 2025","coverImage":{"src":"@/assets/defaults/placeholder.jpg","alt":"Test book example #8 cover"},"tags":["📚"],"draft":true,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/media-library/test-book-example-8/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\ncurrently reading...\r\n\r\n## author\r\n\r\n## genre\r\n\r\n## my one sentence synop\r\n\r\n## rating\r\n\r\n## longer review\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"author","text":"author"},{"depth":2,"slug":"genre","text":"genre"},{"depth":2,"slug":"my-one-sentence-synop","text":"my one sentence synop"},{"depth":2,"slug":"rating","text":"rating"},{"depth":2,"slug":"longer-review","text":"longer review"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
