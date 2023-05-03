import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBox from '../components/ChatBox'

import './MainLayout.css'

function MainLayout({children}) {
  return (
    <div>
        <div className="page_container">
          <Header />
            <div className="content_wrap">
                <div>{children}</div>
                <ChatBox />
            </div>
          <Footer />
        </div>
    </div>
  )
}

export default MainLayout