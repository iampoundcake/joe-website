import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"log\">log</h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Time Elapsed</th><th>Cals 🔥</th><th>Avg 💕</th></tr></thead><tbody><tr><td>37:33</td><td>296</td><td>166bpm</td></tr></tbody></table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Exercise</th><th>Sets</th><th>Reps</th><th>RBS</th></tr></thead><tbody><tr><td>KB Swings (35lbs+ruck)</td><td>4</td><td>15-20</td><td>15s</td></tr><tr><td>Weighted Push Up (ruck)</td><td>4</td><td>15-20</td><td>15s</td></tr><tr><td>Pull Ups</td><td>4</td><td>AMRAP</td><td>15s</td></tr><tr><td>Gob Squats (35lbs+ruck)</td><td>4</td><td>20</td><td>15s</td></tr><tr><td>Lawn Mower Rows (35lbs)</td><td>4</td><td>8-12</td><td>15s</td></tr><tr><td>Overhead DB March (10lbs)</td><td>2</td><td>20</td><td>15s</td></tr><tr><td>Plank</td><td>1</td><td>45s</td><td>n/a</td></tr></tbody></table>\n<h2 id=\"notes\">notes</h2>\n<p>was rather light-headed afterwards. need to pay attention to my nutrition more.</p>";

				const frontmatter = {"title":"welcome back circuit","publishDate":"27 Mar 2024","tags":["training","strength"],"description":"created a circuit that ruined me.","minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/training/training-log-1-20240327.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## log\r\n\r\n| Time Elapsed | Cals 🔥 | Avg 💕 |\r\n| ------------ | ------- | ------ |\r\n| 37:33        | 296     | 166bpm |\r\n\r\n| Exercise                  | Sets | Reps  | RBS |\r\n| ------------------------- | ---- | ----- | --- |\r\n| KB Swings (35lbs+ruck)    | 4    | 15-20 | 15s |\r\n| Weighted Push Up (ruck)   | 4    | 15-20 | 15s |\r\n| Pull Ups                  | 4    | AMRAP | 15s |\r\n| Gob Squats (35lbs+ruck)   | 4    | 20    | 15s |\r\n| Lawn Mower Rows (35lbs)   | 4    | 8-12  | 15s |\r\n| Overhead DB March (10lbs) | 2    | 20    | 15s |\r\n| Plank                     | 1    | 45s   | n/a |\r\n\r\n## notes\r\n\r\nwas rather light-headed afterwards. need to pay attention to my nutrition more.\r\n";
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
