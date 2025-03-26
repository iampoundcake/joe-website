import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"author\">author</h2>\n<p>Olivie Blake</p>\n<h2 id=\"genre\">genre</h2>\n<p>romance</p>\n<h2 id=\"my-one-sentence-synop\">my one sentence synop</h2>\n<p>an unstoppable young woman collides into an immovable young man in a cerebral romance that explores the complexity of loneliness, trauma, neurodivergence, and the euphoria of being seen.</p>\n<h2 id=\"slap-rating\">slap rating</h2>\n<p>this shit slaps</p>";

				const frontmatter = {"title":"alone with you in the ether","description":"my first encounter with olivie blake","publishDate":"25 Mar 2024","coverImage":{"src":"./cover.jpg","alt":"book cover"},"tags":["📖","romance","★★★★"],"draft":false,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/media-library/alone-with-you/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## author\r\n\r\nOlivie Blake\r\n\r\n## genre\r\n\r\nromance\r\n\r\n## my one sentence synop\r\n\r\nan unstoppable young woman collides into an immovable young man in a cerebral romance that explores the complexity of loneliness, trauma, neurodivergence, and the euphoria of being seen.\r\n\r\n## slap rating\r\n\r\nthis shit slaps\r\n";
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
