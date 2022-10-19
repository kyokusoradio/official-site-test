import styles from "styles/person.module.css"
import Lottie, { className } from "react-lottie"
import Link from "next/link"

import { ProfileAnimation } from "components/animation/profile-yukiue"

export function Person(
  { name,
    ruby,
    children,
    twitter, twitterOn = false,
    instagram, instagramOn = false,
    otherUrl, othersOn = false,
    text
    }
) {
  const twitterUrl = `https://twitter.com/${twitter}/`
  const instagramUrl = `https://www.instagram.com/${instagram}/`

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h3 className={styles.name__title}>
          {name}
        </h3>
        <p className={styles.name__subtitle}>
          {ruby}
        </p>
      </div>

      <div className={styles.animation}>
        {children}
      </div>

      <div className={styles.link}>
          <ul className={styles.link__list}>
            {twitterOn && 
              <li className={styles.link__list__item}>
                <Link href={twitterUrl}>
                  <a>
                    <img src="./images/twitter.svg"></img>
                  </a>
                </Link>
              </li>
            }
            {instagramOn && 
              <li className={styles.link__list__item}>
                  <Link href={instagramUrl}>
                    <a>
                      <img src="./images/instagram.svg"></img>
                    </a>
                  </Link>
            </li>
            }
            {othersOn && 
              <li className={styles.link__list__item}>
                  <Link href={otherUrl}>
                    <a>
                      <img src="./images/blog.svg"></img>
                    </a>
                  </Link>
                </li>
            }
              </ul>
      </div>

      <div className={styles.text}>
        {text}
      </div>
    </div>
  )
}