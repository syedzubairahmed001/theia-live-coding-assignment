import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import Layout from '../containers/Layout/Layout.container';
import Navbar from '../components/Navbar/Navbar.component';
import { BsTwitter, BsInstagram } from 'react-icons/bs'
export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Relax Frens</title>
                <meta name="description" content="Create your own environment using soothing and relaxing nature sounds to be more productive at work, study to ace your exams, practice yoga / meditation or just relax frens" />
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <main className={styles.main}>
             
            </main>

        </div>
    )
}
