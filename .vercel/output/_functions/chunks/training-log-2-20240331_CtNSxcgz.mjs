import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"log\">log</h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Time Elapsed</th><th>Cals 🔥</th><th>Avg 💕</th></tr></thead><tbody><tr><td>31:18</td><td>354</td><td>163bpm</td></tr></tbody></table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Exercise</th><th>Lap</th><th>Reps</th></tr></thead><tbody><tr><td>Warm-up + 500M</td><td>4:37.4</td><td>n/a</td></tr><tr><td>Parallel Bar Dips</td><td>:59.7</td><td>30</td></tr><tr><td>500M</td><td>2:55.7</td><td>n/a</td></tr><tr><td>Pull Ups</td><td>1:27.5</td><td>15</td></tr><tr><td>500m</td><td>3:03.6</td><td>n/a</td></tr><tr><td>Decline Pushups</td><td>2:12.3</td><td>30</td></tr><tr><td>500m</td><td>3:01.8</td><td>n/a</td></tr><tr><td>Pull Ups</td><td>2:17.1</td><td>15</td></tr><tr><td>500m</td><td>2:58.3</td><td>n/a</td></tr><tr><td>Push ups</td><td>2:58</td><td>30</td></tr></tbody></table>\n<h2 id=\"notes\">notes</h2>\n<p>a little chipper on a sunday. don’t feel as horrible as wednesday, so that’s something.</p>";

				const frontmatter = {"title":"sunday scaries (1)","publishDate":"31 Mar 2024","tags":["training","hybrid","cardio"],"description":"30 min until you forget work is tomorrow.","minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/training/training-log-2-20240331.md";
				const url = undefined;
				function rawContent() {
					return "## log\r\n\r\n|Time Elapsed                | Cals 🔥 | Avg 💕 |\r\n|------ |---------|--------|\r\n| 31:18| 354 | 163bpm|\r\n\r\n| Exercise                   | Lap | Reps  \r\n| -------------------------- | ---- | ----- |\r\n| Warm-up + 500M    | 4:37.4    | n/a\r\n| Parallel Bar Dips    | :59.7    | 30 |\r\n| 500M                   | 2:55.7    | n/a |\r\n| Pull Ups    | 1:27.5    | 15    |\r\n| 500m     | 3:03.6    | n/a  |\r\n| Decline Pushups  | 2:12.3    | 30    | \r\n| 500m     | 3:01.8 | n/a|\r\n| Pull Ups     | 2:17.1 | 15|\r\n| 500m     | 2:58.3 | n/a |\r\n| Push ups     | 2:58 | 30 |\r\n\r\n\r\n## notes\r\na little chipper on a sunday. don't feel as horrible as wednesday, so that's something.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"log","text":"log"},{"depth":2,"slug":"notes","text":"notes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
