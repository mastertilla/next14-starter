import Links from '@/components/navbar/links/Links'
import styles from "./navbar.module.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <div className={inter.className}>
      <div  className={styles.container}>
        <div className={styles.logo}>Logo</div>
          <div>
            <Links />
          </div>
      </div>
    </div>
  )
}

export default Navbar
