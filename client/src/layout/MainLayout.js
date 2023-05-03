import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBox from '../components/ChatBox'

function MainLayout({children}) {
  return (
    <div>
        <div className="page_container">
            <div className="content_wrap">
                <Header />
                    <div>{children}</div>
                <ChatBox />
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default MainLayout