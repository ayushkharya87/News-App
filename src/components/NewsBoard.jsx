import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = () => {

    const [articles, setArticles] = useState([]);

    const fetchData = async () => {
      let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8c90ca0567fc4b3fa5d94a7f6292302b");
      let data = await response.json();
      setArticles(data.articles);
    }

    useEffect(() => {
      fetchData()
    }, [])

  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>

        {articles.map((e, index) => {
            return <NewsItem key={index} title={e.title} description={e.description} src={e.urlToImage} url={e.url} />
        })}

    </div>
  )
}

export default NewsBoard