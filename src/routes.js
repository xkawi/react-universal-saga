import {
  NotFound,
  UserPage,
  RepoPage
} from 'containers';

const routes = [
  {
    path: '/:login',
    component: UserPage
  },
  {
    path: '/:login/:name',
    component: RepoPage
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
