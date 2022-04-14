import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Mesquita - Crypto' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/assets/logo' />
      </Head>
      <header className='header'>
        <Link href='/' passHref>
          <a>
          </a>
        </Link>
        
      </header>
      <main>{children}
      
      </main>
    </div>
  );
};

export default Layout;