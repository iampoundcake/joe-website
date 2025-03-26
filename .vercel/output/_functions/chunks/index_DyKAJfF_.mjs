import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_03esds4C.mjs';

const html = "<h2 id=\"tldr\">tldr</h2>\n<ol>\n<li>Ensure your social media links are added in <code>src/components/SocialList.astro</code>, most importantly the email address</li>\n<li>Create an account @ <a href=\"https://webmention.io/\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">Webmention.io</a>.</li>\n<li>Add the link feed to <code>siteConfig.webmentions</code>, found in <code>src/site.config.ts</code>.</li>\n<li>Create a <code>.env</code> file, or rename the included <code>.example.env</code>, and add the key <code>WEBMENTION_API_KEY</code> and set the api key as the value.</li>\n<li>Go to <a href=\"https://brid.gy/\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">brid.gy</a> and sign-in to each social account[s] you wish to link.</li>\n<li>Publish and build your website, remember to add the api key, and it should now be ready to receive webmentions!</li>\n<li>That’s it, maybe give this post a like!</li>\n</ol>\n<h2 id=\"what-are-webmentions\">What are webmentions</h2>\n<p>Put simply, it’s a way to show users who like, comment, repost and more, on various pages on your website via social media.</p>\n<p>This theme displays the number of likes, mentions and replies each blog post receives. There are a couple of more webmentions that I haven’t included, like reposts, which are currently filtered out, but shouldn’t be too difficult to include.</p>\n<h2 id=\"steps-to-add-it-to-your-own-site\">Steps to add it to your own site</h2>\n<p>Your going to have to create a couple of accounts to get things up-and-running. But, the first thing you need to ensure is that your social links are correct.</p>\n<ul>\n<li>\n<p>Head over to <code>src/components/SocialList.astro</code> and enter your details into the <code>socialLinks</code> array. By default, the most important is your email address as this has the <code>isWebmention</code> property. This just adds the <code>rel=\"me authn\"</code> value to the social link. You don’t have to include an email, you can just delete it and any others, just make sure that at least one social link has the <code>isWebmention</code> property, or set the <code>rel</code> property yourself. See <a href=\"https://indielogin.com/setup\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">IndieLogin.com</a> for more information on how to authenticate your domain via links.</p>\n</li>\n<li>\n<p>Next up, head over to <a href=\"https://webmention.io/\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">Webmention.io</a> and setup an account by Signing in with your domain name, e.g. <code>https://astro-cactus.chriswilliams.dev/</code>. Please note that .app TLD’s don’t function correctly. Once in, it will give you a couple of links for your domain to accept webmentions. Make a note of these and head over to <code>src/site.config.ts</code> and add them to <code>siteConfig.webmentions</code>.</p>\n</li>\n</ul>\n<p>Quick note: You don’t have to include the pingback link. Maybe coincidentally, but after adding it I started to receive a higher frequency of spam in my mailbox, informing me that my website could be better. Tbh they’re not wrong. I’ve now removed it, but it’s up to you.</p>\n<ul>\n<li>\n<p>Next is to add your api key, also from <a href=\"https://webmention.io/\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">Webmention.io</a>, to a <code>.env</code> file. Rename the <code>.example.env</code>, or create your own, with <code>WEBMENTION_API_KEY=</code> and then your personal key. Please try not to publish this to a repository.</p>\n</li>\n<li>\n<p>You’re now going to have to sign-up to <a href=\"https://brid.gy/\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">brid.gy</a>. As the name suggests, it links your website to your social media accounts (you need to add your website to these social accounts if you don’t already), so sign-up/connect each account you intend brid.gy to search. Just a thing to note again, brid.gy currently has an issue with .app TLD domains.</p>\n</li>\n</ul>\n<p>With everything set, it’s now time to build and publish your website. <em>REMEMBER</em> to set the <code>WEBMENTION_API_KEY</code> key with your host, I also forgot this part.</p>\n<h2 id=\"testing-everything-works\">Testing everything works</h2>\n<p>With everything setup and live, you can check to see if everything is working by sending a test webmention via <a href=\"https://webmention.rocks/receive/1\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">webmentions.rocks</a>. Log in with your domain, enter the auth code, and then the url of the page you want to test. For example, to test this page I would add <code>https://astro-cactus.chriswilliams.dev/posts/webmentions/</code>. To view it on your website, rebuild or [re]start dev mode locally, and you should see the result at the bottom of your page.</p>\n<p>You can also view any test mentions in the browser via the <a href=\"https://github.com/aaronpk/webmention.io#api\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">api</a>.</p>\n<h2 id=\"things-to-add-things-to-consider\">Things to add, things to consider</h2>\n<ul>\n<li>\n<p>At the moment, fresh webmentions are only fetched on a rebuild or restarting dev mode, which obviously means if you don’t update your site very often you wont get a lot of new content. It should be quite trivial to add a cron job to run the <code>getAndCacheWebmentions()</code> function in <code>src/utils/webmentions.ts</code> and populate your blog with new content. This is probably what I’ll add next as a github action.</p>\n</li>\n<li>\n<p>I have seen some mentions have duplicates. Unfortunately, they’re quite difficult to filter out as they have different id’s.</p>\n</li>\n<li>\n<p>I’m not a huge fan of the little external link icon for linking to comments/replies. It’s not particularly great on mobile due to its size, and will likely change it in the future.</p>\n</li>\n</ul>\n<h2 id=\"acknowledgements\">Acknowledgements</h2>\n<p>Many thanks to <a href=\"https://github.com/chrismwilliams/astro-theme-cactus/issues/107#issue-1863931105\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">Kieran McGuire</a> for sharing this with me, and the helpful posts. I’d never heard of webmentions before, and now with this update hopefully others will be able to make use of them. Additionally, articles and examples from <a href=\"https://kld.dev/adding-webmentions/\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">kld</a> and <a href=\"https://ryanmulligan.dev/blog/\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">ryanmulligan.dev</a> really helped in getting this set up and integrated, both a great resource if you’re looking for more information!</p>";

				const frontmatter = {"title":"Adding Webmentions to Astro Cactus","description":"This post describes the process of adding webmentions to your own site","publishDate":"11 Oct 2023","tags":["webmentions","astro","social"],"minutesRead":"4 min read"};
				const file = "D:/joe-website/src/content/post_archive/webmentions/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## tldr\r\n\r\n1. Ensure your social media links are added in `src/components/SocialList.astro`, most importantly the email address\r\n2. Create an account @ [Webmention.io](https://webmention.io/).\r\n3. Add the link feed to `siteConfig.webmentions`, found in `src/site.config.ts`.\r\n4. Create a `.env` file, or rename the included `.example.env`, and add the key `WEBMENTION_API_KEY` and set the api key as the value.\r\n5. Go to [brid.gy](https://brid.gy/) and sign-in to each social account[s] you wish to link.\r\n6. Publish and build your website, remember to add the api key, and it should now be ready to receive webmentions!\r\n7. That's it, maybe give this post a like!\r\n\r\n## What are webmentions\r\n\r\nPut simply, it's a way to show users who like, comment, repost and more, on various pages on your website via social media.\r\n\r\nThis theme displays the number of likes, mentions and replies each blog post receives. There are a couple of more webmentions that I haven't included, like reposts, which are currently filtered out, but shouldn't be too difficult to include.\r\n\r\n## Steps to add it to your own site\r\n\r\nYour going to have to create a couple of accounts to get things up-and-running. But, the first thing you need to ensure is that your social links are correct.\r\n\r\n- Head over to `src/components/SocialList.astro` and enter your details into the `socialLinks` array. By default, the most important is your email address as this has the `isWebmention` property. This just adds the `rel=\"me authn\"` value to the social link. You don't have to include an email, you can just delete it and any others, just make sure that at least one social link has the `isWebmention` property, or set the `rel` property yourself. See [IndieLogin.com](https://indielogin.com/setup) for more information on how to authenticate your domain via links.\r\n\r\n- Next up, head over to [Webmention.io](https://webmention.io/) and setup an account by Signing in with your domain name, e.g. `https://astro-cactus.chriswilliams.dev/`. Please note that .app TLD's don't function correctly. Once in, it will give you a couple of links for your domain to accept webmentions. Make a note of these and head over to `src/site.config.ts` and add them to `siteConfig.webmentions`.\r\n\r\nQuick note: You don't have to include the pingback link. Maybe coincidentally, but after adding it I started to receive a higher frequency of spam in my mailbox, informing me that my website could be better. Tbh they're not wrong. I've now removed it, but it's up to you.\r\n\r\n- Next is to add your api key, also from [Webmention.io](https://webmention.io/), to a `.env` file. Rename the `.example.env`, or create your own, with `WEBMENTION_API_KEY=` and then your personal key. Please try not to publish this to a repository.\r\n\r\n- You're now going to have to sign-up to [brid.gy](https://brid.gy/). As the name suggests, it links your website to your social media accounts (you need to add your website to these social accounts if you don't already), so sign-up/connect each account you intend brid.gy to search. Just a thing to note again, brid.gy currently has an issue with .app TLD domains.\r\n\r\nWith everything set, it's now time to build and publish your website. _REMEMBER_ to set the `WEBMENTION_API_KEY` key with your host, I also forgot this part.\r\n\r\n## Testing everything works\r\n\r\nWith everything setup and live, you can check to see if everything is working by sending a test webmention via [webmentions.rocks](https://webmention.rocks/receive/1). Log in with your domain, enter the auth code, and then the url of the page you want to test. For example, to test this page I would add `https://astro-cactus.chriswilliams.dev/posts/webmentions/`. To view it on your website, rebuild or [re]start dev mode locally, and you should see the result at the bottom of your page.\r\n\r\nYou can also view any test mentions in the browser via the [api](https://github.com/aaronpk/webmention.io#api).\r\n\r\n## Things to add, things to consider\r\n\r\n- At the moment, fresh webmentions are only fetched on a rebuild or restarting dev mode, which obviously means if you don't update your site very often you wont get a lot of new content. It should be quite trivial to add a cron job to run the `getAndCacheWebmentions()` function in `src/utils/webmentions.ts` and populate your blog with new content. This is probably what I'll add next as a github action.\r\n\r\n- I have seen some mentions have duplicates. Unfortunately, they're quite difficult to filter out as they have different id's.\r\n\r\n- I'm not a huge fan of the little external link icon for linking to comments/replies. It's not particularly great on mobile due to its size, and will likely change it in the future.\r\n\r\n## Acknowledgements\r\n\r\nMany thanks to [Kieran McGuire](https://github.com/chrismwilliams/astro-theme-cactus/issues/107#issue-1863931105) for sharing this with me, and the helpful posts. I'd never heard of webmentions before, and now with this update hopefully others will be able to make use of them. Additionally, articles and examples from [kld](https://kld.dev/adding-webmentions/) and [ryanmulligan.dev](https://ryanmulligan.dev/blog/) really helped in getting this set up and integrated, both a great resource if you're looking for more information!\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"tldr","text":"tldr"},{"depth":2,"slug":"what-are-webmentions","text":"What are webmentions"},{"depth":2,"slug":"steps-to-add-it-to-your-own-site","text":"Steps to add it to your own site"},{"depth":2,"slug":"testing-everything-works","text":"Testing everything works"},{"depth":2,"slug":"things-to-add-things-to-consider","text":"Things to add, things to consider"},{"depth":2,"slug":"acknowledgements","text":"Acknowledgements"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
