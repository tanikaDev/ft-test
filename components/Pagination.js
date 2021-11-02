import style from '../styles/Main.module.css';
const Pagination = ({ articlesPer, articlesTotal, paginate }) => {

  const pages = []

  for (let i = 1; i<= Math.ceil(articlesTotal / articlesPer); i++) {
    pages.push(i)
  }

  return (
    <div className={style.pagination_container}>
      {pages.map((page, index) => (
        <button key={index} id={index} className={style.pagination_btn} onClick={() => paginate(page)}>{page}</button>
      ))}
    </div>
  )
}

export default Pagination