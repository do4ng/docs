export interface Change {
  version: string;
  target: string;
}

export default [
  {
    version: '24-04-05',
    target: 'April 5, 2024',
  },
] satisfies Change[];
