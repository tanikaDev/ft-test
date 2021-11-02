import { articlesContext } from '../pages';
import { useContext } from 'react'
import { FiX } from 'react-icons/fi';
import style from '../styles/Header.module.css'


const SearchRow = () => {

  const { handleSearchClick, handleSearch, setLoading } = useContext(articlesContext);

  const searchClickFunc = (e) => {
    setLoading(true)
    handleSearch(e)
  }

  return (
    <div className={style.search_row_container}>
      <label htmlFor="search"></label>
      <input type="text" name="search" id="search" placeholder="Search the FT" className={style.search_row_input} />
      <button type="submit" className={style.search_row_btn} onClick={searchClickFunc} >Search</button>
      <button type="submit" className={style.search_row_btn} onClick={handleSearchClick} ><FiX /></button>
    </div>
  )
}

export default SearchRow