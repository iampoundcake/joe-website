import { f as createComponent, e as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_03esds4C.mjs';
import { $ as $$Base, a as $$Image } from './404_CAanZK12.mjs';

const aboutImg = new Proxy({"src":"/_astro/about-joe.Cen7l9SV.png","width":1111,"height":1193,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/joe-website/src/assets/about-joe.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://itsjoescott.xyz");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const meta = {
    description: "I'm a starter theme for Astro.build",
    title: "About"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <h1 class="title">about 🐱‍🚀🍩</h1> <p>
i began jotting notes and keeping a record of my day-to-day (week-to-week in lazier times lol). it was a 
			great practice but what i missed was the digital component. before having a notebook, all of my ideas, sketches, quotes, and notes were scattered across various
			apps which grew tiresome to maintain. i tried notion and apps like it, and while it almost itched that part of my brain, something was still missing. anywho, 
			decided it might before to do that collection here.
</p> <div class="flex justify-center items-center w-80 h-auto" style="display: flex; justify-content: center; align-items: center;"> ${renderComponent($$result2, "Image", $$Image, { "alt": "a fine enough self portrait", "fetchpriority": "high", "loading": "eager", "src": aboutImg })} </div> <h1 class="title"><a href="/resume">resume here 💼</a></h1><br> <h1 class="title">some interests 🧑‍🎨</h1> <ul class="list-inside list-disc"> <li>space 👽</li> <li>design 🎨</li> <li>training 🏋️‍♂️</li> <li>books 📚 (anything really, but i love scifi & scifi/fantasy)</li> <li>basketball 🏀</li> <li>web dev 🤓</li> <li>and many other things...</li> <li>oh! i also have a cat 😺</li> </ul> </div> ` })}`;
}, "D:/joe-website/src/pages/about.astro", void 0);

const $$file = "D:/joe-website/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
