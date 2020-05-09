import axios from 'axios';

/* 
 * Google Books API を叩く関数
 */
export const searchBooks = async (term: string) => {
  const url = 'https://www.googleapis.com/books/v1/volumes';
  const params = { q: term };
  try {
    const response = await axios.get(url, { params });
    return response;
  } catch (err) {
    console.log(err);
  };
};