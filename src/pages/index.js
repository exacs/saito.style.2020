import React from "react"
import Timeline from "../components/timeline"
import Logo from "../components/logo"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Logo className="mx-auto my-8 h-32 w-auto" />
    <Timeline />
  </Layout>
)
