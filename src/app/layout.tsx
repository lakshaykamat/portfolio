import Footer from './components/Common/Footer';
import Navbar from './components/Common/Navbar';
import './globals.css';

interface Metadata {
  title: string;
  description: string;
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Lakshay Kamat | Portfolio',
  description: 'Welcome to my portfolio! I\'m a passionate web developer based in India, dedicated to crafting engaging and user-friendly websites. Explore my projects, skills, and experiences in web development. Let\'s turn your digital ideas into reality.',
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className='text-gray-300 bg-slate-900'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
