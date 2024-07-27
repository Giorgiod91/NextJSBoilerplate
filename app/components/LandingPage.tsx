import Image from "next/image";
import Link from "next/link";
import React from "react";

function LandingPage() {
  return (
    <div data-theme="" className="h-screen text-white">
      <div className="container mx-auto flex h-screen flex-col space-x-5 p-5 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center md:w-1/2">
          <div>
            <div className="mb-10 flex w-full flex-col items-center px-4 text-center lg:mb-0 lg:w-full lg:items-start lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-black tracking-tight text-transparent drop-shadow-xl sm:text-6xl md:text-7xl">
                left part
              </h1>
              <p className="mb-8 text-xl text-gray-400">text here</p>
              <button className="btn btn-wide mb-4 bg-primary text-white hover:bg-primary/70">
                <a href="#">Lets go!</a>
              </button>
              <p className="text-sm text-gray-400">text here</p>

              <div className="mt-2 flex justify-center"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="w-full rounded-lg border border-primary shadow-xl md:w-auto">
            right part
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
