export interface Change {
  version: string;
  target: string;
}

export default [
  {
    version: '24-06-08',
    target: 'June 8, 2024',
  },
  {
    version: '24-04-05',
    target: 'April 5, 2024',
  },
] satisfies Change[];
