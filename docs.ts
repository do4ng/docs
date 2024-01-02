export interface Docs {
  name: string;
  description: string;

  github: string;

  index: {
    content: string;
    href: string;
  }[];

  header: Array<
    | {
        type: 'popover';
        title: string;
        children: Array<{
          title: string;
          href: string;
          icon: string;
          description?: string;
        }>;
      }
    | { title: string; href: string; type: 'link' }
  >;
}

export default {
  name: 'Documentation',
  description: 'Beautiful, Simple<br/>Documentation Template',
  index: [
    {
      content: 'Overview',
      href: '/docs/overview',
    },
    {
      content: 'Installation',
      href: '/docs/installation',
    },
  ],
  header: [
    {
      title: 'Docs',
      type: 'popover',
      children: [
        {
          title: 'Overview',
          href: '/docs/overview',
          description: 'Introduction about this template.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-book-open-line',
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          description: 'Learn how to install this template.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-book-open-line',
        },
      ],
    },
    {
      title: 'Markdown',
      type: 'link',
      href: '/docs/markdown',
    },
    {
      title: 'Blog',
      type: 'link',
      href: '/blog',
    },
  ],
} as Docs;
