import { articlesContext } from '../pages';
import { useContext } from 'react'
import style from '../styles/Main.module.css';
import BeigeArticle from './BeigeArticle';
import HeroMainArticle from './HeroMainArticle';

const MainHero = () => {
  const { articles } = useContext(articlesContext);
  const heroArticles = articles.slice(0,2)

  return (
    <section className={style.hero_container}>
      <HeroMainArticle article={heroArticles[0]} />
      <BeigeArticle article={heroArticles[1]} />
    </section>
  )
}

export default MainHero