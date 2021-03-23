import HttpStatus from 'http-status-codes';
import * as NewsService from '../services/news.service';

/**
 * Controller to get all newss available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllNewss = async (req, res, next) => {
  try {
    const data = await NewsService.getAllNewss();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All news fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single news
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getNews = async (req, res, next) => {
  try {
    const data = await NewsService.getNews(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'News fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new news
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newNews = async (req, res, next) => {
  try {
    const data = await NewsService.newNews(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'News created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a news
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateNews = async (req, res, next) => {
  try {
    const data = await NewsService.updateNews(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'News updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a news
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteNews = async (req, res, next) => {
  try {
    await NewsService.deleteNews(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'News deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
