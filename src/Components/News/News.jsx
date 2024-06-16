import React from 'react';
import './News.css';
import Navbar from '../Navbar/Navbar';

const newsArticles = [
  {
    image: 'https://picsum.photos/900/500?random=1',
    date: 'June 16, 2024',
    title: 'Sample News Title 1',
    body: 'This is the body of the news article. It contains the main content of the news and provides information to the readers.'
  },
  {
    image: 'https://picsum.photos/900/500?random=2',
    date: 'June 17, 2024',
    title: 'Sample News Title 2',
    body: 'This is the body of the news article. It contains the main content of the news and provides information to the readers.'
  },
  {
    image: 'https://picsum.photos/900/500?random=3',
    date: 'June 18, 2024',
    title: 'Sample News Title 3',
    body: 'This is the body of the news article. It contains the main content of the news and provides information to the readers.'
  }
];

function News() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
        <center><h4 className='fw-bold'>Sinfxona Yangiliklari</h4></center>
      <div className="news-container">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-card">
            <img className="news-image" src={article.image} alt={article.title} />
            <div className="news-content">
              <p className="news-date">
              <i class="fa-solid fa-calendar-days" style={{margin: '0 10px 0 0'}}></i>
                {article.date}
              </p>
              <h2 className="news-title">{article.title}</h2>
              <p className="news-body">{article.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default News;
