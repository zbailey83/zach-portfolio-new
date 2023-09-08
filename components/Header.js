//
import Image from 'next/image';

import Link from 'next/link';

import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]
    '>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row jusify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'}>
            <Image 
              src={'/logo-zc.svg'}
              width={220}
              height={48}
              alt=''
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
      <div className='container mx-auto'></div>
    </header>
  );
};

export default Header;
