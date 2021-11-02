import style from '../styles/Main.module.css'

const BlueArticle = ({ article }) => {
  return (
    <div className={style.blue_article_container}>
      <div className={style.blue_article_theme_container}>
        <p className={style.blue_article_theme}>{article.metadata.sections[0].term.name}</p>  
      </div>
      <h2 className={style.blue_article_item_heading}>{article.title.title}</h2>
      <p className={style.blue_article_item_subheading}>{article.editorial.subheading}</p>
    </div>
  )
}

export default BlueArticle