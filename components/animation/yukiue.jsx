import React from "react"
import Lottie, { className } from "react-lottie"
import animationData from "src/videos/yukiue.json"


export function Yukiue() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      isClickToPauseDisabled: true,
      ariaRole: '',
      className,
      rendererSettings: {
        preserveAspectRatio: "none slice"
      },
    };

  return <Lottie options={defaultOptions} height="auto" width="100%" />
}