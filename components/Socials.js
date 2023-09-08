// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiPinterestLine,
  RiTwitterLine,
  RiMediumLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
   <div className='flex items-center gap-x-5 text-lg'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiPinterestLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiTwitterLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiMediumLine />
    </Link>
  </div>
  );
};

export default Socials;
