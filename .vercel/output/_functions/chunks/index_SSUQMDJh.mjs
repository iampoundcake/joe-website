import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, s as spreadAttributes } from './astro_03esds4C.mjs';
import { b as getImage } from './pages/404_CAanZK12.mjs';

const Astro__1uL18z = new Proxy({"src":"/_astro/boardroom.CLbohQlv.webp","width":756,"height":1008,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/joe-website/src/content/dailies/2024-04-25/boardroom.webp";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./boardroom\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./boardroom.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1uL18z, ...props});
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
			const html = await updateImageReferences("<p><em>This post is a retrospective.</em></p>\n<h2 id=\"hours-of-sleep\">hours of sleep</h2>\n<p>6.8</p>\n<h2 id=\"poi-points-of-interest\">poi (points of interest)</h2>\n<ul>\n<li>antsy to get this move going!</li>\n<li>spent far too long thinking through typefaces today</li>\n<li>am i at the place where i should start planning my lunches?</li>\n<li>started a new book, the atlas six</li>\n<li>setting up utils for the house. can’t believe we get the keys on monday.</li>\n<li>cate and i went to a great spot called the boardroom underneath the hugh building</li>\n<li>nightcap, dinner and drinks at the archer with allison and katie 😀</li>\n</ul>\n<h2 id=\"song-stuck-in-my-head\">song stuck in my head</h2>\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/14dJexYlvd3t3XAtD1pYW1?utm_source=generator\" width=\"100%\" height=\"152\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n<h2 id=\"gratitude\">gratitude</h2>\n<ul>\n<li>it’s probably because i have to go in 4x a week, but that thursday night feeling hits</li>\n<li>happy hour with friends</li>\n<li>been a while since we’ve had a few days of good weather in a row</li>\n</ul>\n<h2 id=\"reminders\">reminders</h2>\n<ul>\n<li>pick paint colors</li>\n<li>pick up the house before photog</li>\n<li></li>\n</ul>\n<h2 id=\"food-log\">food log</h2>\n<h4 id=\"morning\">morning:</h4>\n<ul>\n<li>blue berries + pea protein and whey protein</li>\n<li>vitamins and supplements (will add to garden)</li>\n<li>iced coffee</li>\n</ul>\n<h4 id=\"lunch\">lunch:</h4>\n<ul>\n<li>potbelly’s - big turkey &#x26; provolone, with everything but oil and mustard 🤤</li>\n<li>oatmeal chocolate cookie</li>\n</ul>\n<h4 id=\"afternoon\">afternoon:</h4>\n<ul>\n<li>weak iced coffee</li>\n</ul>\n<h4 id=\"evening\">evening</h4>\n<ul>\n<li>3 cocktails 🥴 - the cocktails at the boardroom were a+\r\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./boardroom.webp&#x22;,&#x22;alt&#x22;:&#x22;cocktails at boardroom&#x22;,&#x22;index&#x22;:0}\"></li>\n<li>duck breast burger, brocolli salad <a href=\"https://www.archerbar.com/\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">the archer</a></li>\n</ul>\n<h2 id=\"habit-tracking\">habit tracking</h2>\n<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> drink 80oz water</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> read</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> protein</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> vitamins &#x26; supplements</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> meditate</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> training and/or mobility (link to log)</li>\n</ul>\n<h4 id=\"comments\">comments</h4>");
	

				const frontmatter = {"title":"No. 6","description":"going dark mode for the next few days","publishDate":"25 Apr 2024","coverImage":{"src":"./IMG_5013.jpg","alt":""},"tags":["excited","“unmotivated\""],"draft":false,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/dailies/2024-04-25/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n_This post is a retrospective._\r\n\r\n## hours of sleep\r\n\r\n6.8\r\n\r\n## poi (points of interest)\r\n- antsy to get this move going!\r\n- spent far too long thinking through typefaces today\r\n- am i at the place where i should start planning my lunches? \r\n- started a new book, the atlas six\r\n- setting up utils for the house. can’t believe we get the keys on monday.\r\n- cate and i went to a great spot called the boardroom underneath the hugh building\r\n- nightcap, dinner and drinks at the archer with allison and katie 😀\r\n\r\n## song stuck in my head\r\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/14dJexYlvd3t3XAtD1pYW1?utm_source=generator\" width=\"100%\" height=\"152\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\r\n\r\n## gratitude\r\n- it’s probably because i have to go in 4x a week, but that thursday night feeling hits\r\n- happy hour with friends\r\n- been a while since we’ve had a few days of good weather in a row\r\n\r\n## reminders\r\n- pick paint colors\r\n- pick up the house before photog \r\n- \r\n\r\n## food log\r\n#### morning: \r\n- blue berries + pea protein and whey protein\r\n- vitamins and supplements (will add to garden)\r\n- iced coffee\r\n\r\n#### lunch:\r\n- potbelly’s - big turkey & provolone, with everything but oil and mustard 🤤\r\n- oatmeal chocolate cookie\r\n\r\n#### afternoon:\r\n- weak iced coffee\r\n\r\n#### evening\r\n- 3 cocktails 🥴 - the cocktails at the boardroom were a+\r\n![cocktails at boardroom](./boardroom.webp)\r\n- duck breast burger, brocolli salad [the archer](https://www.archerbar.com/)\r\n\r\n## habit tracking\r\n\r\n- [x] drink 80oz water\r\n- [x] read\r\n- [ ] protein\r\n- [x] vitamins & supplements\r\n- [ ] meditate\r\n- [ ] training and/or mobility (link to log)\r\n\r\n#### comments\r\n\r\n\r\n";
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
