import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NodeByte Docs'
    }
  },
  logo: <Logo />,
  project: {
    link: 'https://github.com/NodeByteHosting',
  },
  chat: {
    link: 'https://discord.gg/2TgjJzrxm4',
  },
  docsRepositoryBase: 'https://github.com/NodeByteHosting/NodeByte-Docs',
  footer: {
    text: '© All Copyright 2024 by NodeByte LTD',
  },
  primaryHue: 264,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="NodeByte Knowledgebase" />
      <meta property="og:description" content="Welcome to the **NodeByte Hosting Knowledge Base**! Explore guides, troubleshooting tips, and best practices to make the most of our hosting services. Whether you're just starting or need advanced help, we've got the resources you need." />
      <link rel="icon" type="image/png" href="https://beta.nodebyte.host/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo-Black.34859308.png&w=96&q=75"></link>
    </>
  ),
 banner: {
  key: '2.0-release',
  text: (
  <a href="" target="_blank">
  🎉 New Docs Site.
  </a>
  )
  }
}

export default config
