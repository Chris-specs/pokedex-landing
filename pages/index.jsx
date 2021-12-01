import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
    return (
      <>
            <Head>
                <title>Pokedex App</title>
                <meta name='description' content='Download your Pokedex App' />
                <link rel='icon' href='/favicon.ico' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>
            <section className='w-full h-screen max-h-screen'>
                <div className='w-full h-full flex flex-col bg-red-brand'>
                  <Header />
                  <h1>Pokedex</h1>
                </div>
            </section>
      </>
    );
}
