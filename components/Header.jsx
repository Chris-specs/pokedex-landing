import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io5';

const Header = () => {
    return (
        <header className='w-full h-16 flex justify-center items-center absolute top-0'>
            <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20'>
                <div className='flex justify-between items-center'>
                    <div className='w-auto flex flex-row gap-2'>
                        <Image
                            src='/images/logo.svg'
                            width={25}
                            height={25}
                            alt='Logo'
                        />
                        <h1 className='font-extrabold text-white'>
                            Pokedex App
                        </h1>
                    </div>
                    <div>
                        <a href="https://github.com/Chris-specs/pokedex-landing">
                            <IoLogoGithub className='text-2xl text-white transform hover:scale-110 transition-all' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
