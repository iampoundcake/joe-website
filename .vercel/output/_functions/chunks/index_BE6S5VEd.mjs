import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"-complete\">% Complete</h2>\n<p>60%</p>\n<h2 id=\"author\">author</h2>\n<p>Walter M. Miller Jr.</p>\n<h2 id=\"why-am-i-reading-this\">why am i reading this?</h2>\n<p>many booktubers and the like say this is a must-read in the scifi genre</p>\n<h2 id=\"genre\">genre</h2>\n<p>scifi dystopia</p>\n<h2 id=\"goodreads-synop\">goodreads synop</h2>\n<p>In a nightmarish ruined world slowly awakening to the light after sleeping in darkness, the infant rediscoveries of science are secretly nourished by cloistered monks dedicated to the study and preservation of the relics and writings of the blessed Saint Isaac Leibowitz. From here the story spans centuries of ignorance, violence, and barbarism, viewing through a sharp, satirical eye the relentless progression of a human race damned by its inherent humanness to recelebrate its grand foibles and repeat its grievous mistakes.</p>";

				const frontmatter = {"title":"currently reading: a canticle for leibowitz","description":"future dystopia, faith, and the making of myths","publishDate":"24 Jun 2024","coverImage":{"src":"./cover.jpg","alt":"cover of A Canticle for Leibowitz"},"tags":["📖","scifi"],"draft":false,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/media-library/currently-reading/index.md";
				const url = undefined;
				function rawContent() {
					return "## % Complete\r\n\r\n60%\r\n\r\n## author\r\n\r\nWalter M. Miller Jr.\r\n\r\n## why am i reading this?\r\n\r\nmany booktubers and the like say this is a must-read in the scifi genre\r\n\r\n## genre\r\n\r\nscifi dystopia\r\n\r\n## goodreads synop\r\n\r\nIn a nightmarish ruined world slowly awakening to the light after sleeping in darkness, the infant rediscoveries of science are secretly nourished by cloistered monks dedicated to the study and preservation of the relics and writings of the blessed Saint Isaac Leibowitz. From here the story spans centuries of ignorance, violence, and barbarism, viewing through a sharp, satirical eye the relentless progression of a human race damned by its inherent humanness to recelebrate its grand foibles and repeat its grievous mistakes.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-complete","text":"% Complete"},{"depth":2,"slug":"author","text":"author"},{"depth":2,"slug":"why-am-i-reading-this","text":"why am i reading this?"},{"depth":2,"slug":"genre","text":"genre"},{"depth":2,"slug":"goodreads-synop","text":"goodreads synop"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
