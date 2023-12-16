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

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>Lakshay Kamat | Portfolio</title>
        <meta name="description" content="Experienced web developer proficient in React and Node.js, with expertise in backend development, skilled in programming concepts, Java, data structures, OOP, and Databases" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="keywords" content="Lakshay, Lakshay Kamat, Kamat, Lakshuu" />
        <meta name="author" content="Lakshay Kamat" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Lakshay Kamat" />
        <meta property="og:description" content="Experienced web developer proficient in React and Node.js, with expertise in backend development, skilled in programming concepts, Java, data structures, OOP, and Databases" />
        <meta property="og:image" content="https://i.postimg.cc/D0dMgBwB/Whats-App-Image-2023-12-09-at-20-14-35.jpg" />
        <meta property="og:url" content="https://lakshaykamat.netlify.app" />
        <meta property="og:type" content="website" />

        <meta property="og:image" content="https://i.postimg.cc/D0dMgBwB/Whats-App-Image-2023-12-09-at-20-14-35.jpg" />
        <meta name="twitter:image" content="https://i.postimg.cc/D0dMgBwB/Whats-App-Image-2023-12-09-at-20-14-35.jpg" />
        <meta property="og:image:alt" content="Lakshay Kamat" />
        <meta property="twitter:image:alt" content="Lakshay Kamat" />
        <meta name="twitter:card" content="https://i.postimg.cc/D0dMgBwB/Whats-App-Image-2023-12-09-at-20-14-35.jpg" />
        <meta name="twitter:title" content="Lakshay Kamat" />
        <meta name="twitter:description" content="Experienced web developer proficient in React and Node.js, with expertise in backend development, skilled in programming concepts, Java, data structures, OOP, and Databases" />
        <meta name="twitter:image" content="https://i.postimg.cc/D0dMgBwB/Whats-App-Image-2023-12-09-at-20-14-35.jpg" />

      </head>
      <body className='text-gray-300 bg-slate-900'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
