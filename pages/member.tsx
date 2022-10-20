import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/member-page.module.css'
import Link from 'next/link'

import Header from "components/header"
import Toppage from "components/top-page"
import { MembersTop } from "components/animation/members-top"
import {Person} from "components/person"
import Footer from "components/footer"

import { ProfileYukiue } from 'components/animation/profile-yukiue'
import { ProfileSugioka } from 'components/animation/profile-sugioka'



const Members: NextPage = () => {
  return (
      <>
      <Header />
      <main className={styles.contents}>
      <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>Members</h1>
        <p className={styles.titleBox__subtitle}>おそらく毎回いる人たちとゲストの皆さんの紹介</p>
      </div>
      <div className={styles.imageFrame}>
        <MembersTop />
      </div>

      <div className={styles.texts}>
        <p className={styles.text}>基本的にはゆきうえとスギオカの2人で話をしていますが、たまにゲストが来てくれます。</p>
        <p className={styles.text}>このページではゆきうえとスギオカの情報を掲載していますが、随時来てくれたゲストの皆さんも追加していこうと思っています。</p>
      </div>

        <section className={styles.host} id="yukiue">
          <h2 className={styles.host__title}>Main Hosts</h2>
          <p className={styles.host__subtitle}>メインパーソナリティ</p>
          <div className={styles.host__yukiue} >
            <Person
              name="Yukiue"
              ruby="ゆきうえ/ゆっきー"
              twitter='tykky4yukiue'
              twitterOn
              instagram='tykky4yukiue'
              instagramOn
              otherUrl=''
              othersOn
              othersTitle='ゆきうえのデザイン日記（仮）へ'
              text={
                <>
                  <p>
                    ２０代前半の？型。<br />
                    その名に恥じぬ冬生まれ。ブルベ冬。
                  </p>
                  <p className={styles.host__strong}>「旭操ラジオの目が死んでる方」</p>
                  <p>
                    スギちゃんとは中学からの同級生。<br />
                    中学では同じ部活に所属し、高校では丸坊主に。<br />
                    大学ではコーヒー等を飲むサークルに所属し、現在はIT企業でデザイナーをしている。
                  </p>
                  <p>トムとジェリーが好きで、LINEスタンプは全制覇しているが、塩顔で基本的に目が死んでいる。</p>
                  <p id="sugioka">個人ブログ「ゆきうえのデザイン日記(仮)」では、ラジオでは話しきれない最近知った面白いデザインやコーヒー、趣味のことについて記事を書く予定。</p>
                </>
              }
            >
              <ProfileYukiue />
            </Person>
          </div>
          <div className={styles.host__sugioka}>
            <Person name="Sugioka"
              ruby="スギオカ/スギちゃん"
              twitter='tykky4yukiue'
              twitterOn
              instagram='tykky4yukiue'
              instagramOn
              otherUrl=''
              othersOn
              othersTitle="スギちゃんのANNS（仮）へニッポンs（仮）へ"
              text={
                <>
                  <p>
                    ２０代前半の？型。<br />
                    言われてみれば納得な夏生まれ。
                  </p>
                  <p className={styles.host__strong}>「旭操ラジオのよく笑う方」</p>
                  <p>
                    ゆきうえとは中学からの同級生。<br />
                    中学では同じ部活に所属し、高校でも中学と同じ陸上部に所属。<br />
                    大学でも陸上部に所属し、勉学との両立に励む。
                  </p>
                  <p>現在は日本最高学府において法学を学びつつ、部活やアイドルのライブなど精力的に活動中。</p>
                  <p>個人ブログ「スギちゃんのオールナイトニッポンS（仮）」では、好きなアイドルの話を中心に、さまざまな話題について首を突っ込んだり引っ込めたりする予定。</p>
                </>
              }
            >
              <ProfileSugioka />
            </Person>
          </div>
        </section>
        <section className={styles.guests}></section>

      </main>
      <Footer />
      </>
  )
}

export default Members
