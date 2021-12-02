import Head from 'next/head';
import Image from 'next/image';
import { Header, Footer } from '../components';
import Logo from '../public/images/logo.svg'
import Mockup from '../public/images/mockup.svg'
import Mockup2 from '../public/images/mockup-2.svg'
import Mockup3 from '../public/images/mockup-3.svg'
import { SiAndroid } from 'react-icons/si';
import { IoSwapVertical, IoSearch } from 'react-icons/io5';

export default function Home() {
    const info = [
        {
            name: 'Category',
            color: 'red-brand',
        },
        {
            name: 'Description',
            color: 'blue-brand',
        },
        {
            name: 'Types',
            color: 'green-brand',
        },
        {
            name: '+More',
            color: 'dark-brand',
        },
    ];

    return (
        <>
            <Head>
                <title>Pokedex App</title>
                <meta name='description' content='Download your Pokedex App' />
                <link rel='icon' href='/favicon.ico' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossorigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Header />
            <section className='w-full h-screen md:h-full max-h-screen'>
                <div className='w-full h-full md:h-90% flex flex-col bg-red-brand bg-elements md:py-10'>
                    <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10'>
                        <div className='flex flex-col md:flex-row items-center'>
                            <div className='w-full md:w-1/2 flex flex-col items-center md:items-start pt-24 md:pt-0 pb-10'>
                                <h1 className='font-semibold text-4xl text-white text-center md:text-left py-12'>
                                    Get your <br />
                                    <span className='font-bold text-5xl'>
                                        Pokedex
                                    </span>
                                </h1>
                                <a
                                    href='images/logo.svg'
                                    download='logo.svg'
                                    className='w-44 h-10 flex justify-center items-center gap-4 bg-yellow-brand font-semibold text-sm text-gray-brand rounded-lg'
                                >
                                    Download <SiAndroid />
                                </a>
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col items-center pt-10'>
                                <Image
                                    src={Mockup}
                                    alt='Mockup'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full h-screen md:h-full max-h-screen'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 md:pt-10'>
                    <div className='w-full h-screen md:h-full flex flex-col md:flex-row-reverse items-center'>
                        <div className='w-full md:w-3/5 h-1/2 flex flex-col justify-center items-center md:px-8'>
                            <h2 className='font-bold text-2xl text-dark-brand text-center py-4'>
                                Find all pokemons!
                            </h2>
                            <p className='text-lg text-dark-brand text-justify'>
                                In this Pokedex you will find all pokemon of all
                                seasons with the updated info today
                            </p>
                            <div className='w-8/12 mt-10'>
                                <div className='flex gap-2 items-center'>
                                    <IoSwapVertical className='text-dark-brand' />
                                    <p className='font-medium text-lg text-dark-brand'>
                                        Scrolling in the list
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <IoSearch className='text-dark-brand' />
                                    <p className='font-medium text-lg text-dark-brand'>
                                        Using a search bar
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-2/5 h-1/2 flex flex-col justify-start items-center relative'>
                            <Image
                                src={Mockup2}
                                alt='Mockup'
                                className='z-10'
                            />
                            <div className='w-8/12 h-90% flex justify-center items-end bg-red-brand rounded-t-full z-0 absolute bottom-0'>
                                <Image
                                    src={Logo}
                                    alt='Pokeball'
                                    className='transform translate-y-2/4'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full h-screen md:h-full max-h-screen'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 md:pb-10'>
                    <div className='w-full h-screen md:h-full flex flex-col md:flex-row items-center'>
                        <div className='w-full md:w-2/5 h-1/2 flex flex-col justify-end items-center relative'>
                            <Image
                                src={Mockup3}
                                width={300}
                                height={300}
                                alt='Mockup'
                                className='z-10'
                            />
                            <div className='w-8/12 h-90% flex justify-center items-start bg-red-brand rounded-b-full z-0 absolute top-0'>
                                <Image
                                    src={Logo}
                                    alt='Pokeball'
                                    className='w-12 h-12 transform -translate-y-2/4'
                                />
                            </div>
                        </div>
                        <div className='w-full md:w-3/5 h-1/2 flex flex-col justify-center items-center md:px-8'>
                            <h2 className='font-bold text-2xl text-dark-brand text-center py-4'>
                                Discover information
                                <br /> of your favorite
                                <br /> pokemons
                            </h2>
                            <p className='text-lg text-dark-brand text-justify'>
                                Access to the main information of each pokemon
                                in one touch
                            </p>
                            <div className='w-full mt-10'>
                                <div className='flex justify-evenly items-center'>
                                    {info.map((element) => (
                                        <p
                                            className={`font-medium text-sm text-${element.color}`}
                                        >
                                            {element.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
