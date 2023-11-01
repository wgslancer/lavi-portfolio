import { classNames } from '@/app/utils/utils';
import Typography from '../Typography';
import Image from 'next/image';

interface NavBarProps {
  className?: string;
  prefix: string | React.ReactNode;
  logoUrl: string;
  postfix: string | React.ReactNode;
}

const NavBar = ({ logoUrl, postfix, prefix, className }: NavBarProps) => {
  return (
    <section
      className={classNames(
        'h-[108px] col-span-5 grid-lg items-end',
        className
      )}
    >
      {typeof prefix === 'string' ? (
        <Typography className='col-span-1 col-start-1'>{prefix}</Typography>
      ) : (
        prefix
      )}
      <Image
        className='col-span-1 col-start-3 justify-self-center'
        src={logoUrl}
        alt='logo'
        width={79}
        height={40}
      />
      {typeof postfix === 'string' ? (
        <Typography className='col-span-1 col-start-5 justify-self-end'>
          {postfix}
        </Typography>
      ) : (
        postfix
      )}
    </section>
  );
};

export default NavBar;
