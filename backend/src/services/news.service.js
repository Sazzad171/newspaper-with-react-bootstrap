import News from '../models/news.model';
const NewsAPI = require('newsapi');

//get all newss
export const getAllNewss = async () => {
  try {
    const newsapi = new NewsAPI('1fc1824e40174167b4cfafb5a39ddb11');
    const data = await newsapi.v2.topHeadlines({
      // sources: 'bbc-news,the-verge',
      // q: 'bitcoin',
      // category: 'business',
      language: 'en',
      country: 'us'
    });
    return data;
  } catch (error) {}
};

//create new news
export const newNews = async (body) => {
  const data = await News.create(body);
  return data;
};

//update single news
export const updateNews = async (_id, body) => {
  const data = await News.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single news
export const deleteNews = async (id) => {
  await News.findByIdAndDelete(id);
  return '';
};

//get single news
export const getNews = async (id) => {
  const data = await News.findById(id);
  return data;
};
