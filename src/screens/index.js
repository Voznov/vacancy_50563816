import Posts from './Posts';
import Comment from './Comment';

export const SCREEN_DATA = {
  Posts: {
    component: Posts,
    options: {
      title: 'Посты',
    },
  },
  Comment: {
    component: Comment,
    options: {
      title: 'Комментарии',
    },
  },
};
