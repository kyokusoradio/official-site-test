import styles from "styles/links.module.css"

import Link from "next/link"

import { RadioImage } from "components/link-image"
import { YukiueImage } from "components/link-image"
import { SugiokaImage } from "components/link-image"

export default function LinksSection() {
  return (
    <section className={styles.linksContainer}>
        <h2 className={styles.linksTitle}>
          <span className={styles.linksTitle__main__top}>Links &amp;</span><br></br>
          <span className={styles.linksTitle__main__bottom}>Contents</span><br></br>
          <span className={styles.linksTitle__sub}>各種リンクとコンテンツ</span>
        </h2>
        <div className={styles.links__radio}>
            <h3 className={styles.links__radio__title}>Kyokuso Radio's</h3>
          <p className={styles.links__subtitle}>旭操ラジオ</p>
          <div className={styles.links__radio__flexContainer}>
            <div className={styles.links__radio__flexLeft}>
              <RadioImage />
            </div>
            <div className={styles.links__radio__flexRight}>
              <ul className={styles.links__radio__list}>
                <li className={styles.links__radio__list__twitter}>
                  <Link href=''>
                    <a>
                      <img src="./images/twitter.svg"></img>
                      @kyokuso_radio
                    </a>
                  </Link>
                </li>
                <li className={styles.links__radio__list__instagram}>
                  <Link href=''>
                    <a>
                      <img src="./images/instagram.svg"></img>
                      kyokuso_radio
                    </a>
                  </Link>
                </li>
                <li className={styles.links__radio__list__youtube}>
                  <Link href=''>
                    <a>
                      <img src="./images/instagram.svg"></img>
                      <div>旭操ラジオ<br></br>-Kyokuso Radio-</div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.links__yukiue}>
            <h3 className={styles.links__yukiue__title}>Yukiue's</h3>
            <p className={styles.links__subtitle}>ゆきうえ</p>
            <div className={styles.links__yukiue__flexContainer}>
            <div className={styles.links__yukiue__flexLeft}>
              <YukiueImage />
            </div>
            <div className={styles.links__yukiue__flexRight}>
              <ul className={styles.links__yukiue__list}>
                <li className={styles.links__yukiue__list__twitter}>
                  <Link href='https://twitter.com/tykky4Yukiue'>
                    <a>
                      <img src="./images/twitter.svg"></img>
                      @tykky4Yukiue
                    </a>
                  </Link>
                </li>
                <li className={styles.links__yukiue__list__instagram}>
                  <Link href='https://www.instagram.com/tykky4yukiue'>
                    <a>
                      <img src="./images/instagram.svg"></img>
                      tykky4yukiue
                    </a>
                  </Link>
                </li>
                <li className={styles.links__yukiue__list__youtube}>
                  <Link href='/yukiue-blog/'>
                    <a>
                      <img src="./images/blog.svg"></img>
                      <p>ゆきうえのデザイン日記（仮）</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.links__sugioka}>
            <h3 className={styles.links__sugioka__title}>Sugioka's</h3>
            <p className={styles.links__subtitle}>スギオカ</p>
            <div className={styles.links__sugioka__flexContainer}>
            <div className={styles.links__sugioka__flexLeft}>
              <SugiokaImage />
            </div>
            <div className={styles.links__sugioka__flexRight}>
              <ul className={styles.links__sugioka__list}>
                <li className={styles.links__sugioka__list__twitter}>
                  <Link href='https://twitter.com/chansugi2019'>
                    <a>
                      <img src="./images/twitter.svg"></img>
                      @chansugi2019
                    </a>
                  </Link>
                </li>
                <li className={styles.links__sugioka__list__instagram}>
                  <Link href='https://www.instagram.com/chansugi106'>
                    <a>
                      <img src="./images/instagram.svg"></img>
                      chansugi106
                    </a>
                  </Link>
                </li>
                <li className={styles.links__sugioka__list__blog}>
                  <Link href=''>
                    <a>
                      <img src="./images/blog.svg"></img>
                      <div>スギちゃんのANN</div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}