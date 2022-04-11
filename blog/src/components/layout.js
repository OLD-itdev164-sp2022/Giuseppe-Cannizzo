import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./Header"
import "./layout.css"
import GlobalStyle from './GlobalStyle'
import { Gray } from './ThemeGray/Gray'
import styled, { ThemeProvider } from "styled-components"
import { Main } from './Main'
import { Footer } from './Footer'

const Content = styled.div`
margin: 0 auto;
max-width: 960px;
padding: 0 1.0875rem 1.45;
padding-top: 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

 return (
    <ThemeProvider theme={Gray}>
    <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <Content>
        <main m={20}>{children}</main>
        <Footer>
            {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </Footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
