import styles from '../styles/CTA.module.css'
const CTA = () => {
  return (
    <section className={styles.cta}>
      <h2 className={styles.cta_text}><span className={styles.cta_text_color}>A new world is possible.</span><br />Let's not go back to what wasn't working anyway.</h2>
      <div className={styles.cta_btn}>
        <button>If you think the same, join us</button>
      </div>
    </section>
  )
}

export default CTA