import style from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={style.footer_container}>
        <p ><span className={style.ft_font}>Financial Times</span> Mini site replica</p>
        <p className={style.footer_sign}>Made by Tanika Robinson</p>
      </footer>
    </>
  )
}

export default Footer