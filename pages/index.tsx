import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col">
        <h1 className="m-12 text-3xl">Home</h1>
        <p className="m-2 mx-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          reprehenderit inventore voluptatem libero eaque quasi ipsum, fugit
          voluptates temporibus deserunt!
        </p>
        <p className="m-2 mx-16">
          Numquam ducimus nulla saepe voluptatibus ut culpa, minus sint id, vel
          voluptas ea cupiditate. Ea, itaque. Officiis magnam nisi molestias!
        </p>
      </div>
    </>
  );
};

export default Home;
