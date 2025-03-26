import rss from '@astrojs/rss';
import { s as siteConfig } from './404_CAanZK12.mjs';
import { e as getAllPosts } from './__Pn_eqc5M.mjs';

const GET = async () => {
  const posts = await getAllPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://itsjoescott.xyz",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `posts/${post.slug}`
    }))
  });
};

export { GET };
