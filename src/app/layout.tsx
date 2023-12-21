import Footer from './components/Common/Footer';
import Navbar from './components/Common/Navbar';
import './globals.css';

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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff"></meta>
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
