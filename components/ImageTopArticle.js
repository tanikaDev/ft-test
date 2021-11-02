import style from '../styles/Main.module.css';
import Image from 'next/image'
import finTimesImg from '../public/Financial-Times.jpeg'

const ImageTopArticle = ({ article }) => {

  return (
    <>
      <div className={style.article_row_item}>
          {article.images.length > 0 ? <div className={style.img_top_article_item_img}>
            <Image 
              src={article.images[0].url} 
              alt="" 
              width={768}
              height={400} 
              layout="intrinsic"
            />
          </div> : <div className={style.img_top_article_item_img}>
            <Image 
              src={finTimesImg} 
              alt="" 
              width={768}
              height={400} 
              layout="intrinsic"
            />
          </div>}
          {article.metadata.primaryTheme ? <p className={style.img_top_article_item_theme}>{article.metadata.primaryTheme.term.name}</p> : article.metadata.sections ? <p className={style.img_top_article_item_theme}>{article.metadata.sections[0].term.name}</p> : null}
          <h2 className={style.img_top_article_item_heading} >{article.title.title}</h2>
          <p className={style.img_top_article_item_subheading}>{article.editorial.subheading}</p>
        </div>
    </>
  );
};

export default ImageTopArticle;
