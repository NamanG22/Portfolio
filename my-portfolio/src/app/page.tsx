import { Header } from '../components/Header';
import { Contact } from '../components/Contact';
import Sidebar from './../components/Sidebar';

interface Props{
  children:React.ReactNode;
}

export default function Home({children}:Props) {
  return (
    <div className="bg-theme3 min-h-screen relative">
      <Header/>
      <Contact/>
      <Sidebar/>
      <div className="absolute top-52 left-1/4 p-4">
        {children}
      </div>
    </div>
  );
}
