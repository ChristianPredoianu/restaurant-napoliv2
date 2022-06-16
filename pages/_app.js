import AuthContextProvider from '../context/AuthContext';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import '../styles/globals.css';
import '../components/vertical-swiper/VerticalSwiper.css';
import NapoliLogo from '@/assets/images/napoli-logo.png';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Napoli, olofström, dagens lunch" />
        <meta property="og:image" content={NapoliLogo} key="ogimage" />
        <meta
          property="og:site_name"
          content="Napoli Olofström"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Välkommen till restaurang Napoli i Olofström"
          key="ogtitle"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
