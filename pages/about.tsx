import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1 className="m-12 text-3xl prose-xl">About</h1>
      <p className="m-2 mx-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae
        dignissimos aperiam omnis ut sint ratione harum, minima earum
        cupiditate.
      </p>
      <p className="m-2 mx-16">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eos
        dolores explicabo vel eligendi recusandae voluptatem, laudantium
        corporis neque dolorem.
      </p>
    </div>
  );
};

export default About;
