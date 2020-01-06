import React from "react"
import Helmet from "react-helmet"
import "./layout.css"

export default ({ children }) => (
  <div className='bg-indigo-900 min-h-screen'>
    <Helmet>
      <title>saito.style</title>
    </Helmet>
    <div className='p-4 font-sans text-white max-w-xl mx-auto'>{children}</div>
  </div>
)
