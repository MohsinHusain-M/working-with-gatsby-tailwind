import * as React from "react";
import Layout from "../components/Layout";

import "../assets/css/global.css";
import { StaticImage } from "gatsby-plugin-image";
import ballGIF from "../assets/images/floatingBallGif.gif";
const IndexPage = () => {
  return (
    <Layout>
      <div class="items-center justify-center  self-center">
        <div class="flex justify-center pt-10">
          <StaticImage
            src="../assets/images/untitled-design-7.png"
            alt="Tester"
          />
        </div>
        <div class="flex justify-center">
          <img
            src={ballGIF}
            alt="ball GIF"
            class="h-3/4 w-3/4 md:h-1/4 md:w-1/4"
          />
        </div>
        {/**SECTION**/}
        <div class="pt-32  divide-y-2 text-center md:text-left md:ml-60 md:mr-60">
          <div class=" font-bold font-sans pb-10 md:pb-20 text-center md:text-left">
            <p class="text-2xl ">Here at Ednam we develop</p>
            <p class="text-4xl">Practical Smart Garments, that Enrich Lives</p>
          </div>
          <div class="flex flex-col md:flex-row pt-10 md:pt-20 items-center justify-center">
            <div class="flex md:pb-20 md:pl-40 md:pr-40">
              <StaticImage
                src="../assets/images/advanceClothes.png"
                alt="Tech Shirt"
                class="w-72 "
              />{" "}
            </div>
            <div class="flex pt-10 pb-10 md:pt-0">
              <p class="text-2xl">
                {" "}
                We are making India's first collection of apparel that delivers
                functions beyond traditional use – by interweaving electronic
                circuits within the fabric
              </p>
            </div>
          </div>

          <div class=" font-bold font-sans pb-10 pt-10 md:pb-20 md:pt-20">
            <p class="text-2xl">
              When done with enough sophistication and robustness , it will
              enable us to deliver{" "}
            </p>
            <p class="text-4xl  md:pt-0">
              Data based, Personalized Health Solutions
            </p>
          </div>
          <div class="flex flex-col md:flex-row md:pt-20 items-center justify-center">
            <div class="flex pt-10 md:pb-20 md:pl-40 md:pr-40">
              <StaticImage
                src="../assets/images/clothes.png"
                alt="Shirt Choices"
                class="w-72"
              />{" "}
            </div>
            <div class="flex pt-10 pb-10">
              <p class="text-2xl">
                {" "}
                Indian textile sector is renowned all over the world for its
                tradition and capability. By adding to it superior technology,
                we believe we can make India the global leader in smart
                garments.
              </p>
            </div>
          </div>
          <div class=" pb-10 pt-10 text-center md:pb-28 md:pt-20">
            <button
              type="button"
              class="inline-block px-6 
              py-2.5 bg-gray-700 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              Join Our Team
            </button>
            <div>
              <p class="text-4xl font-bold pt-10 pb-5 md:pt-28 md:pb-0">
                See What People Are Saying
              </p>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-center">
              <div class="md:p-10">
                <StaticImage
                  src="../assets/images/customer1.png"
                  alt="Customer 1"
                />
              </div>

              <div class="md:p-10">
                <StaticImage
                  src="../assets/images/customer2.png"
                  alt="Customer 2"
                />
              </div>

              <div class="md:p-10">
                <StaticImage
                  src="../assets/images/customer3.png"
                  alt="Customer 3"
                />
              </div>
            </div>
          </div>
          <div class="pt-10 text-center md:pt-20 md:pb-20">
            <p class="text-4xl font-bold text-black">Founders</p>
            <p class="text-xl text-gray-600 pt-5">
              Ednam is a collaboration of two graduates from NIFT and IIT
            </p>

            <div class="flex flex-row  items-center justify-center pt-10 pb-10">
              <div class="text-center md:pr-40">
                <p class="text-xl">in</p>
                <p class="text-3xl text-bold text-gray-800">Ayushi Kumar</p>
                <p class="text-gray-600">Founder, CEO</p>
              </div>
              <div class="text-center md:pl-40">
                <p class="text-xl">in</p>
                <p class="text-3xl text-bold text-gray-800">
                  ​ Tejas Srivastava
                </p>
                <p class="text-gray-600">Co-Founder, CTO</p>
              </div>
            </div>
          </div>
          <div>
            <div class="text-center  ">
              <p class="text-3xl font-bold text-gray-800 pt-10">
                ​ Our Partners
              </p>
              <p class="text-xl text-bold text-gray-700 pt-5">
                ​ Ednam is incubated under NSRCEL, IIM Bangalore and TIDES, IIT
                Roorkee
              </p>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-center pt-8 md:pb-10 ">
              <div class="md:pr-20">
                <StaticImage
                  src="../assets/images/IIMB.png"
                  alt="IIMB image"
                  class="w-72 md:w-full"
                />
              </div>
              <div class="pt-8 pb-10 md:pl-20">
                <StaticImage
                  src="../assets/images/Tides.png"
                  alt="Tides logo"
                  class="w-72 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
