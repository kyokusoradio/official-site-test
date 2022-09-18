import React from "react"
import Lottie from "react-lottie"
import animationData from "src/videos/hero-animation.json"

import styles from "styles/hero-animation.module.css"


export function Hero() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "none slice"
      },
    };

  return <Lottie options={defaultOptions} height="auto" width="150%" className={styles.hero} />
}