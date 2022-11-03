import Meta from "components/meta"
import Header from "components/header"
import Footer from "components/footer"

import styles from "styles/privacy.module.css"

export default function Policy() {
  return (
    <>
      <Meta pageTitle="プライバシーポリシー" />
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>プライバシーポリシー</h1>
        <div className={styles.privacyList}>
          <div className={styles.privacyItem}>
            <h2>お客様から取得する情報</h2>
            <p>私たち旭操ラジオは、お客様から以下の情報を取得します。</p>
            <ul>
              <li>
                外部サービスでお客様が利用するID、その他外部サービスのプライバシー設定によりお客様が連携先に開示を認めた情報
              </li>
              <li>
                Cookie(クッキー)を用いて生成された識別情報
              </li>
              <li>
                OSが生成するID、端末の種類、端末識別子等のお客様が利用するOSや端末に関する情報
              </li>
              <li>
                旭操ラジオウェブサイトの滞在時間、入力履歴、購買履歴等の旭操ラジオウェブサイトにおけるお客様の行動履歴
              </li>
              <li>
                お客様の位置情報
              </li>
            </ul>
          </div>
          <div className={styles.privacyItem}>
            <h2>お客様の情報を利用する目的</h2>
            <p>私たち旭操ラジオは、お客様から取得した情報を、以下の目的のために利用します。</p>
            <ul>
              <li>旭操ラジオサービスに関する登録の受付、お客様の本人確認、認証のため</li>
              <li>お客様の旭操ラジオのサービスの利用履歴を管理するため</li>
              <li>旭操ラジオのサービスにおけるお客様の行動履歴を分析し、旭操ラジオのサービスの維持改善に役立てるため</li>
              <li>旭操ラジオのサービスに関するご案内をするため</li>
              <li>お客様からのお問い合わせに対応するため</li>
              <li>旭操ラジオの規約や法令に違反する行為に対応するため</li>
              <li>旭操ラジオのサービスの変更、提供中止、終了、契約解除をご連絡するため</li>
              <li>旭操ラジオの規約の変更等を通知するため</li>
              <li>以上の他、旭操ラジオのサービスの提供、維持、保護及び改善のため</li>
            </ul>
          </div>
          <div className={styles.privacyItem}>
            <h2>安全管理のために講じた措置</h2>
            <p>私たち旭操ラジオが、お客様から取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問い合わせ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。</p>
          </div>
          <div className={styles.privacyItem}>
            <h2>第三者提供</h2>
            <p>私たち旭操ラジオは、お客様から取得する情報のうち、個人データ（個人情報保護法第２条第６項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。
              但し、次の場合は除きます。
              個人データの取扱いを外部に委託する場合
              旭操ラジオや旭操ラジオのサービスが買収された場合
              事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）
              その他、法律によって合法的に第三者提供が許されている場合</p>
          </div>
          <div className={styles.privacyItem}>
            <h2>アクセス解析ツール</h2>
            <p>私たち旭操ラジオは、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。Cookieを無効にすれば、これらの情報の収集を拒否することができます。詳しくはお使いのブラウザの設定をご確認ください。Googleアナリティクスについて、詳しくは以下からご確認ください。</p>
            <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Google アナリティクス利用規約</a>
          </div>
          <div className={styles.privacyItem}>
            <h2>プライバシーポリシーの変更</h2>
            <p>私たち旭操ラジオは、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。</p>
          </div>
          <div className={styles.privacyItem}>
            <h2>プライバシーポリシーの変更</h2>
            <p>私たち旭操ラジオは、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。</p>
          </div>
          <div className={styles.privacyItem}>
            <h2>お問い合わせ</h2>
            <p>お客様の情報の開示、情報の訂正、利用停止、削除をご希望の場合は、以下のメールアドレスにご連絡ください。</p>
            <p>e-mail : <a href="mailto:kyokuso.radio0612@gmail.com">kyokuso.radio0612@gmail.com</a></p>
            <p>この場合、必ず、運転免許証のご提示等私たち旭操ラジオが指定する方法により、ご本人からのご請求であることの確認をさせていただきます。<br />
              なお、情報の開示請求については、開示の有無に関わらず、ご申請時に一件あたり1,000円の事務手数料を申し受けます。</p>
          </div>
          <div className={styles.privacyItem}>
            <h2>事業者の氏名</h2>
            <p>旭操ラジオ（ゆきうえ、スギオカ）</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}