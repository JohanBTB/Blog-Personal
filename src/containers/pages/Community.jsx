import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import Header from "../../components/Community/Header"
import Content from "../../components/Community/Content"

import { useEffect } from "react"
import { Helmet } from "react-helmet-async";

import Elements from "../../components/Community/Elements"
import MeetList from "../../components/Community/MeetList"
function Community(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title> Chilli winy | Community</title>
                <meta name="description" content="Discover the latest news and updates on Genshin Impact and your favorite anime series" />
                <meta name="keyboard" content="anime genshin impact naruto otaku" />
                <meta name="robots" content="all"/>
                <meta name="author" content="Chillwiny"/>                  
                <meta name="publisher" content="Chillwiny"/>

                {/* Social Media Tags */}
                <meta property='og:title' content="Chilli winy | My Page "/>
                <meta property='og:description' content="Discover the latest news and updates on Genshin Impact and your favorite anime series" />
                <meta property='og:url' content="www.chilliwiny.com" />
                <meta property="og:image" content="https://bafybeidd76sf3yb66upmipvcwylft42ryg6mm2264muw72oy56323rsc4i.ipfs.w3s.link/paimon.png" />

                {/* Twitter Tags */}
                <meta property='twitter:title' content="Chilli winy | My Page "/>
                <meta property='twitter:description' content="Discover the latest news and updates on Genshin Impact and your favorite anime series" />
                <meta property="twitter:image" content="https://bafybeidd76sf3yb66upmipvcwylft42ryg6mm2264muw72oy56323rsc4i.ipfs.w3s.link/paimon.png" />
            </Helmet>
            <Navbar></Navbar>
            <div className="m-auto bg-white dark:bg-gray-900 z-[-1]">
                <div className="relative pt-36 max-w-sm sm:max-w-xl md:max-w-5xl lg:max-w-6xl xl:max-w-10xl m-auto">
                    <Header />
                    
                </div>
            </div>
            <Content />
            <Elements />
            <MeetList />
            <Footer/>
            
        </Layout>
    )
}

export default Community
