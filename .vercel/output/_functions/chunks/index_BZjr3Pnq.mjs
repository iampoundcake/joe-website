import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"author\">author</h2>\n<p>Rebecca Yarros</p>\n<h2 id=\"genre\">genre</h2>\n<p>Romantasy</p>\n<h2 id=\"my-one-sentence-synop\">my one sentence synop</h2>\n<p>if how to train your dragon, attack on titan training arc, and 5% hbo late night had a baby</p>\n<h2 id=\"slap-rating\">slap rating</h2>\n<p>it pats the cheek, but def almost left a mark.</p>\n<h2 id=\"more-thoughts-spoilers\">more thoughts (spoilers)</h2>\n<p>as far as romantasies go, this one is pretty good. enemies-to-lovers. the tension there was decent. it is not genre-bending by any means but definitely a good entry into the lexicon of romantasies. i think if you love this genre, then you will enjoy this book. there are def moments that catch you off guard with how emotionally dense it is. i found myself surprised at how attached i grew toward certain characters. i think it’s worth the read if you’re looking for something fun and entertaining to read.</p>";

				const frontmatter = {"title":"fourth wing #1","description":"she powerfully leaves her mark","publishDate":"24 May 2024","coverImage":{"src":"./cover.jpg","alt":"book cover"},"tags":["📖","fantasy","★★★¾"],"draft":false,"minutesRead":"1 min read"};
				const file = "D:/joe-website/src/content/media-library/fourthwing/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## author\r\n\r\nRebecca Yarros\r\n\r\n## genre\r\n\r\nRomantasy\r\n\r\n## my one sentence synop\r\n\r\nif how to train your dragon, attack on titan training arc, and 5% hbo late night had a baby\r\n\r\n## slap rating\r\n\r\nit pats the cheek, but def almost left a mark.\r\n\r\n## more thoughts (spoilers)\r\n\r\nas far as romantasies go, this one is pretty good. enemies-to-lovers. the tension there was decent. it is not genre-bending by any means but definitely a good entry into the lexicon of romantasies. i think if you love this genre, then you will enjoy this book. there are def moments that catch you off guard with how emotionally dense it is. i found myself surprised at how attached i grew toward certain characters. i think it's worth the read if you're looking for something fun and entertaining to read.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"author","text":"author"},{"depth":2,"slug":"genre","text":"genre"},{"depth":2,"slug":"my-one-sentence-synop","text":"my one sentence synop"},{"depth":2,"slug":"slap-rating","text":"slap rating"},{"depth":2,"slug":"more-thoughts-spoilers","text":"more thoughts (spoilers)"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
