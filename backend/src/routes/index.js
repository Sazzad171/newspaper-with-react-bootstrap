import express from 'express';
const router = express.Router();

import newsRoute from './news.route';
import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  router.use('/news', newsRoute);
  return router;
};

export default routes;
