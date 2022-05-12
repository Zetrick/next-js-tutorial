import React from "react";
import type { NextPage } from "next";
import Navbar from '../components/Navbar';

const About: NextPage = () => {
  return (
    <div>
      <div className="p-8">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae
          dignissimos aperiam omnis ut sint ratione harum, minima earum
          cupiditate.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eos
          dolores explicabo vel eligendi recusandae voluptatem, laudantium
          corporis neque dolorem.
        </p>
      </div>
    </div>
  );
}

export default About;