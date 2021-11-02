import style from '../styles/Main.module.css'

const HeroMainArticle = ({ article }) => {
  return (
    <article className={style.hero_main_article_container}>
      {article.metadata.primaryTheme ? <p className={style.hero_main_article_theme}>{article.metadata.primaryTheme.term.name}</p> : <p className={style.hero_main_article_theme}>{article.metadata.sections[0].term.name}</p> }
      <h2 className={style.hero_main_article_title}>{article.title.title}</h2>
      <p className={style.hero_main_article_subheading}>{article.editorial.subheading}</p>
    </article>
  )
}

export default HeroMainArticle