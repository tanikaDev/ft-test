import { articlesContext } from '../pages';
import { useContext } from 'react'
import HeaderRow from '../components/HeaderRow'
import Nav from '../components/Nav'
import UserNav from './UserNav'
import SearchRow from './SearchRow'
import style from '../styles/Header.module.css'

const Header = () => {

  const { searchClicked } = useContext(articlesContext);
  

  return (
    <header className={style.header_cont}>
      <div className={style.user_nav_mob}>
        <UserNav  />
      </div>
      <HeaderRow />
      {searchClicked ? <SearchRow /> : null}
      <div className={style.header_line}></div>
      <Nav />
    </header>
  )
}  

export default Header