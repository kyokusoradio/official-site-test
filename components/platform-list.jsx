import styles from "styles/platform-list.module.css"

import Link from "next/link"


export function PlatformList() {
  return (
    <ul className={styles.list}>
      <li>
        <Link href="https://podcasts.apple.com/jp/podcast/%E6%97%AD%E6%93%8D%E3%83%A9%E3%82%B8%E3%82%AA-kyokuso-radio/id1571370763">
          <a>
            <img src='./images/apple.svg' alt=" "></img>
            Apple Podcast
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://podcasts.apple.com/jp/podcast/%E6%97%AD%E6%93%8D%E3%83%A9%E3%82%B8%E3%82%AA-kyokuso-radio/id1571370763">
          <a>
            <img src='./images/spotify.svg' alt=" "></img>
            Spotify
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://podcasts.apple.com/jp/podcast/%E6%97%AD%E6%93%8D%E3%83%A9%E3%82%B8%E3%82%AA-kyokuso-radio/id1571370763">
          <a>
            <img src="./images/google.svg"></img>
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://podcasts.apple.com/jp/podcast/%E6%97%AD%E6%93%8D%E3%83%A9%E3%82%B8%E3%82%AA-kyokuso-radio/id1571370763">
          <a>
            <img src="./images/amazon.svg"></img>
          </a>
        </Link>
      </li>
      <Link href='https://podcasts.apple.com/jp/podcast/%E6%97%AD%E6%93%8D%E3%83%A9%E3%82%B8%E3%82%AA-kyokuso-radio/id1571370763'>
        <a><img src="./images/stitcher.svg"></img></a>
      </Link>
    </ul>
  )
}