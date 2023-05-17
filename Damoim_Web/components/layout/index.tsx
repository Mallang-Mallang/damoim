import { PropsWithChildren } from 'react';
import Header from './Header';
import Tabbar from './Tabbar';
import { useRouter } from 'next/router';

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  return (
    <div className="flex justify-center w-full h-screen bg-zinc-50">
      <Header path={router.pathname} />
      <div className="w-[500px] h-full pt-[60px] pb-[65px] border border-pink-500 bg-white overflow-auto">
        {children}
      </div>
      <Tabbar />
    </div>
  );
};

export default Layout;
