import React from "react"
import Lottie, { className } from "react-lottie"
import animationData from "src/videos/sugioka.json"

export function Sugioka() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      isClickToPauseDisabled: true,
      ariaRole: '',
      className:'sugioka',
      rendererSettings: {
        preserveAspectRatio: "none slice"
      },
    };

  return <Lottie
    options={defaultOptions}
    height={'100%'}
    width={'auto'}
    isClickToPauseDisabled={true}
  />
}