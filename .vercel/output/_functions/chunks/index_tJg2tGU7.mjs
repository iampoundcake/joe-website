import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ygVyFKLx_DM?si=zD3oGP-2cAxashS5\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>\n<h2 id=\"network\">network</h2>\n<p>FX</p>\n<h2 id=\"executive-producers\">executive producers</h2>\n<p>John Henion, Andrew Fried, Sarina Roma, Dane Lillegard, Nicholas Frenkel, George Dewey, Rob McElhenney, Ryan Reynolds, Humphrey Ker</p>\n<h2 id=\"why-am-i-watching-this\">why am i watching this?</h2>\n<p>it became a show to fill the void between ted lasso seasons for katie and i, but now has become quite a fun show to watch</p>\n<h2 id=\"genre\">genre</h2>\n<p>sports docuseries</p>\n<h2 id=\"synop\">synop</h2>\n<p>we get to watch rob mcelhenney and ryan reynolds fumble over themselves trying to elevate a historic football club that has been down in the dumps for decades.</p>\n<h2 id=\"production-companies\">production companies</h2>\n<p>Boardwalk Pictures,\r\nDN2 Productions,\r\nMaximum Effort,\r\nRCG Productions,\r\n3 Arts Entertainment,\r\nFX Productions</p>";

				const frontmatter = {"title":"currently watching: welcome to wrexham (s3)","description":"ted lasso but irl","publishDate":"13 May 2024","coverImage":{"src":"./wrexham.png","alt":"cover image for series"},"tags":["📺","docuseries"],"draft":false,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/media-library/currently-watching/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ygVyFKLx_DM?si=zD3oGP-2cAxashS5\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>\r\n\r\n## network\r\n\r\nFX\r\n\r\n## executive producers\r\nJohn Henion, Andrew Fried, Sarina Roma, Dane Lillegard, Nicholas Frenkel, George Dewey, Rob McElhenney, Ryan Reynolds, Humphrey Ker\r\n\r\n## why am i watching this?\r\nit became a show to fill the void between ted lasso seasons for katie and i, but now has become quite a fun show to watch\r\n\r\n## genre\r\nsports docuseries \r\n\r\n## synop\r\n\r\nwe get to watch rob mcelhenney and ryan reynolds fumble over themselves trying to elevate a historic football club that has been down in the dumps for decades.\r\n\r\n## production companies\r\n\r\nBoardwalk Pictures,\r\nDN2 Productions,\r\nMaximum Effort,\r\nRCG Productions,\r\n3 Arts Entertainment,\r\nFX Productions\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"network","text":"network"},{"depth":2,"slug":"executive-producers","text":"executive producers"},{"depth":2,"slug":"why-am-i-watching-this","text":"why am i watching this?"},{"depth":2,"slug":"genre","text":"genre"},{"depth":2,"slug":"synop","text":"synop"},{"depth":2,"slug":"production-companies","text":"production companies"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
