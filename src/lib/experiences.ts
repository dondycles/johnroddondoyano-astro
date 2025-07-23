import {
  TbBrandAstro,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandSupabase,
  TbBrandTailwind,
  TbBrandVite,
  TbBrandWordpress,
} from 'react-icons/tb';

export const EXPERIENCES = [
  {
    icon: 'https://santienzphilsinc.com/favicon.ico',
    name: 'Santienz Phils. Inc.',
    description:
      'Built two websites for the company. Public website and the admin portal where they can modify the contents in the public protal. The public website was build with Astro and the admin portal was built with NextJS.',
    date: 'Jul 2025',
    tech_stacks: [
      { name: 'Astro', icon: TbBrandAstro },
      { name: 'NextJS', icon: TbBrandNextjs },
      { name: 'Supabase', icon: TbBrandSupabase },
      { name: 'TailwindCSS', icon: TbBrandTailwind },
    ],
    links: [
      {
        name: 'Main Website',
        link: 'https://santienzphilsinc.com/',
      },
    ],
  },
  {
    icon: 'https://heroe-z-kousei.vercel.app/favicon.ico',
    name: 'HeroeZ!',
    description:
      'Built a website for showcasing and minting NFTs with NextJS while the minting page was built with ViteJS.',
    date: 'Jul 2023 - Nov 2023',
    tech_stacks: [
      { name: 'NextJS', icon: TbBrandNextjs },
      { name: 'ViteJS', icon: TbBrandVite },
      { name: 'TailwindCSS', icon: TbBrandTailwind },
    ],
    links: [
      {
        name: 'Main Website',
        link: 'https://heroe-z-kousei.vercel.app/',
      },
      {
        name: 'Minting Website',
        link: 'https://herorez-mint-vite.vercel.app/',
      },
    ],
  },
  {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcExNWzpAQTpbjDNktSplwiJktyhiqy1luydktSlWdTZjsCthpy5djDNirSxhoDJksixeRTBcRDNXQTNaQzJdQy5cQy9eQyxbQi1fRC8ekcCxAAAAGnRSTlMAFgssvv/nb/7QI5RZOoBHrO6LTG7RuP+l+hhZa7AAAAD/SURBVHgBrclHYoAwDADBtYTccKFD/v/Q9B6OmevwH5wA6MANNU+IThM3ckwvCWP5Fb6gvJCiv1NjqRYkRooNjIFvMiBNxSKaWjWvg/LO2VhiHHnRu0grJXY+NG1mA7lVMWvExpfueM1gw2v6Rkq8EZtAVahToRcHME28Kxk/0UfBhapWytj5VEfRzGiOYskl9Tbk6HjTLOfZZVmcDgEY4kjgnWRYN9lXKq5bAQ3CJ1+Oc53zebG4SWGwwKeQt10fNuf2WqT7HFLlh3V7OM9VLZSo/LLqdS410B1/ree5MRm38j4Lkrl3LMI93Lpf17JyQ455P57t83KTwjsn/IcnMv0KzI1A9boAAAAASUVORK5CYII=',
    name: 'Junior Web Dev. (Internship)',
    description: "Maintained, updated, and redesigned a client's WordPress website.",
    date: 'Feb 2023 - May 2023',
    tech_stacks: [{ name: 'Wordpress', icon: TbBrandWordpress }],
    links: [
      {
        name: 'Website',
        link: 'https://themghs.com/',
      },
    ],
  },
  {
    icon: 'https://studiocxgnus-vanilla.vercel.app/imgs/logo.png',
    name: 'Studio CXGNUS',
    description:
      'Built a website for showcasing and minting NFTs with Vanilla JS only but later on remade it with NextJS.',
    date: 'Jul 2022 - Dec 2022',
    tech_stacks: [
      { name: 'JavaScript', icon: TbBrandJavascript },
      { name: 'NextJS', icon: TbBrandNextjs },
      { name: 'TailwindCSS', icon: TbBrandTailwind },
    ],
    links: [
      {
        name: 'Vanilla JS Version',
        link: 'https://studiocxgnus-vanilla.vercel.app/',
      },
      {
        name: 'React Version',
        link: 'https://studiocxgnus-react.vercel.app/',
      },
    ],
  },
];
