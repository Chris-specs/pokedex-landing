import Head from 'next/head';
import Image from 'next/image';
import { Header, Footer } from '../components';
import Logo from '../public/images/logo.svg';
import Mockup from '../public/images/mockup.svg';
import Mockup2 from '../public/images/mockup-2.svg';
import Mockup3 from '../public/images/mockup-3.svg';
import { SiAndroid } from 'react-icons/si';
import { IoSwapVertical, IoSearch, IoArrowDown } from 'react-icons/io5';

export default function Home() {
    const info = [
        {
            name: 'Category',
            color: 'text-red-brand',
        },
        {
            name: 'Description',
            color: 'text-blue-brand',
        },
        {
            name: 'Types',
            color: 'text-green-brand',
        },
        {
            name: '+More',
            color: 'text-dark-brand',
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
                    crossOrigin='true'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Header />
            <section className='w-full h-screen md:h-full xl:h-screen max-h-screen'>
                <div className='w-full h-full md:h-90% flex flex-col md:items-center md:justify-center bg-red-brand bg-elements md:py-10'>
                    <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20'>
                        <div className='flex flex-col md:flex-row items-center'>
                            <div className='w-full md:w-1/2 flex flex-col items-center md:items-start pt-24 md:pt-0 pb-10'>
                                <h1 className='font-semibold text-4xl xl:text-7xl text-white text-center md:text-left py-12'>
                                    Get your <br />
                                    <span className='font-bold text-5xl xl:text-8xl'>
                                        Pokedex
                                    </span>
                                </h1>
                                <a
                                    href='downloads/Pokedexapp.apk'
                                    download='Pokedexapp.apk'
                                    className='w-44 h-10 xl:w-52 xl:h-12 flex justify-center items-center gap-4 bg-yellow-brand font-semibold text-sm xl:text-base text-gray-brand transform hover:scale-110 transition-all rounded-lg'
                                >
                                    Download <SiAndroid />
                                </a>
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col items-center xl:items-end pt-10'>
                                <Image src={Mockup} alt='Mockup' priority={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden xl:flex flex-col justify-center items-center h-10%'>
                    <a
                        href='#info'
                        className='flex flex-col justify-center items-center'
                    >
                        <p className='font-bold text-dark-brand'>
                            More information
                        </p>
                        <IoArrowDown className='animate-bounce text-dark-brand' />
                    </a>
                </div>
            </section>
            <section
                id='info'
                className='w-full h-screen md:h-full xl:h-screen max-h-screen flex justify-center'
            >
                <div className='w-full max-w-screen-2xl h-auto lg:h-96 xl:h-full px-6 md:px-10 md:pt-10 lg:pt-20 lg:px-20'>
                    <div className='w-full h-screen md:h-full flex flex-col md:flex-row-reverse items-center'>
                        <div className='w-full md:w-3/5 h-1/2 xl:h-full flex flex-col justify-center items-center lg:items-start md:px-8 xl:px-16 relative'>
                            <h2 className='font-bold text-2xl xl:text-5xl text-dark-brand text-center py-4'>
                                Find all pokemons!
                            </h2>
                            <p className='text-lg xl:text-2xl text-dark-brand text-justify xl:py-4 z-10'>
                                In this Pokedex you will find all pokemon of all
                                seasons with the updated info today
                            </p>
                            <div className='w-8/12 mt-10 flex flex-col xl:gap-4'>
                                <div className='flex gap-2 items-center'>
                                    <IoSwapVertical className='text-dark-brand xl:text-2xl' />
                                    <p className='font-medium text-lg xl:text-xl text-dark-brand'>
                                        Scrolling in the list
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <IoSearch className='text-dark-brand xl:text-2xl' />
                                    <p className='font-medium text-lg xl:text-xl text-dark-brand'>
                                        Using a search bar
                                    </p>
                                </div>
                            </div>
                            <div className='w-full hidden xl:flex justify-center items-end'>
                                <div className='w-72 h-72 transform translate-y-2/4 absolute z-0 bottom-0'>
                                    <Image
                                        src={Logo}
                                        alt='Pokeball'
                                        layout='fill'
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-2/5 h-1/2 md:h-80 lg:h-full flex flex-col justify-start items-center relative'>
                            <div className='w-72 h-72 md:w-52 md:h-52 xl:w-480 xl:h-480 xl:mt-64 z-10 relative'>
                                <Image
                                    src={Mockup2}
                                    alt='Mockup'
                                    layout='fill'
                                    priority={true}
                                />
                            </div>

                            <div className='w-56 md:w-44 xl:w-80 h-90% xl:h-4/6 flex justify-center items-end bg-red-brand rounded-t-full z-0 absolute bottom-0'></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full h-screen md:h-full xl:h-screen max-h-screen flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto lg:h-96 xl:h-full px-6 md:px-10 md:pb-10 lg:px-20'>
                    <div className='w-full h-screen md:h-full flex flex-col md:flex-row items-center'>
                        <div className='w-full md:w-2/5 h-1/2 md:h-80 lg:h-full flex flex-col justify-end items-center relative'>
                            <div className='w-72 h-72 md:w-56 md:h-56 xl:w-480 xl:h-480 xl:mb-64 z-10 relative'>
                                <Image
                                    src={Mockup3}
                                    alt='Mockup'
                                    layout='fill'
                                    priority={true}
                                />
                            </div>
                            <div className='w-56 md:w-44 xl:w-80 h-90% xl:h-4/6 flex justify-center items-start bg-red-brand rounded-b-full z-0 absolute top-0'>
                                <div className='w-20 h-20 md:w-20 md:h-20 xl:hidden transform -translate-y-2/4'>
                                    <Image
                                        src={Logo}
                                        alt='Pokeball'
                                        layout='fill'
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-3/5 h-1/2 flex flex-col justify-center items-center lg:items-start md:px-8 xl:px-16'>
                            <h2 className='font-bold text-2xl xl:text-5xl text-dark-brand text-center lg:text-left py-4'>
                                Discover information
                                <br /> of your favorite
                                <br /> pokemons
                            </h2>
                            <p className='text-lg xl:text-2xl text-dark-brand text-justify xl:py-4'>
                                Access to the main information of each pokemon
                                in one touch
                            </p>
                            <div className='w-full mt-10'>
                                <div className='flex justify-evenly items-center'>
                                    {info.map((element, i) => (
                                        <p
                                            key={i}
                                            className={`font-medium text-sm xl:text-xl ${element.color}`}
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
