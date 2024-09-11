import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NodeByte Knowledgebase'
    }
  },
  logo: <span>NodeByte Documentation</span>,
  project: {
    link: 'https://github.com/NodeByteHosting',
  },
  chat: {
    link: 'https://discord.gg/nodebyte',
  },
  docsRepositoryBase: 'https://github.com/NodeByteHosting/knowledgebase',
  footer: {
    text: 'NodeByte LTD © 2024 ',
  },
  primaryHue: 264,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="NodeByte Knowledgebase" />
      <meta property="og:description" content="Welcome to the **NodeByte Hosting Knowledge Base**! Explore guides, troubleshooting tips, and best practices to make the most of our hosting services. Whether you're just starting or need advanced help, we've got the resources you need." />
    </>
  ),
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://discord.com/oauth2/authorize?client_id=852564657674649636&permissions=2147862592&scope=bot%20applications.commands" target="_blank">
  //       🎉 HalloweenBot Version 4 is released. Invite Now →
  //     </a>
  //   )
  // }
}

export default config
