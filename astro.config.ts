import { defineConfig } from "astro/config";
import fs from "fs";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./src/utils/remark-reading-time";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	// ! Please remember to replace the following site property with your own domain
	site: "https://itsjoescott.xyz",
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: "_blank",
					rel: ["nofollow, noopener, noreferrer"],
				},
			],
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: [""],
			},
		},
	},
	integrations: [
		expressiveCode(expressiveCodeOptions),
		icon(),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		mdx(),
	],
	image: {
		domains: ["webmention.io"],
		service: {
			entrypoint: 'astro/assets/services/sharp'
		}
	},
	// https://docs.astro.build/en/guides/prefetch/
	prefetch: true,
	vite: {
		plugins: [rawFonts([".ttf", ".woff"])],
		optimizeDeps: {
			exclude: ["@resvg/resvg-js", "sharp"]
		},
	},
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		imageService: true,
		devImageService: 'sharp',
		functionPerRoute: false
	}),
});

  
function rawFonts(ext: Array<string>) {
	return {
		name: "vite-plugin-raw-fonts",
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore:next-line
		transform(_, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return {
					code: `export default ${JSON.stringify(buffer)}`,
					map: null,
				};
			}
		},
	};
}
