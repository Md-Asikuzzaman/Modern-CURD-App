import { NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div className='navbar bg-neutral-100'>
      <div className='container'>
        <div className='flex-1'>
          <Link href='/' className='btn btn-ghost normal-case text-xl'>
            daisyUI
          </Link>
        </div>
        <div className='flex-none'>
          <Link href='/create' className='btn btn-ghost'>
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
