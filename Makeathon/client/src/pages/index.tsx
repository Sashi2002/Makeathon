import Head from 'next/head';
import { Inter } from '@next/font/google';
import FileInput from 'components/shared/fileInput';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blackbox | Web3 Storage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen flex justify-center items-center">
        <FileInput />
      </div>
    </>
  );
}
