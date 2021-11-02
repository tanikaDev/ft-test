import Link from 'next/link'
import styles from '../styles/Header.module.css'
import UserNav from './UserNav'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.main_nav}>
        <li className={[styles.nav_mobile, styles.nav_list_item].join(" ")}><Link href="/" >HOME</Link></li> 
        <li className={[styles.nav_desktop, styles.nav_list_item].join(" ")}><Link href="/world">WORLD</Link></li> 
        <li className={[styles.nav_desktop, styles.nav_list_item].join(" ")}><Link href="/world/uk">UK</Link></li> 
        <li className={[styles.nav_desktop, styles.nav_list_item].join(" ")}><Link href="/companies">COMPANIES</Link></li>
        <li className={[styles.nav_desktop, styles.nav_list_item].join(" ")}><Link href="/technology">TECH</Link></li>
        <li className={[styles.nav_mobile, styles.nav_list_item].join(" ")}><Link href="/markets">MARKETS</Link></li>
        <li className={[styles.nav_desktop, styles.nav_list_item].join(" ")}><Link href="/climate-capital">CLIMATE</Link></li>
        <li className={[styles.nav_desktop, styles.nav_list_item].join(" ")}><Link href="/opinion">OPINION</Link></li>
        <li className={[styles.nav_desktop, styles.nav_list_item].join(" ")}><Link href="/work-careers">WORK & CAREERS</Link></li>
        <li className={[styles.nav_desktop, styles.nav_list_item].join(" ")}><Link href="/life-arts">LIFE & ARTS</Link></li>
        <li className={[styles.nav_desktop, styles.nav_list_item].join(" ")}><Link href="/htsi">HOW TO SPEND IT</Link></li>
      </ul>
      <div className={styles.nav_desktop}>
        <UserNav />
      </div>
    </nav>
  )
}  

export default Nav