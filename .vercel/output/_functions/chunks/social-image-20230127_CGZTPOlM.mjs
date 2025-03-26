const id = "social-image-20230127.md";
						const collection = "post_archive";
						const slug = "social-image-20230127";
						const body = "\r\n## Adding your own social image to a post\r\n\r\nThis post is an example of how to add a custom [open graph](https://ogp.me/) social image, also known as an OG image, to a blog post.\r\nBy adding the optional ogImage property to the frontmatter of a post, you opt out of [satori](https://github.com/vercel/satori) automatically generating an image for this page.\r\n\r\nIf you open this markdown file `src/content/post/social-image.md` you'll see the ogImage property set to an image which lives in the public folder[^1].\r\n\r\n```yaml\r\nogImage: \"/social-card.png\"\r\n```\r\n\r\nYou can view the one set for this template page [here](https://astro-cactus.chriswilliams.dev/social-card.png).\r\n\r\n[^1]: The image itself can be located anywhere you like.\r\n";
						const data = {title:"Example OG Social Image",publishDate:"27 January 2023",description:"An example post for Astro Cactus, detailing how to add a custom social image card in the frontmatter",tags:["example","blog","image"],ogImage:"/social-card.png"};
						const _internal = {
							type: 'content',
							filePath: "D:/joe-website/src/content/post_archive/social-image-20230127.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
