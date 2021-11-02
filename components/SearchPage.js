import { useState, useContext } from 'react';
import { articlesContext } from '../pages';
import Pagination from '../components/Pagination';
import style from '../styles/Main.module.css';
import ImageTopArticle from './ImageTopArticle';


const SearchPage = () => {
  const { search } = useContext(articlesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(12);

  const searchFilter = search.filter((article, index) => {
    if (article.metadata && article.images.length > 0) {
      return article
    }
  })
  
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const searchList = searchFilter.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (page) => setCurrentPage(page);

  return (
    <>
      {searchFilter.length > 1 ? <div className={style.search_page_container}>
        {searchList.map((article, index) => (
          <ImageTopArticle key={index} article={article} />
        ))}      
      </div> : <p>Loading...</p>}
      <Pagination current={currentPage} articlesPer={articlesPerPage} articlesTotal={searchFilter.length} paginate={paginate} />
    </>
  )
}

export default SearchPage