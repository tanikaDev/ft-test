import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import CTA from '../components/CTA';
import SearchPage from '../components/SearchPage';
import Main from '../components/MainContent';
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css';

export const articlesContext = React.createContext();

export default function Home({articlesData}) {
  const [searchClicked, setSearchClicked] = useState(false)
  const [search, setSearch] = useState([])
  const [loading, setLoading] = useState(false);

  const articles = articlesData.results[0].results.map(article => {
    if (article.images.length > 0) {
      article.images[0].url = article.images[0].url.replace("&fit=scale-down&width=167", "")
      return article
    }
    return article
    
  });

  console.log(articles[0])

  const handleSearchClick = (e) => {
    setLoading(false)
    setSearch([])
    setSearchClicked(!searchClicked);
  }

  const handleSearch = async (e) => {
    let searchValue = e.target.parentElement.childNodes[1].value;
    
    if (searchValue === "") {
      return setLoading(false)
    }

    setLoading(true)
    

    const options = {method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
      body: JSON.stringify({
        "queryString": searchValue,
        "resultContext" : {
          "aspects" :[  "title","lifecycle","location", "images", "metadata", "summary", "editorial", "master" ]
       }})
    };

    const res = await fetch("api/search", options)
    const returnedData = await res.json();
    const searchArticles = returnedData.results[0].results
    return setSearch(searchArticles);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Financial Times</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="News, analysis and comment from the Financial Times, the world's leading global business publication" />
      </Head>
      <articlesContext.Provider value={{articles, handleSearchClick, handleSearch, searchClicked, search, setLoading}} >
        <Header />
        <CTA />
        { !loading ? <Main /> : <SearchPage />}
        <Footer />
      </articlesContext.Provider>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.ft.com/content/search/v1?`,  {method: "POST",
  headers: {
  "X-Api-Key": process.env.API_KEY,
  "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "queryString": "banks",
    "resultContext" : {
      "contextual": true,
      "highlight": false,
       "aspects" :[  "title","lifecycle","location", "images", "metadata", "summary", "editorial", "master" ]
    }})
  })

  const articlesData = await res.json();

  return {
    props: {articlesData}
  }

}

// on search fetch add so images are hi res (in map)
// .map(article => {
//   if (article.images.length > 0) {
//     article.images[0].url = article.images[0].url.replace("&fit=scale-down&width=167", "")
//     return article
//   }
//   return article
  
// });