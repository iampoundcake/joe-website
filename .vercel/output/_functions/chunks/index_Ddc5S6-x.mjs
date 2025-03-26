import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"author\">author</h2>\n<p>Toni Morrison</p>\n<h2 id=\"genre\">genre</h2>\n<p>ghost story, historical fiction</p>\n<h2 id=\"my-one-sentence-synop\">my one sentence synop</h2>\n<p>an escaped slave, her daughter, and mother-in-law are isolated, lonely, and oppressed within a haunted house after an event that rips you apart while epitomizing the horror of slavery and suffering.</p>\n<h2 id=\"slap-rating\">slap rating</h2>\n<p>eternal slap. longer thoughts coming. there’s nothing unique i could possibly say about this heralded work. it is mighty.</p>";

				const frontmatter = {"title":"beloved","description":"she powerfully leaves her mark","publishDate":"24 Apr 2024","coverImage":{"src":"./cover.jpg","alt":"book cover"},"tags":["📖","horror","★★★★★"],"draft":false,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/media-library/beloved/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## author\r\n\r\nToni Morrison\r\n\r\n## genre\r\n\r\nghost story, historical fiction\r\n\r\n## my one sentence synop\r\n\r\nan escaped slave, her daughter, and mother-in-law are isolated, lonely, and oppressed within a haunted house after an event that rips you apart while epitomizing the horror of slavery and suffering.\r\n\r\n## slap rating\r\n\r\neternal slap. longer thoughts coming. there's nothing unique i could possibly say about this heralded work. it is mighty.\r\n";
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
