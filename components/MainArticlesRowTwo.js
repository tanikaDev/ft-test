import { articlesContext } from '../pages';
import { useContext } from 'react'
import style from '../styles/Main.module.css'
import BeigeArticle from './BeigeArticle'
import BlueArticle from './BlueArticle'

const MainRowThree = () => {
  const { articles } = useContext(articlesContext);

  const threeArticles = articles.filter(article => article.images.length !== 0).slice(6, 9)

  return (
    <div className={style.article_row_container}>
      {threeArticles.map((article, index) => (
        <>
          {index === 0 ?
          <div className={style.main_row_three_beige}>
            <BeigeArticle key={index} article={article} />
          </div>
        : 
          <BlueArticle key={index} article={article} />
       }
        </>
      ))}
    </div>
  )
}

export default MainRowThree