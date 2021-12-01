import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io5';

const Header = () => {
    return (
        <div className='w-full h-16 flex justify-between items-center px-6'>
            <div className='w-auto flex flex-row gap-2'>
                <Image
                    src='/images/logo.png'
                    width={25}
                    height={25}
                    alt='Logo'
                />
                <h1 className='font-poppins font-extrabold text-white'>
                    Pokedex App
                </h1>
            </div>
            <div>
                <IoLogoGithub className='text-2xl text-white' />
            </div>
        </div>
    );
};

export default Header;
