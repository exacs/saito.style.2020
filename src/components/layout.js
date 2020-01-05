import React from "react"
import Helmet from "react-helmet"
import "./layout.css"

export default ({ children }) => (
  <div>
    <Helmet>
      <title>saito.style</title>
    </Helmet>
    <div className='p-4 font-sans bg-indigo-900 text-white'>{children}</div>
  </div>
)
