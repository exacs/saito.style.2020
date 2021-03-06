import React from "react"

export default ({ className }) => (
  <svg width={192} height={256} viewBox="0 0 192 256" className={className}>
    <path fill="white" d="M 0 0    l 160 256  l 32 0 l -160 -256" />
    <path fill="black" d="M 0 256  l 160 -256 l 32 0 l -160 256" />
  </svg>
)
