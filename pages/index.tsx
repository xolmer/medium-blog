import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="mx-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">Medium</span> is a place to write, read and connect
          </h1>
          <h2>Discover stories, thinking, and expertise from writers on any topic.</h2>
        </div>

        <img className="square hidden md:inline-flex h-32 lg:h-80" src="/medium-img.png" alt="banner"></img>
      </div>
      {/* Posts */}
    </div>
  );
};

export default Home;
