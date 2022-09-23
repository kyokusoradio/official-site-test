import styles from "styles/platform-list.module.css"

import Link from "next/link"


export function PlatformList() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="https://podcasts.apple.com/jp/podcast/%E6%97%AD%E6%93%8D%E3%83%A9%E3%82%B8%E3%82%AA-kyokuso-radio/id1571370763">
          <a>
            <img src='./images/apple.svg' alt=" "></img>
            Apple Podcast
          </a>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="https://open.spotify.com/show/3kcRVZYazLQhRhlAJ8OZ1y">
          <a>
            <img src='./images/spotify.svg' alt=" "></img>
            Spotify
          </a>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81YzE3ZjhkNC9wb2RjYXN0L3Jzcw==">
          <a>
            <img src="./images/google.svg"></img>
            Google Podcast
          </a>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="https://music.amazon.com/podcasts/f9dc0d73-bebe-48ed-9a35-404440e25ed6/旭操ラジオ--kyokuso-radio-">
          <a>
            <img src="./images/amazon.svg"></img>
            Amazon Music
          </a>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href='https://www.stitcher.com/podcast/kyokuso-radio'>
          <a>
            <img src="./images/stitcher.svg"></img>
            Stitcher
          </a>
        </Link>
      </li>
    </ul>
  )
}