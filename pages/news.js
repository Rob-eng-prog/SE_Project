import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

 const News = ({news}) => {
  news.articles.map(article => console.log(article))
  return (
    <div>
      {news.articles.map(article => {
        return(
          <div key={article.source._id} className="p-3 border-black">
            <div className="p-4 m-3 bg-red-400">
              <p className="text-md">{article.author}</p>
              <h1 className="text-2xl">{article.title}</h1>
              <Link href={article.url}>
                <a>{article.url}</a>
            </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

News.getInitialProps = async () => {
  const url = 'https://newsapi.org/v2/everything?' +
  'q= Suny Plattsburgh&' +
  'from=2000-001-01&'+
  'to=2021-04-27&'+
  'sortBy=popularity&' +
  'language=en&'+
  'apiKey=fe513d21860c4e3381b8ae478774e157';
  const res = await fetch(url); //GET Request
  const data = await res.json();
  console.log(data)
  return { news: data }
}

export default News; 