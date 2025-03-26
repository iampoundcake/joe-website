import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<p><em>This post is a retrospective on 4/30.</em></p>\n<h2 id=\"hours-of-sleep\">hours of sleep</h2>\n<p>8</p>\n<h2 id=\"poi-points-of-interest\">poi (points of interest)</h2>\n<ul>\n<li>literally can’t remember a lot of sunday haha i know there were some errands here and there.</li>\n<li>ohhh i went grocery shopping.</li>\n<li>excited about our paint picks</li>\n</ul>\n<h2 id=\"song-stuck-in-my-head\">song stuck in my head</h2>\n<p>can’t remember</p>\n<h2 id=\"gratitude\">gratitude</h2>\n<ul>\n<li>more laundry, more cleaned, took it all in before tomorrow 😵‍💫</li>\n<li>katie has been handling it all so well</li>\n</ul>\n<h2 id=\"reminders\">reminders</h2>\n<h2 id=\"food-log\">food log</h2>\n<ul>\n<li>i honestly can’t remember what i ate lol wow i guess i was nervous. i did order lamb and chicken shawarma.</li>\n<li>i think i had a pb&#x26;j?</li>\n</ul>\n<h2 id=\"habit-tracking\">habit tracking</h2>\n<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> drink 80oz water</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> read</li>\n<li>[] protein</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> vitamins &#x26; supplements</li>\n<li>[] meditate</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> training and/or mobility (link to log)</li>\n</ul>\n<h4 id=\"comments\">comments</h4>\n<p>i was feeling a range of things… a mix of tired but wired. anticipation and nerves but hopeful.</p>";

				const frontmatter = {"title":"No. 8","description":"getting things in order before closing","publishDate":"28 Apr 2024","coverImage":{"src":"./IMG_5026.jpg","alt":"paint swatches, and too many choices."},"tags":["antsy","excited"],"draft":false,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/dailies/2024-04-28/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n_This post is a retrospective on 4/30._\r\n\r\n## hours of sleep\r\n\r\n8\r\n\r\n## poi (points of interest)\r\n\r\n- literally can't remember a lot of sunday haha i know there were some errands here and there.\r\n- ohhh i went grocery shopping.\r\n- excited about our paint picks\r\n\r\n## song stuck in my head\r\n\r\ncan’t remember\r\n\r\n## gratitude\r\n\r\n- more laundry, more cleaned, took it all in before tomorrow 😵‍💫\r\n- katie has been handling it all so well\r\n\r\n## reminders\r\n\r\n## food log\r\n\r\n- i honestly can't remember what i ate lol wow i guess i was nervous. i did order lamb and chicken shawarma.\r\n- i think i had a pb&j?\r\n\r\n## habit tracking\r\n\r\n- [x] drink 80oz water\r\n- [x] read\r\n- [] protein\r\n- [x] vitamins & supplements\r\n- [] meditate\r\n- [ ] training and/or mobility (link to log)\r\n\r\n#### comments\r\n\r\ni was feeling a range of things... a mix of tired but wired. anticipation and nerves but hopeful.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"hours-of-sleep","text":"hours of sleep"},{"depth":2,"slug":"poi-points-of-interest","text":"poi (points of interest)"},{"depth":2,"slug":"song-stuck-in-my-head","text":"song stuck in my head"},{"depth":2,"slug":"gratitude","text":"gratitude"},{"depth":2,"slug":"reminders","text":"reminders"},{"depth":2,"slug":"food-log","text":"food log"},{"depth":2,"slug":"habit-tracking","text":"habit tracking"},{"depth":4,"slug":"comments","text":"comments"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
