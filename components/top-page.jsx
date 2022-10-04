import styles from "styles/top-page.module.css"

import Link from 'next/link'

import {Hero} from "components/animation/hero"
import {Yukiue} from "components/animation/yukiue"
import {Sugioka} from "components/animation/sugioka"
import { Episodeplayer } from "components/episode-player"
import { PlatformList } from "components/platform-list"
import { RadioImage } from "components/link-image"
import { YukiueImage } from "components/link-image"
import { SugiokaImage } from "components/link-image"

export default function Toppage() {
  return (
    <>
    <section className={styles.heroContainer}>
      <h1 className={styles.title}>
        <span className={styles.titleTop}>Kyokuso</span><br></br>
        <span className={styles.titleBottom}>Radio</span>
      </h1>
      <p className={styles.subtitle}>「そういえば」な話題をゆるっとお届けするポッドキャスト</p>
      <div className={styles.topAnimation}>
        <Hero />
      </div>
      <div className={styles.copy}>
        <p className={styles.copy__main}>Be Condiments</p>
        <p className={styles.copy__sub}>薬味のように、日常に味わいを</p>
      </div>
    </section>
      <section className={styles.aboutContainer}>
        <p>
          旭操ラジオは、<br></br>
          日常の中に潜む「そういえば」な話題を取り上げ<br></br>
          僕たちならではの視点を取り入れて、ゆるっとお話しする番組です。</p>
        <p>配信は週に１エピソード程度で頑張っています。</p>
        <p>お便り・質問などお待ちしております。</p>
      </section>
      <section className={styles.membersContainer}>
        <h2 className={styles.membersTitle}>
          <span className={styles.membersTitle__main}>Members</span><br></br>
          <span className={styles.membersTitle__sub}>メンバー紹介</span>
        </h2>
        <div className={styles.yukiue}>
          <div className={styles.yukiue__flexleft}>
            <Yukiue />
          </div>
          <div className={styles.yukiue__flexright}>
            <h3 className={styles.yukiueTitle}>Yukiue</h3>
            <p className={styles.yukiueSubtitle}>ゆきうえ</p>
            <p className={styles.yukiueText}>
              ゆっきーと呼ばれがち。<br></br>
              デザイナー。<br></br>
              デザイン目線や、ちょっと独特な世界観で話をすることが多い。
            </p>
          </div>
        </div>
        <div className={styles.sugioka}>
          <div className={styles.sugioka__flexleft}>
            <h3 className={styles.sugiokaTitle}>Sugioka</h3>
            <p className={styles.sugiokaSubtitle}>スギオカ</p>
            <p className={styles.sugiokaText}>
              スギちゃんと呼ばれがち。<br></br>
              大学院生。<br></br>
              ツッコミ的なポジションで、話し出すと止まらない。<br></br>
              アイドルオタク。
            </p>
          </div>
          <div className={styles.sugioka__flexright}>
            <Sugioka />
          </div>
        </div>
      </section>
      <section className={styles.episodesContainer}>
        <h2 className={styles.episodesTitle}>
          <span className={styles.episodesTitle__main}>Episodes</span><br></br>
          <span className={styles.episodesTitle__sub}>エピソード</span>
        </h2>
        <div className={styles.episodePlayer}>
          <Episodeplayer />
        </div>
        <div className={styles.alsoListen}>
          <h3 className={styles.alsoListen__title}>You Can Also Listen</h3>
          <p className={styles.alsoListen__subtitle}>視聴可能なプラットフォーム</p>
          <div className={styles.listWrap}>
            <PlatformList />
          </div>
        </div>
      </section>
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
                      <span>旭操ラジオ<br></br>-Kyokuso Radio-</span>
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
                  <Link href=''>
                    <a>
                      <img src="./images/twitter.svg"></img>
                      @kyokuso_yukiue
                    </a>
                  </Link>
                </li>
                <li className={styles.links__yukiue__list__instagram}>
                  <Link href=''>
                    <a>
                      <img src="./images/instagram.svg"></img>
                      kyokuso_yukiue
                    </a>
                  </Link>
                </li>
                <li className={styles.links__yukiue__list__youtube}>
                  <Link href=''>
                    <a>
                      <img src="./images/instagram.svg"></img>
                      <span>旭操ラジオ<br></br>-Kyokuso yukiue-</span>
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
                      <span>旭操ラジオ<br></br>-Kyokuso Radio-</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}