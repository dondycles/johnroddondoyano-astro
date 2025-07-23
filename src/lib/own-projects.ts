import { TbBeach, TbBrandNextjs, TbBrandSupabase, TbBrandTailwind } from 'react-icons/tb';

export const OWN_PROJECTS = [
  {
    icon: 'https://pennylist.app/favicon.ico',
    name: 'pennylist',
    description:
      'A web app for tracking expenses and savings at the same with analytics and history.',
    tech_stacks: [
      {
        name: 'TanStack Start',
        icon: TbBeach,
      },
      {
        name: 'Supabase',
        icon: TbBrandSupabase,
      },
      {
        name: 'TailwindCSS',
        icon: TbBrandTailwind,
      },
    ],
    links: [{ name: 'Main Website', link: 'https://pennylist.app' }],
  },
  {
    icon: 'https://wheel-of-pearl.vercel.app/favicon.ico',
    name: 'Wheel Of Pearl',
    description: 'Web application you can use to help you decide in life.',
    tech_stacks: [
      {
        name: 'NextJS',
        icon: TbBrandNextjs,
      },

      {
        name: 'TailwindCSS',
        icon: TbBrandTailwind,
      },
    ],
    links: [{ name: 'Main Website', link: 'https://wheel-of-pearl.vercel.app/' }],
  },
  {
    icon: 'https://tapxiety.vercel.app/favicon.ico',
    name: 'Tapxiety',
    description: 'A simple web game to ease your anxiety.',
    tech_stacks: [
      {
        name: 'NextJS',
        icon: TbBrandNextjs,
      },
      {
        name: 'TailwindCSS',
        icon: TbBrandTailwind,
      },
    ],
    links: [{ name: 'Main Website', link: 'https://tapxiety.vercel.app/' }],
  },
];
