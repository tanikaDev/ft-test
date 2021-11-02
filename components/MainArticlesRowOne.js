import { articlesContext } from '../pages';
import { useContext } from 'react'
import style from '../styles/Main.module.css'
import ImageTopArticle from './ImageTopArticle';

const MainArticlesRow = () => {
  const { articles } = useContext(articlesContext);


  const fourArticles = articles.filter(article => article.images.length !== 0).slice(2, 6)

  return (
    <div className={style.article_row_container}>
      {fourArticles.map((article, index)=> (
        <ImageTopArticle key={index} article={article} />
      ))}
    </div>
  )

}

export default MainArticlesRow