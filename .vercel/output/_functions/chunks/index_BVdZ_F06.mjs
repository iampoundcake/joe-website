import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<p><em>This post is a retrospective on 4/30.</em></p>\n<h2 id=\"hours-of-sleep\">hours of sleep</h2>\n<p>7</p>\n<h2 id=\"poi-points-of-interest\">poi (points of interest)</h2>\n<ul>\n<li>went to <a href=\"https://www.instagram.com/scramjc/?hl=en\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">scram</a> with dongsquad (minus shan because sleep)</li>\n<li>hung out at montanas with shan for most of the day</li>\n<li>relaxed a bit at home, emotionally geared up for monday.</li>\n<li>arkanoid and tactics ogre are fire lol</li>\n</ul>\n<h2 id=\"song-stuck-in-my-head\">song stuck in my head</h2>\n<p>can’t remember</p>\n<h2 id=\"gratitude\">gratitude</h2>\n<ul>\n<li>thankful that even with the move, i’ll still be near some of my dearest friends. things will inevitably change, but at least we are only 20-30 minutes away.</li>\n<li>a good pastry or cookie is difficult to forget.</li>\n<li>just sitting with katie in quiet is a delight. small but wonderful moments. i will not take them for granted, especially with the rocket we are on.</li>\n</ul>\n<h2 id=\"reminders\">reminders</h2>\n<ul>\n<li>needed to get some things together for monday</li>\n<li>outback is on its way to carmax</li>\n</ul>\n<h2 id=\"food-log\">food log</h2>\n<h4 id=\"brunch\">brunch:</h4>\n<ul>\n<li><a href=\"https://www.instagram.com/scramjc/p/C42Ml77s9ku/?hl=en\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">sausage, egg, and cheese from scram</a>. so good.</li>\n<li>also gnoshed on their oatmeal chocolate chip cookie, strawberry rhubarb pie, and danish. hard to miss at scram.</li>\n<li>iced coffee</li>\n</ul>\n<h4 id=\"evening\">evening</h4>\n<ul>\n<li>bang cookie</li>\n<li>mixed rice, chicken, spinach</li>\n</ul>\n<h2 id=\"habit-tracking\">habit tracking</h2>\n<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> drink 80oz water</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> read</li>\n<li>[] protein</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> vitamins &#x26; supplements</li>\n<li>[] meditate</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> training and/or mobility (link to log)</li>\n</ul>\n<h4 id=\"comments\">comments</h4>\n<ul>\n<li>katie and i had a ton of plans and/or errands we could have run but after picking up our home and after no immediate deadlines, we took the opportunity to… relax lol everything has been feeling a million miles a minute, so we were happy to have a calm, relaxing evening in our clean home with the best cat in the world.</li>\n</ul>";

				const frontmatter = {"title":"No. 7","description":"the quiet before the storm","publishDate":"27 Apr 2024","coverImage":{"src":"./IMG_5024.jpg","alt":"a gentlecat."},"tags":["relaxed","content"],"draft":false,"minutesRead":"2 min read"};
				const file = "D:/joe-website/src/content/weeklies/2024-04-27/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n_This post is a retrospective on 4/30._\r\n\r\n## hours of sleep\r\n\r\n7\r\n\r\n## poi (points of interest)\r\n\r\n- went to [scram](https://www.instagram.com/scramjc/?hl=en) with dongsquad (minus shan because sleep)\r\n- hung out at montanas with shan for most of the day\r\n- relaxed a bit at home, emotionally geared up for monday.\r\n- arkanoid and tactics ogre are fire lol\r\n\r\n## song stuck in my head\r\n\r\ncan’t remember\r\n\r\n## gratitude\r\n\r\n- thankful that even with the move, i’ll still be near some of my dearest friends. things will inevitably change, but at least we are only 20-30 minutes away.\r\n- a good pastry or cookie is difficult to forget.\r\n- just sitting with katie in quiet is a delight. small but wonderful moments. i will not take them for granted, especially with the rocket we are on.\r\n\r\n## reminders\r\n\r\n- needed to get some things together for monday\r\n- outback is on its way to carmax\r\n\r\n## food log\r\n\r\n#### brunch:\r\n\r\n- [sausage, egg, and cheese from scram](https://www.instagram.com/scramjc/p/C42Ml77s9ku/?hl=en). so good.\r\n- also gnoshed on their oatmeal chocolate chip cookie, strawberry rhubarb pie, and danish. hard to miss at scram.\r\n- iced coffee\r\n\r\n#### evening\r\n\r\n- bang cookie\r\n- mixed rice, chicken, spinach\r\n\r\n## habit tracking\r\n\r\n- [x] drink 80oz water\r\n- [x] read\r\n- [] protein\r\n- [x] vitamins & supplements\r\n- [] meditate\r\n- [ ] training and/or mobility (link to log)\r\n\r\n#### comments\r\n\r\n- katie and i had a ton of plans and/or errands we could have run but after picking up our home and after no immediate deadlines, we took the opportunity to… relax lol everything has been feeling a million miles a minute, so we were happy to have a calm, relaxing evening in our clean home with the best cat in the world.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"hours-of-sleep","text":"hours of sleep"},{"depth":2,"slug":"poi-points-of-interest","text":"poi (points of interest)"},{"depth":2,"slug":"song-stuck-in-my-head","text":"song stuck in my head"},{"depth":2,"slug":"gratitude","text":"gratitude"},{"depth":2,"slug":"reminders","text":"reminders"},{"depth":2,"slug":"food-log","text":"food log"},{"depth":4,"slug":"brunch","text":"brunch:"},{"depth":4,"slug":"evening","text":"evening"},{"depth":2,"slug":"habit-tracking","text":"habit tracking"},{"depth":4,"slug":"comments","text":"comments"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
