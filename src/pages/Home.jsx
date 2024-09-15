import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss"; // Import the styles for smooth scrolling
import scrollDown from "../assets/scrollDown.png";
import RotatingBoxes from "../components/RotatingBoxes";
import RoseSection from "../components/RoseSection";
import PoetrySection from "../components/PoetrySection";
import poetrybg1 from "../assets/poetry-bg1.avif";
import poetrybg2 from "../assets/poetry-bg2.jpg";
import poetrybg3 from "../assets/poetry-bg3.jpg";
import EmotionsSection from "../components/EmotionsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      inertia: 0.75, // Adjust this value to make scrolling feel more "weighted"
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const RanjishHiSahi = [
    "Ranjish hi sahi, dil hi dukhaane ke liye aa.",
    "Aa phir se mujhe chhod ke jaane ke liye aa.",
    "Pehle se maraasim na sahi, phir bhi kabhi toh",
    "Rasm-o-rah-e-duniya hi nibhaane ke liye aa.",
    "Ab tak dil-e-khush-fahm ko tujh se hain umiden",
    "Ye akhiri shama'en bhi bujhane ke liye aa",
  ];

  const poet_RanjishHiSahi = "Ahmed Faraz";
  const MainKhayalHoon = [
    "Main khayal hoon kisi aur ka, mujhe sochta koi aur hai.",
    "Sar-e-aaina mera aks hai, pas-e-aaina koi aur hai.",
    "Main kisi ke dast-e-talab mein hun toh kisī ke harf-e-dua mein hun",
    "Main nasib hun kisi aur ka mujhe mangta koi aur hai",
    "Ajab aitbar o be-aitbari ke darmiyan hai zindagi",
    "Main qarib hun kisi aur ke mujhe janta koi aur hai",
    "Main khayal hoon kisi aur ka, mujhe sochta koi aur hai.",
  ];

  const poet_MainKhayalHoon = "Saleem Kausar";

  const DilHiToHai = [
    "Dil hi to hai na sang-o-khisht dard se bhar na aaye kyun",
    "Royenge hum hazaar baar koi humein sataaye kyun",

    "Dair nahin haram nahin dar nahin aastaan nahin",
    "Baithe hain rahguzar pe hum ghair humein uthaaye kyun",

    "Jab wo jamaal-e-dil-faroz soorat-e-mehr-e-neem-roz",
    "Aap hi ho nazara-soz parde mein munh chhupaaye kyun",

    "Haan wo nahin khuda-parast jaao wo bewafa sahi",
    "Jis ko ho deen o dil azeez uski gali mein jaaye kyun",
  ];

  const poet_DilHiToHai = "Mirza Ghalib";

  return (
    <div ref={scrollRef} data-scroll-container className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="bg-peach pt-4 pb-6 px-8 mx-6 m-3 mb-16 flex justify-between items-center rounded-3xl shadow-md ">
        <div className="text-6xl font-extralight text-gray-900 tracking-wider">
          Project Love
        </div>
        <nav className="flex space-x-10 text-gray-800 font-medium text-lg">
          <a href="#purpose" className="hover:text-gray-600 transition ease-in-out">
            Purpose
          </a>
          <a href="#insights" className="hover:text-gray-600 transition ease-in-out">
            Insights
          </a>
          <a href="#contact" className="hover:text-gray-600 transition ease-in-out">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex justify-center text-center h-[50vh] w-auto">
        <h2 className="space-y-4 mt-32">
          <span className="text-8xl font-pacifico bg-gradient-to-r from-red-400 to-peach text-transparent bg-clip-text p-6">
            Loving The World
          </span>
          <br />
          <br />
          <span className="text-5xl bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text font-bold">
            So The World Can Love You Back
          </span>
        </h2>
      </section>

      <RotatingBoxes />
      <RoseSection />

      {/* Scroll Down Indicator */}
      <div className="justify-center items-center flex">
        <img src={scrollDown} className="animate-pulse" alt="Scroll down" />
      </div>

      {/* New Section */}
      <section className="flex justify-center items-start py-20 px-12 mx-6" data-scroll>
        <div className="w-1/3 text-left mr-12">
          <h2 className="text-[3.8rem] font-bold leading-tight text-gray-900">
            A COLLECTION OF
            <span className="text-transparent bg-gradient-to-r from-peach to-red-500 bg-clip-text">
              {" "}
              ART
            </span>{" "}
            THAT INSPIRES TO SPREAD LOVE
          </h2>
        </div>
        <div className="w-1/2 text-left p-4 pt-4 ml-12">
          <p className="text-gray-700 text-[1.2rem] leading-relaxed mb-8">
            In a world often plagued by division and hatred, art serves as a
            powerful medium to bridge gaps and foster unity. Through its
            evocative power, art can transcend language barriers and cultural
            differences, reminding us of our shared humanity.
          </p>
          <p className="text-gray-700 text-[1.2rem] leading-relaxed mb-8">
            By exploring a diverse collection of artistic expressions, we can
            rediscover the beauty and interconnectedness of our world. Let us be
            inspired by the stories of love, resilience, and hope that emerge
            from the depths of human creativity.
          </p>
        </div>
      </section>

      <EmotionsSection />
      <PoetrySection
        title="Ranjish Hi Sahi"
        poetry={RanjishHiSahi}
        image={poetrybg1}
        poet={poet_RanjishHiSahi}
        direction="left"
      />
      <PoetrySection
        title="Mai Khayal Hun"
        poetry={MainKhayalHoon}
        image={poetrybg2}
        poet={poet_MainKhayalHoon}
        direction="right"
      />
      {/* <PoetrySection
        title="Dil Hi Toh Hai"
        poetry={DilHiToHai}
        image={poetrybg3}
        poet={poet_DilHiToHai}
        direction="left"
      /> */}

      <Footer/>
    </div>
  );
};

export default HomePage;
