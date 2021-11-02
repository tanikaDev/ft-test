
import Image from 'next/image';
import style from '../styles/Main.module.css'

const ArticleBoxImgOverflow = ({ article }) => {

  return (
    <>
      <div className={style.article_box_img_overflow_container}>
          <p className={style.article_box_img_overflow_item_theme}>{article.metadata.sections[0].term.name}</p>
          <h2 className={style.article_box_img_overflow_item_heading} >{article.title.title}</h2>
          <p className={style.article_item_subheading}>{article.editorial.subheading}</p>
          <div className={style.article_box_img_overflow_img}>
            <Image 
              src={article.images[0].url} 
              alt="" 
              width={768}
              height={400} 
              layout="intrinsic"
            />
          </div>
        </div>
    </>
  )
}

export default ArticleBoxImgOverflow