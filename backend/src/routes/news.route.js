import express from 'express';
import * as newsController from '../controllers/news.controller';
// import { newNewsValidator } from '../validators/news.validator';
// import { newsAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all newss
router.get('/headline', newsController.getAllNewss);

//route to create a new news
router.post('', newsController.newNews);

//route to get a single news by their news id
router.get('/:_id', newsController.getNews);

//route to update a single news by their news id
router.put('/:_id', newsController.updateNews);

//route to delete a single news by their news id
router.delete('/:_id', newsController.deleteNews);

export default router;
