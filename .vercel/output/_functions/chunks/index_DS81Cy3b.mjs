import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, s as spreadAttributes } from './astro_03esds4C.mjs';
import { b as getImage } from './pages/404_CAanZK12.mjs';

const Astro__ZC4mk1 = new Proxy({"src":"/_astro/shakeshack.C1sUAjDQ.webp","width":575,"height":766,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/joe-website/src/content/weeklies/2024-04-24/shakeshack.webp";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./shakeshack\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./shakeshack.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZC4mk1, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h2 id=\"hours-of-sleep\">hours of sleep</h2>\n<p>7.1</p>\n<h2 id=\"poi-points-of-interest\">poi (points of interest)</h2>\n<ul>\n<li>mom showed me all the cute clothes she’s bought. and the baby carrier (podaegi) and i got to see my aunt.</li>\n</ul>\n<h2 id=\"song-stuck-in-my-head\">song stuck in my head</h2>\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/0WbMK4wrZ1wFSty9F7FCgu?utm_source=generator\" width=\"100%\" height=\"152\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n<h2 id=\"gratitude\">gratitude</h2>\n<ul>\n<li>i mean. free shake shack at work.</li>\n<li>thankful for family, and how much love we’ve been shown</li>\n<li>i have great friends</li>\n</ul>\n<h2 id=\"reminders\">reminders</h2>\n<ul>\n<li>make decision about this weekend</li>\n<li>spotlight doc</li>\n<li>build list of cars</li>\n<li>train tomorrow</li>\n<li>utils</li>\n<li>move w/d next week</li>\n</ul>\n<h2 id=\"food-log\">food log</h2>\n<h4 id=\"morning\">morning:</h4>\n<ul>\n<li>frozen berries, spinach, mixed nuts, (2) pea protein</li>\n<li>vitamins and supplements (will add to garden)</li>\n<li>iced coffee</li>\n</ul>\n<h4 id=\"lunch\">lunch:</h4>\n<ul>\n<li><a href=\"https://shakeshack.com/sites/default/files/2021-09/SHA_NutritionFacts_ShakeShack-tables-August%2031%2C%202021%20.pdf\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">shake shack double cheese with small fries</a> 🤤\r\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./shakeshack.webp&#x22;,&#x22;alt&#x22;:&#x22;shake shack double&#x22;,&#x22;index&#x22;:0}\"></li>\n</ul>\n<h4 id=\"afternoon\">afternoon:</h4>\n<ul>\n<li>iced coffee</li>\n</ul>\n<h4 id=\"evening\">evening</h4>\n<ul>\n<li>western omelette and homefries</li>\n<li>quinoa, chicken, brussel sprouts and pickled red onions</li>\n</ul>\n<h2 id=\"habit-tracking\">habit tracking</h2>\n<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> drink 80oz water</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> read</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> protein</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> vitamins &#x26; supplements</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> meditate</li>\n<li>[] training and/or mobility (link to log)</li>\n</ul>\n<h4 id=\"comments\">comments</h4>");
	

				const frontmatter = {"title":"No. 4","description":"an avalanche of logistics incoming","publishDate":"24 Apr 2024","coverImage":{"src":"./omfbb-mqcxl.webp","alt":""},"tags":["rested","content"],"draft":false,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/weeklies/2024-04-24/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## hours of sleep\r\n\r\n7.1\r\n\r\n## poi (points of interest)\r\n\r\n- mom showed me all the cute clothes she's bought. and the baby carrier (podaegi) and i got to see my aunt.\r\n\r\n\r\n## song stuck in my head\r\n\r\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/0WbMK4wrZ1wFSty9F7FCgu?utm_source=generator\" width=\"100%\" height=\"152\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\r\n\r\n## gratitude\r\n\r\n- i mean. free shake shack at work.\r\n- thankful for family, and how much love we've been shown\r\n- i have great friends\r\n\r\n## reminders\r\n\r\n- make decision about this weekend\r\n- spotlight doc\r\n- build list of cars\r\n- train tomorrow\r\n- utils\r\n- move w/d next week\r\n\r\n## food log\r\n\r\n#### morning:\r\n\r\n- frozen berries, spinach, mixed nuts, (2) pea protein\r\n- vitamins and supplements (will add to garden)\r\n- iced coffee\r\n\r\n#### lunch:\r\n\r\n- [shake shack double cheese with small fries](https://shakeshack.com/sites/default/files/2021-09/SHA_NutritionFacts_ShakeShack-tables-August%2031%2C%202021%20.pdf) 🤤\r\n  ![shake shack double](./shakeshack.webp)\r\n\r\n#### afternoon:\r\n\r\n- iced coffee\r\n\r\n#### evening\r\n\r\n- western omelette and homefries\r\n- quinoa, chicken, brussel sprouts and pickled red onions\r\n\r\n## habit tracking\r\n\r\n- [x] drink 80oz water\r\n- [x] read\r\n- [x] protein\r\n- [x] vitamins & supplements\r\n- [x] meditate\r\n- [] training and/or mobility (link to log)\r\n\r\n#### comments\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"hours-of-sleep","text":"hours of sleep"},{"depth":2,"slug":"poi-points-of-interest","text":"poi (points of interest)"},{"depth":2,"slug":"song-stuck-in-my-head","text":"song stuck in my head"},{"depth":2,"slug":"gratitude","text":"gratitude"},{"depth":2,"slug":"reminders","text":"reminders"},{"depth":2,"slug":"food-log","text":"food log"},{"depth":4,"slug":"morning","text":"morning:"},{"depth":4,"slug":"lunch","text":"lunch:"},{"depth":4,"slug":"afternoon","text":"afternoon:"},{"depth":4,"slug":"evening","text":"evening"},{"depth":2,"slug":"habit-tracking","text":"habit tracking"},{"depth":4,"slug":"comments","text":"comments"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
