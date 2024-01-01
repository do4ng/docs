export type Post = Record<string, string>;

export interface Category {
  name: string;
  posts: Post[];
}

export interface Config {
  title: string;
  category: Category[];
  directory?: string;
}

export default [
  {
    title: 'docs',
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
