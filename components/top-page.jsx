import styles from "styles/top-page.module.css"

import {Hero} from "components/animation/hero"

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
      </section>
      <section className={styles.episodesContainer}>
        <h2 className={styles.episodesTitle}>
          <span className={styles.episodesTitle__main}>Episodes</span><br></br>
          <span className={styles.episodesTitle__sub}>エピソード</span>
        </h2>
      </section>
      <section className={styles.linksContainer}>
        <h2 className={styles.linksTitle}>
          <span className={styles.linksTitle__main__top}>Links &amp;</span><br></br>
          <span className={styles.linksTitle__main__bottom}>Contents</span><br></br>
          <span className={styles.linksTitle__sub}>各種リンクとコンテンツ</span>
        </h2>
      </section>
    </>
  )
}