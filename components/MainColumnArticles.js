import style from '../styles/Main.module.css'
import Image from 'next/image'

const MainColumnArticles = ({ articles, subheading, showImg }) => {
  return (
    <div className={style.column_articles}>
      {articles.map((article, index) => (
        <div key={index} className={showImg ? style.article_column_item : style.article_no_img_column_item}>
          {showImg ? <div className={style.article_column_item_img}>
            <Image 
              src={article.images[0].url} 
              alt="" 
              width={768}
              height={400} 
              layout="intrinsic"
            />
          </div> : null}
          <div className={style.article_column_item_text}>
            <p className={style.article_item_theme}>{article.metadata.sections[0].term.name}</p>
            <h2 className={style.article_item_heading} >{article.title.title}</h2>
            {subheading ? <p className={style.article_item_subheading}>{article.editorial.subheading}</p> : null}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainColumnArticles

