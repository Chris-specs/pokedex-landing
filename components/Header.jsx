import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io5';

const Header = () => {
    return (
        <header className='w-full h-16 flex justify-center items-center absolute top-0'>
            <div className='w-full max-w-screen-2xl h-auto px-6'>
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
                        <IoLogoGithub className='text-2xl text-white' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
