import Header from 'components/header'
import React from 'react'

function Layout({ children }) {
  return (
    <>
    <Header />
        {children}
    </>
  )
}

export default Layout