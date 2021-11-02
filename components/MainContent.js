import MainHero from './MainArticlesHero';
import MainRowOne from './MainArticlesRowOne';
import MainRowTwo from './MainArticlesRowTwo'
import MainRowThree from './MainArticlesRowThree'
import MainRowFour from './MainArticlesRowFour';
import style from '../styles/Main.module.css'


const MainContent = () => {

  return (
    <div className={style.container}>
      <div className={style.mobile_padding}>
        <MainHero />
        <MainRowOne />
        <MainRowTwo />
        <MainRowThree />
        <MainRowFour />
      </div>
    </div>
  )
}

export default MainContent