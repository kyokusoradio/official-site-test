import Link from "next/link"

import {Yukiue} from "components/animation/yukiue"
import {Sugioka} from "components/animation/sugioka"

import styles from "styles/member.module.css"

export default function MemberSection() {
  return (
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
            <div>
              <Link href='/member#yukiue' className={styles.member__more}>
                <a>より詳しく</a>
                </Link>
            </div>
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
            <div>
              <Link href='/member#sugioka'  className={styles.member__more}>
                <a>より詳しく</a>
                </Link>
            </div>
          </div>
          <div className={styles.sugioka__flexright}>
            <Sugioka />
          </div>
        </div>
      </section>
  )
}