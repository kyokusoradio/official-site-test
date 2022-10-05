import styles from "styles/link-image.module.css"
import Image from "next/image"

export function RadioImage() {
  return (
    <figure className={styles.radioLink}>
      <Image
        src='/images/radio-link.svg'
        alt=""
        layout="fill"
        objectFit="cover"
      />
    </figure>
  )
}

export function YukiueImage() {
  return (
    <figure className={styles.yukiueLink}>
      <Image
        src='/images/yukiue-link.svg'
        alt=""
        layout="responsive"
        width="100"
        height="100"
      />
    </figure>
  )
}

export function SugiokaImage() {
  return (
    <figure className={styles.sugiokaLink}>
      <Image 
        src='/images/sugioka-link.svg'
        alt=""
        layout="responsive"
        width="100"
        height="100"
      />
    </figure>
  )
}