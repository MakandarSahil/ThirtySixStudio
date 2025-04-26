import React, { useEffect } from "react";
import Canvas from "./components/Canvas";
import data from "./canvas/data";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen">
        {data[0].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))}
        <div className="w-full h-screen relative z-[1] text-white">
          {/* //basic navbar with array link */}
          <nav className="w-full p-4 flex justify-between z-50">
            <div className="brand text-md font-regular">Thirtysixstudios</div>
            <div className="links flex gap-20">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a key={index} className="text-sm hover:text-gray-300">
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer w-full px-[26%] py-12">
            <div className="text w-[50%] ">
              <h3 className="text-3xl leading-[1.3]">
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands.
              </h3>
              <p className="w-[100%] text-[12px] mt-7 font-light">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <p className="w-[100%] text-[12px] mt-7 font-light">Scroll</p>
            </div>
          </div>
          <div className="w-full absolute left-0 bottom-0">
            <h1 className="text-[13rem] text-center tracking-tight leading-none">
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen bg-black text-white mt-32 px-10 border-b-1 border-zinc-400">
        {data[1].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))}
        <div className="relative z-[1] w-full min-h-screen">
          <div className="w-[80%] absolute left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-6xl tracking-tight">about the brand</h1>
            <p className="text-xl leading-[1.8] w-[80%] mt-10 font-light">
              we are a team of designers, developers, and strategists who are
              passionate about creating digital experiences that are both
              beautiful and functional, we are a team of designers, developers,
              and strategists who are passionate about creating digital
              experiences that are both beautiful and functional.
            </p>
            {/* <img
          className="w-[80%] mt-10"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        /> */}
          </div>
        </div>
      </div>
      <div className="footer bg-black text-white px-8 py-12 flex flex-col md:flex-row justify-between items-start text-sm">
        {/* Left Section */}
        <div className="left flex flex-col gap-8">
          {/* Social Links */}
          <div className="flex gap-8">
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </div>

          {/* Rights Reserved */}
          <div>
            <p className="uppercase">All Rights Reserved</p>
            <p>©2025, Thirtysixstudio</p>
          </div>

          {/* Registration Info */}
          <div className="text-gray-400 text-xs max-w-xs">
            <p>
              Thirtysixstudio is registered with the Dutch Chamber of Commerce
              under registration number KVK 90310152.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right flex flex-col gap-8 mt-12 md:mt-0">
          {/* Email and Location */}
          <div className="flex flex-col">
            <a
              href="mailto:hello@thirtysixstudio.com"
              className="hover:underline"
            >
              hello@thirtysixstudio.com
            </a>
            <p>Amsterdam and worldwide</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Privacy Statement ↓
            </button>
            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Back to Top
            </button>
          </div>

          {/* Logo */}
          <div className="text-2xl font-semibold mt-8">Thirtysixstudio</div>
        </div>
      </div>
    </>
  );
}

export default App;
