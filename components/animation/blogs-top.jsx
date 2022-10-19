import React from "react"
import Lottie, { className } from "react-lottie"
import animationData from "src/videos/blogs-top.json"


export function BlogsTop() {
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