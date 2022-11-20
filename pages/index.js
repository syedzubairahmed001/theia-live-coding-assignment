import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import Layout from '../containers/Layout/Layout.container';
import Main from '../containers/Main/Main.container';

export default function Home() {
  const [appState, setAppState] = React.useState({
    isAudioPlaying: true
  })
  const toggleAudioPlaying = () => {
    setAppState(prev => ({
      isAudioPlaying: !prev.isAudioPlaying
    }))
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Relax Frens</title>
        <meta name="description" content="Create your own environment using soothing and relaxing nature sounds to be more productive at work, study to ace your exams, practice yoga / meditation or just relax frens" />
        <link rel="icon" href="/favicon.ico" />

                  <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="zubairself" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

      </Head>

      <main className={styles.main}>
        <Layout toggleAudioPlaying={toggleAudioPlaying} appState={appState}>
          <Main toggleAudioPlaying={toggleAudioPlaying} appState={appState} />
        </Layout>

      </main>

    </div>
  )
}
