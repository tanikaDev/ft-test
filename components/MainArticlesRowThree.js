import { articlesContext } from '../pages';
import { useContext } from 'react'
import MainColumnArticles from './MainColumnArticles';
import style from '../styles/Main.module.css';

const MainRowTwo = () => {
  const { articles } = useContext(articlesContext);

  const firstRowArticles = articles.filter(article => article.images.length !== 0).slice(9, 12);
  const secondRowArticles = articles.filter(article => article.images.length !== 0).slice(12, 15);


  return (
    <div className={style.articles_column_container}>
      <MainColumnArticles articles={firstRowArticles} subheading={true} showImg={true}/>
      <MainColumnArticles articles={secondRowArticles} subheading={true} showImg={true}/>
    </div>
  );
};

export default MainRowTwo;
