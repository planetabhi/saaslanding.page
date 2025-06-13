import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, l as renderHead, n as renderSlot, o as Fragment } from '../chunks/astro/server_RgPHFiDW.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const persona = {
    firstName: "SaaS",
    secondName: "Landing",
    description: "Celebrating the craft and care of SaaS design",
    story:
      "We celebrate exceptional SaaS design here. These tastefully designed sites and apps transcend mere marketing tools or products. They blend dedication, creativity, and precision, elevating digital experiences. Discover thoughtful typography, layouts, spacing, and cool ideas that showcase design's power.",
  sections: {
    sites: [
        {
          title: "antimetal.com",
          desc: 'Automate infrastructure.',
          url: 'https://antimetal.com/?ref=saaslanding.page'
        },
        {
          title: "daylightcomputer.com",
          desc: 'Caring computer.',
          url: 'https://daylightcomputer.com/?ref=saaslanding.page'
        },
        {
          title: "dovetail.com",
          desc: 'Customer insights.',
          url: 'https://dovetail.com/?ref=saaslanding.page'
        },
        {
          title: "family.co",
          desc: 'Crypto wallet.',
          url: 'https://family.co/?ref=saaslanding.page'
        },
        {
          title: "lovi.care",
          desc: 'Smart skin care.',
          url: 'https://lovi.care/?ref=saaslanding.page'
        },
        {
          title: "osome.com",
          desc: 'Incorporation and accounting.',
          url: 'https://osome.com/?ref=saaslanding.page'
        },
        {
          title: "pipe.com",
          desc: 'Capital platform.',
          url: 'https://pipe.com/?ref=saaslanding.page'
        },
        {
          title: "steep.app",
          desc: 'Business intelligence.',
          url: 'https://steep.app/?ref=saaslanding.page'
        },                                    
    ],
    experience: [
      {
          title: "linear.app",
          desc: 'Plan and build products.',
          url: 'https://linear.app/?ref=saaslanding.page'
      },
      {
        title: "slack.com",
        desc: 'Communicate with your team.',
        url: 'https://slack.com/?ref=saaslanding.page'
      }
  ],
  },
      contacts: [
      {
        title: "Curated by @planetabhi.",
        url: 'https://planetabhi.com/'
      },
    ],

  };

const $$Astro$5 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Link;
  const { title, url, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="link"${addAttribute(url, "href")}${addAttribute(target, "target")} data-astro-cid-mbqdmgin>${title}</a> `;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/components/Link.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <p class="footer-content"> ${persona.contacts.map((c) => renderTemplate`<span class="footer-link">${renderComponent($$result, "Link", $$Link, { "target": "_blank", "title": c.title, "url": c.url })}</span>`)} </p> </footer>`;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, desc } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Celebrating the craft and care of SaaS marketing design"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(desc, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(desc, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(desc, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="container"> <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <h1 class="title" data-astro-cid-3ef6ksr2>${title}</h1> <p class="description" data-astro-cid-3ef6ksr2>${description}</p> </header> `;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Story = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Story;
  const { story } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="story">${story}</article>`;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/components/Story.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute(title.toLowerCase(), "id")} class="section-title" data-astro-cid-azbpcp4f>${title}</h3> `;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/components/SectionTitle.astro", void 0);

const $$List = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="list"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/components/List.astro", void 0);

const $$Astro = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { title, desc, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="list-item"> ${url ? renderTemplate`<a${addAttribute(url, "href")} target="_blank" class="list-item-link"> <span class="list-item-title">${title}</span> <span class="list-item-separator"> — </span> <span class="list-item-desc">${desc}</span> </a>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="list-item-title">${title}</span> <span class="list-item-separator"> — </span> <span class="list-item-desc">${desc}</span> ` })}`} </p>`;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/components/ListItem.astro", void 0);

const $$Section = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="section" data-astro-cid-sh445jdo> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/components/Section.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const fullName = persona.firstName + " " + persona.secondName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": fullName, "desc": persona.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "title": fullName, "description": persona.description })} ${renderComponent($$result2, "Story", $$Story, { "story": persona.story })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Sites Collection" })} ${renderComponent($$result3, "List", $$List, {}, { "default": ($$result4) => renderTemplate`${persona.sections.sites.map((e) => renderTemplate`${renderComponent($$result4, "ListItem", $$ListItem, { "title": e.title, "desc": e.desc, "url": e.url })}`)}` })} ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Apps Collection" })} ${renderComponent($$result3, "List", $$List, {}, { "default": ($$result4) => renderTemplate`${persona.sections.experience.map((e) => renderTemplate`${renderComponent($$result4, "ListItem", $$ListItem, { "title": e.title, "desc": e.desc, "url": e.url })}`)}` })} ` })} ` })}`;
}, "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/pages/index.astro", void 0);

const $$file = "/Users/abhi/Documents/Personal Exp/saaslanding.page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
