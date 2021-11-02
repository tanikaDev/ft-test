import Link from "next/link"
import styles from '../styles/Header.module.css'

const UserNav = () => {
  return (
    <>
      <ul className={styles.user_nav }>
        <li>
          <Link href="/sign-in">Sign In</Link>
        </li> 
        <li>
          <Link href="/subscribe" passHref>
            <button className={styles.user_nav_button }>Subscribe</button>
          </Link>
        </li> 
      </ul>
    </>
  )
}

export default UserNav