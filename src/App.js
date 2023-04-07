import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import store from "store";
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import AnimatedRoutes from './AnimatedRoutes';


function App() {

  return (
    <HelmetProvider>
      <Helmet>
        <title> Chilli winy | My Page</title>
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

        <link rel="canonical" href="www.chilliwiny.com"></link>
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes />  

        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
