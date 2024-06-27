export type Post = Record<string, string>;

export interface Category {
  name: string;
  posts: Post[];
  hidden?: boolean;
}

export interface Config {
  title: string;
  icon?: string;
  category: Category[];
  directory?: string;
  target: string;
}

export default [
  {
    title: 'docs',
    icon: 'book-open-line',
    target: 'overview',
    category: [
      {
        name: 'Overview',
        posts: [{ overview: 'Overview' }, { installation: 'Installation' }],
      },
      {
        name: 'Markdown',
        posts: [
          { markdown: 'Markdown' },
          { 'code-block': 'Code Block' },
          { plugins: 'Plugins' },
        ],
      },
      {
        name: 'Routing',
        posts: [{ routing: 'Routing' }],
      },
    ],
  },
] as Config[];
