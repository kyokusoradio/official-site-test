import Nav from 'components/nav'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header>
        <div className={styles.flexContainer}>
            <h1>Kyokuso Radio</h1>
          <Nav />
        </div>
    </header>
  )
}
