import type { NextPage } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="p-8 ">
        Home
      </h1>
      <p className="p-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        reprehenderit inventore voluptatem libero eaque quasi ipsum, fugit
        voluptates temporibus deserunt!
      </p>
      <p className="p-8">
        Numquam ducimus nulla saepe voluptatibus ut culpa, minus sint id, vel
        voluptas ea cupiditate. Ea, itaque. Officiis magnam nisi molestias!
      </p>
    </div>
  );
};

export default Home;
