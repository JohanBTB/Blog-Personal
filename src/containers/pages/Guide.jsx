import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Layout from "../../hocs/layouts/Layout"

import { useEffect } from "react"
import { Helmet } from "react-helmet-async";

function Guide(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title> Chilli winy | Guide</title>
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
            <div className="pt-36">
                Guide
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default Guide