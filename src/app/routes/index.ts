import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { ServiceRoutes } from '../modules/Service/service.route';
import { IssueRoutes } from '../modules/Issue/issue.route';
import { AuthRoutes } from '../modules/Auth/auth.route';

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/issues',
    route: IssueRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
