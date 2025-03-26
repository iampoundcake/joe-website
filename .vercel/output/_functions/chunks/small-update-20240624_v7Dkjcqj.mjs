import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"what-a-whirlwind\">what a whirlwind</h2>\n<p>tomorrow will be our first 30 days in our new house and what a ride.\r\nit’s been a lot for katie and i to get through. little things like new doormats, to big things like painting and setting up furniture.\r\nnot strange for any new home owner, but our second home is now home depot. from unpacking, to building, to hanging, to set up, it’s all rewarding albeit exhausting.\r\ni have a lot of updates for the house wiki. we finally painted the stairs, a task i wish upon no one… or at least, no one who hasn’t painted wall edges a few times first.\r\nowning a home is both amazing and humbling. you always find little and big things that need doing. it’s a constant practice of priorities and patience; two things that have always been a constant challenge.</p>\n<p>this week will be dedicated to the nursery. oh, and finny comes back this week.</p>\n<h2 id=\"baby-watch-2024\">baby watch 2024</h2>\n<p>being 5 weeks out is mind-boggling. had a great brunch with the swoma crew. hearing lifelong friends offer you peace of mind and wisdom is great. it’s all so surreal considering the memories we share were us as children… this is going to sound geriatric, but the memories feel more vivid than the distance from them would entail. not sure what i expected. maybe that the memories would feel more mentally… <em>blurry</em>? but they aren’t despite their most probable inaccuracies. and now we wait to watch our kid make the very same memories. insane.</p>\n<h2 id=\"trends\">trends</h2>\n<p>book reading 📉 - picking back up now, but slowed down a lot in june\r\nexercise 📈 - slowly working it back in and remaining active with walks and golf\r\nsleep 📉 - hoping to get this back on schedule\r\npresence 📈 - a bit easier to do now that i can just sit on the back deck\r\nstress 📈📈 - lol</p>";

				const frontmatter = {"title":"update","description":"life is becoming irl stardew","publishDate":"24 Jun 2024","tags":["catchup"],"draft":false,"minutesRead":"2 min read"};
				const file = "D:/joe-website/src/content/post/small-update-20240624.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## what a whirlwind\r\n\r\ntomorrow will be our first 30 days in our new house and what a ride. \r\nit's been a lot for katie and i to get through. little things like new doormats, to big things like painting and setting up furniture.\r\nnot strange for any new home owner, but our second home is now home depot. from unpacking, to building, to hanging, to set up, it's all rewarding albeit exhausting.\r\ni have a lot of updates for the house wiki. we finally painted the stairs, a task i wish upon no one... or at least, no one who hasn't painted wall edges a few times first.\r\nowning a home is both amazing and humbling. you always find little and big things that need doing. it's a constant practice of priorities and patience; two things that have always been a constant challenge.\r\n\r\nthis week will be dedicated to the nursery. oh, and finny comes back this week. \r\n\r\n## baby watch 2024\r\n\r\nbeing 5 weeks out is mind-boggling. had a great brunch with the swoma crew. hearing lifelong friends offer you peace of mind and wisdom is great. it's all so surreal considering the memories we share were us as children... this is going to sound geriatric, but the memories feel more vivid than the distance from them would entail. not sure what i expected. maybe that the memories would feel more mentally... _blurry_? but they aren't despite their most probable inaccuracies. and now we wait to watch our kid make the very same memories. insane.\r\n\r\n## trends\r\n\r\nbook reading 📉 - picking back up now, but slowed down a lot in june\r\nexercise 📈 - slowly working it back in and remaining active with walks and golf\r\nsleep 📉 - hoping to get this back on schedule\r\npresence 📈 - a bit easier to do now that i can just sit on the back deck\r\nstress 📈📈 - lol";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-a-whirlwind","text":"what a whirlwind"},{"depth":2,"slug":"baby-watch-2024","text":"baby watch 2024"},{"depth":2,"slug":"trends","text":"trends"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
