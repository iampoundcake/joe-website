import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, s as spreadAttributes } from './astro_03esds4C.mjs';
import { b as getImage } from './pages/404_CAanZK12.mjs';

const Astro__ZN0a12 = new Proxy({"src":"/_astro/car.CHhmVHuz.jpg","width":1174,"height":756,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/joe-website/src/content/weeklies/2024-05-week-1/car.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./car\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./car.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZN0a12, ...props});
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
			const html = await updateImageReferences("<h2 id=\"poi-points-of-interest\">poi (points of interest)</h2>\n<ul>\n<li>wild week! it’s just been a week of so many logistics with vendors.</li>\n<li>my entire team was on holiday for almost a week :) lol but we got through it</li>\n<li>contractors have started work on the house</li>\n<li>i kept getting build errors with the site, hence the first weekly update. i may move to this format? but we shall see, or shorten the daily.</li>\n<li>we got a new car! and i already love it. it will definitely get its own tree, as will the sonic if i can keep it around long enough.\r\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./car.jpg&#x22;,&#x22;alt&#x22;:&#x22;new car&#x22;,&#x22;index&#x22;:0}\"></li>\n<li>the rap beef of the millennia. felt like we haven’t had a cultural moment like this in a very long time. and yes, kendrick won. not even sure how anyone out there thinks otherwise.</li>\n<li>mom came back from korea :D</li>\n</ul>\n<h2 id=\"song-stuck-in-my-head\">song stuck in my head</h2>\n<p>there are plenty from the last week:</p>\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/77DRzu7ERs0TX3roZcre7Q?utm_source=generator\" width=\"100%\" height=\"152\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\nneed i say anything? kdot bodied this. and this...\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/6AI3ezQ4o3HUoP6Dhudph3?utm_source=generator\" width=\"100%\" height=\"152\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n<p>who knew kung fu kenny was hilarious? i didn’t but this song is ridiculous lol and definitely the kill shot in this beef.</p>\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/751srcHf5tUqcEa9pRCQwP?utm_source=generator\" width=\"100%\" height=\"152\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n<p>not sure what it is about this song.. but when she hits that flip, i get chills. it’s so cali pop punk and such a throwback to high school. also, i love that it’s named “tek it” which seems like is a reference to “teching” in smash bros, which would be apt for a song about a situationship. this song has gotten popular due to tiktok, and its most recent sample in <a href=\"https://www.youtube.com/watch?v=2NzuR5OLvnQ&#x26;pp=ygUQcmVkIG1vb24gbGlsIHV6aQ%3D%3D\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">red moon by lil uzi vert.</a></p>\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/7fzHQizxTqy8wTXwlrgPQQ?utm_source=generator\" width=\"100%\" height=\"152\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n<p>at first i thought it was brent faiyaz, but after listening a bit closer, i realized the lyrics weren’t as toxic as a classic faiyaz track lol. in my stupor of “will they, won’t they?” regarding kendrick and drake the drizzler, i completely missed this track soaring up the charts. but what’s special is not the fact that this is a certified bop (although it is), or that this funky af (although it is), but he has a line</p>\n<blockquote>\n<p>took her to Queen’s Gambit (yeah, yeah), showed around my friends (right now)\r\nbeing that this track sounds straight outta dc, i decided to do some snooping. in my mind i thought there’s no way he’s referencing the only dive bar in woodbridge… lo and behold, this man is <em>from</em> woodbridge, va LOL anyway, i’ll rep him forever for that reason alone. hope he keeps producing heat.</p>\n</blockquote>\n<h2 id=\"gratitude\">gratitude</h2>\n<ul>\n<li>i’ve been shuttling to the house nearly everyday… it’s wonderfully peaceful. the neighborhood is lush and green.</li>\n<li>thankful to have two cars with nice room for cargo lol</li>\n<li>i am happy we bought this house. every time i see updates, i get more excited. the floors will really make this place ours. and the nursey color katie picked is so nice 😍</li>\n<li>our neighbors are really nice. one of their sons helped me moved the w/d today.</li>\n<li>parents coming to the shower!</li>\n<li>also just for everyone sending us gifts from our registry and the kind words. it’s humbling.</li>\n</ul>\n<h2 id=\"reminders\">reminders</h2>\n<ul>\n<li>the cabinets in the kitchen are from lowe’s</li>\n<li>set up an appointment to hook up the w/d in the basement</li>\n<li>create a house branch in the garden\n<ul>\n<li>create a shopping/wishlist</li>\n<li>pictures/FYIs (where’s the gas line, water line, etc etc)</li>\n<li>to do</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"food-log\">food log</h2>\n<p>overall - i have <strong>not</strong> been paying too much attention, and i’ve been eating out a lot while running around. we will settle down and get back to routine soon.</p>\n<h4 id=\"comments\">comments</h4>\n<ul>\n<li>i hate not feeling settled in my own home, but that’s normal. and we will be all moved in soon enough. it feels like christmas. i started to sweep my deck the other day just because.</li>\n</ul>");
	

				const frontmatter = {"title":"Weekly No. 1","description":"the first week of may was a blur","publishDate":"09 May 2024","coverImage":{"src":"./img.jpg","alt":"another shot of the neighborhood."},"tags":["excited","stressed"],"draft":false,"minutesRead":"4 min read"};
				const file = "D:/joe-website/src/content/weeklies/2024-05-week-1/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## poi (points of interest)\r\n\r\n- wild week! it's just been a week of so many logistics with vendors. \r\n- my entire team was on holiday for almost a week :) lol but we got through it\r\n- contractors have started work on the house\r\n- i kept getting build errors with the site, hence the first weekly update. i may move to this format? but we shall see, or shorten the daily.\r\n- we got a new car! and i already love it. it will definitely get its own tree, as will the sonic if i can keep it around long enough.\r\n![new car](./car.jpg)\r\n- the rap beef of the millennia. felt like we haven't had a cultural moment like this in a very long time. and yes, kendrick won. not even sure how anyone out there thinks otherwise.\r\n- mom came back from korea :D \r\n\r\n\r\n## song stuck in my head\r\n\r\nthere are plenty from the last week:\r\n\r\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/77DRzu7ERs0TX3roZcre7Q?utm_source=generator\" width=\"100%\" height=\"152\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\r\nneed i say anything? kdot bodied this. and this...\r\n\r\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/6AI3ezQ4o3HUoP6Dhudph3?utm_source=generator\" width=\"100%\" height=\"152\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\r\n\r\nwho knew kung fu kenny was hilarious? i didn't but this song is ridiculous lol and definitely the kill shot in this beef.\r\n\r\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/751srcHf5tUqcEa9pRCQwP?utm_source=generator\" width=\"100%\" height=\"152\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\r\n\r\nnot sure what it is about this song.. but when she hits that flip, i get chills. it's so cali pop punk and such a throwback to high school. also, i love that it's named \"tek it\" which seems like is a reference to \"teching\" in smash bros, which would be apt for a song about a situationship. this song has gotten popular due to tiktok, and its most recent sample in [red moon by lil uzi vert.](https://www.youtube.com/watch?v=2NzuR5OLvnQ&pp=ygUQcmVkIG1vb24gbGlsIHV6aQ%3D%3D)\r\n\r\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/7fzHQizxTqy8wTXwlrgPQQ?utm_source=generator\" width=\"100%\" height=\"152\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\r\n\r\nat first i thought it was brent faiyaz, but after listening a bit closer, i realized the lyrics weren't as toxic as a classic faiyaz track lol. in my stupor of \"will they, won't they?\" regarding kendrick and drake the drizzler, i completely missed this track soaring up the charts. but what's special is not the fact that this is a certified bop (although it is), or that this funky af (although it is), but he has a line \r\n> took her to Queen's Gambit (yeah, yeah), showed around my friends (right now)\r\nbeing that this track sounds straight outta dc, i decided to do some snooping. in my mind i thought there's no way he's referencing the only dive bar in woodbridge... lo and behold, this man is _from_ woodbridge, va LOL anyway, i'll rep him forever for that reason alone. hope he keeps producing heat.\r\n\r\n\r\n\r\n## gratitude\r\n\r\n- i've been shuttling to the house nearly everyday... it's wonderfully peaceful. the neighborhood is lush and green.\r\n- thankful to have two cars with nice room for cargo lol\r\n- i am happy we bought this house. every time i see updates, i get more excited. the floors will really make this place ours. and the nursey color katie picked is so nice 😍\r\n- our neighbors are really nice. one of their sons helped me moved the w/d today.\r\n- parents coming to the shower!\r\n- also just for everyone sending us gifts from our registry and the kind words. it's humbling.\r\n\r\n## reminders\r\n\r\n- the cabinets in the kitchen are from lowe's\r\n- set up an appointment to hook up the w/d in the basement\r\n- create a house branch in the garden\r\n    - create a shopping/wishlist\r\n    - pictures/FYIs (where's the gas line, water line, etc etc)\r\n    - to do\r\n\r\n## food log\r\n\r\noverall - i have **not** been paying too much attention, and i've been eating out a lot while running around. we will settle down and get back to routine soon. \r\n\r\n#### comments\r\n\r\n- i hate not feeling settled in my own home, but that's normal. and we will be all moved in soon enough. it feels like christmas. i started to sweep my deck the other day just because.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"poi-points-of-interest","text":"poi (points of interest)"},{"depth":2,"slug":"song-stuck-in-my-head","text":"song stuck in my head"},{"depth":2,"slug":"gratitude","text":"gratitude"},{"depth":2,"slug":"reminders","text":"reminders"},{"depth":2,"slug":"food-log","text":"food log"},{"depth":4,"slug":"comments","text":"comments"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
