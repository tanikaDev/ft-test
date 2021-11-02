import Image from "next/image";
import style from '../styles/Main.module.css';

const BeigeArticle = ({ article }) => {

  return (
    <article className={style.beige_article_container} >
      <div className={style.beige_article_img} >
          <Image 
        src={article.images[0].url} 
        alt=""
        width={300}
        height={180}
        layout="intrinsic"
        />
      </div>
      <div className={style.beige_article_text_container}>
        <div className={style.beige_article_theme_container}>
          {article.metadata.primaryTheme ? <p className={style.beige_article_theme}>{article.metadata.primaryTheme.term.name}</p> : <p className={style.beige_article_theme}>{article.metadata.sections[0].term.name}</p>}
        </div>
        <h2 className={style.beige_article_title}>{article.title.title}</h2>
      </div>
    </article>
  )
}

export default BeigeArticle