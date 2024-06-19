import React, { useEffect, useState } from 'react';
import './News.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

function News2() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://api.11school11d.uz/news2')
      .then(res => setNews(res.data))
      .catch(err => alert(err.message));
  }, []);

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <center><h4 className='fw-bold'>Sinfxona Yangiliklari</h4></center>
      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            <img className="news-image" src={`https://api.11school11d.uz${article.image_url}`} alt={article.title} />
            <div className="news-content">
              <p className="news-date">
                <i className="fa-solid fa-calendar-days" style={{ margin: '0 10px 0 0' }}></i>
                {formatDateTime(article.date)}
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

export default News2;
