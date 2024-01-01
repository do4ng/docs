export interface Post {
  title: string;
  date: string;
}

export default [
  {
    title: 'Experimental Feature: useWorker',
    date: '23-12-21',
  },
  {
    title: 'Introducing 2.0!',
    date: '23-12-15',
  },
] satisfies Post[];
