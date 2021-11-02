import { articlesContext } from '../pages';
import { useContext } from 'react'
import Image from 'next/image';
import style from '../styles/Main.module.css'
import ArticleBoxImgOverflow from './ArticleBoxImgOverflow';
import MainColumnArticles from './MainColumnArticles';

const MainArticlesRowFour = () => {

  const { articles } = useContext(articlesContext);


  const ukArticles = articles.filter((article) => {
    if (article.title.title.includes("UK")){
      return article
    }
  })

  const initialArticle = ukArticles[0]
  const firstColumnArticles = articles.filter(article => article.images.length !== 0).slice(1, 3);
  const secondColumnArticles = articles.filter(article => article.images.length !== 0).slice(3, 6);

  return (
    <>
      <div className={style.row_four_container}>
        <h2>UK News</h2>
        <div className={[style.row_four_articles_container]}>
          <div className={style.row_four_article_box_container}>
            <ArticleBoxImgOverflow article={initialArticle} />
          </div>
            <MainColumnArticles articles={firstColumnArticles} subheading={true} />
            <MainColumnArticles articles={secondColumnArticles} />
        </div>
      </div>
    </>
  )
}

export default MainArticlesRowFour