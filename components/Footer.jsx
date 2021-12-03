import { IoSwapVertical, IoSearch, IoHeart } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className='w-full h-16 flex justify-center items-center bg-red-brand'>
            <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20'>
                <p className='flex justify-center items-center gap-1 text-center text-xs text-white'>
                    Developed with <IoHeart className='text-lg' /> by{' '}
                    <a
                        href='https://github.com/Chris-specs'
                        target='_blank'
                        className='font-bold'
                    >
                        Christian Sanchez
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
