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
import PoetryCarousel from "../components/PoetryCarousel";

const HomePage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      inertia: 0.75,
    });

    scroll.update(); // Update LocomotiveScroll when DOM changes

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
  const titles = [
    "Woh Dil Nawaz Hai",
    "Dil Hi Toh Hai",
    "Ishq Se Tabiyat Ne",
    "Ranjish Hi Sahi",
    "Hum Parwarish-e-Lauh-O-Qalam",
    "Main Khayal Hoon",
    "Wo Ishq Jo Humse Rooth Gaya",
    "Gulon Mein Rang Bhare",
    "Kabhi Kisi Ko Mukammal Jahan",
    "Aaj Phir Dard",
    "Aaj Jaane Ki Zid Na Karo",
    "Raat Yun Dil Mein Teri",
    "Agar Mujh Se Mohabbat Hai",
    "Chupke Chupke Raat Din",
    "Kabhi Kisi Ko Mukammal Jahan",
  ];

  const poetries = [
    [
      "Vo dil-nawaaz hai lekin nazar-shanaas nahin",
      "Mera ilaaj mere chaara-gar ke paas nahin",
      "Kabhi kabhi jo tere qurb mein guzaare the",
      "Ab un dinon ka tasavvur bhi mere paas nahin",
      "Mujhe ye dar hai teri aarzoo na mit jaaye",
      "Bahut dino se tabiyat meri udaas nahin",
    ],
    [
      "Dil hi toh hai na sang-o-khisht, dard se bhar na aaye kyun",
      "Royenge hum hazaar baar, koi humein sataaye kyun",
      "Dair nahi, haram nahi, dar nahi, aastaan nahi",
      "Baith chuke hain raste par, humko koi uthaaye kyun",
      "Ishq mein jeenay marne ka maza kuch aur hai",
      "Dil jalaayein, raakh ho jaayein, aur koi humko mitaaye kyun",
    ],
    [
      "Ishq se tabiyat ne zeest ka maza paaya",
      "Dard ki dawa paayi, dard be-dawa paaya",
      "Hum jo waqif hain raah-e-ishq ke maqaam se",
      "Mil gayi us rah mein rahat bhi, khuda paaya",
      "Ishq mein jo ho jaaye fana, wo zinda hai",
      "Zinda rehne ko ishq mein nasha paaya",
    ],
    [
      "Ranjish hi sahi, dil hi dukhaane ke liye aa",
      "Aa phir se mujhe chhod ke jaane ke liye aa",
      "Pehle se maraasim na sahi, phir bhi kabhi toh",
      "Rasm-o-rah-e-duniya hi nibhaane ke liye aa",
      "Ab tak dil-e-khush-fahm ko tujh se hain umiden",
      "Ye akhiri shama'en bhi bujhane ke liye aa",
    ],
    [
      "Hum parwarish-e-lauh-o-qalam karte rahenge",
      "Jo dil pe guzarti hai raqam karte rahenge",
      "Ik tarz-e-taghaful hai so wo un ko mubarak",
      "Ik arz-e-tamanna hai so hum karte rahenge",
      "Dil dhoondta hai phir wohi fursat ke raat din",
      "Baithe rahe tasavvur-e-jaan karte rahenge",
    ],
    [
      "Main khayal hoon kisi aur ka, mujhe sochta koi aur hai",
      "Sar-e-aaina mera aks hai, pas-e-aaina koi aur hai",
      "Main kisi ke dast-e-talab mein hun toh kisi ke harf-e-dua mein hun",
      "Main naseeb hun kisi aur ka, mujhe mangta koi aur hai",
      "Ajab aitbaar o be-aitbaari ke darmiyan hai zindagi",
      "Main qareeb hoon kisi aur ke, mujhe janta koi aur hai",
    ],
    [
      "Wo ishq jo humse rooth gaya, ab uska haal batayein kya",
      "Koi mehfil usse rone ki, jisme hum gungunaayein kya",
      "Dil dhoondta hai phir wohi bekhudi ke raat din",
      "Bekhabar hai jo humse, hum usse bekhabar ban jaayein kya",
      "Jo raat ke chaand mein aks tha, wo meri tasveer thi",
      "Ab raushni bhi rooth gayi, hum charaag jalaayein kya",
    ],
    [
      "Gulon mein rang bhare baad-e-naubahar chale",
      "Chale bhi aao ke gulshan ka karobar chale",
      "Qafas udaas hai yaaron sabaa se kuch to kaho",
      "Kaheen to beher-e-khuda aaj zikr-e-yaar chale",
      "Kabhi to subah tere kunj-e-lab se ho aaghaaz",
      "Kabhi to shab sar-e-kaakul se mushkbaar chale",
    ],
    [
      "Kabhi kisi ko mukammal jahan nahi milta",
      "Kahin zameen to kahin aasman nahi milta",
      "Jise bhi dekhiye wo apne aap mein gum hai",
      "Zubaan mili hai magar humzuban nahi milta",
      "Bujha saka hai bhala kaun waqt ke shole",
      "Yeh aisi aag hai jisme dhuan nahi milta",
    ],
    [
      "Aaj phir dard ne dil ka rukh kiya",
      "Aaj phir dard se mulaqaat hui",
      "Kuch kahaniyaan thi dil ke dareechon mein",
      "Jo aaj phir se zinda hui",
      "Chupa ke rakhte the jo zakham apne",
      "Aaj phir se un par baat hui",
    ],
    [
      "Aaj jaane ki zid na karo",
      "Yunhi pehlu mein baithe raho",
      "Haaye mar jaayenge, hum to lutt jaayenge",
      "Aisi baatein kiya na karo",
      "Tumhi socho zara, kyun na rokein tumhein",
      "Jaan jaati hai jab uth ke jaate ho tum",
    ],
    [
      "Raat yun dil mein teri khoi hui yaad aayi",
      "Jaise veeraane mein chupke se bahaar aayi",
      "Jaise sehraon mein haule se chale baad-e-naseem",
      "Jaise beemaar ko bewajah qaraar aayi",
      "Raat yun dil mein teri khoi hui yaad aayi",
      "Jaise veeraane mein chupke se bahaar aayi",
    ],
    [
      "Agar mujh se mohabbat hai",
      "Mujhe, sab apne gham de do",
      "In aankhon ka har ek aansu",
      "Mujhe, meri qasam de do",
      "Tadap iss dil ki thodi si",
      "Mujhe, mere sanam de do",
    ],
    [
      "Chupke chupke raat din aansu bahaana yaad hai",
      "Hum ko ab tak aashiqui ka vo zamaana yaad hai",
      "Saath vo awaargi ke, phir chhup ke milna yaad hai",
      "Beqaraari ka vo aalam, vo fasana yaad hai",
      "Tum se milte hi vo kuch halka muskurana yaad hai",
      "Chupke chupke raat din aansu bahaana yaad hai",
    ],
    [
      "Kabhi kisi ko mukammal jahan nahi milta",
      "Kahin zameen to kahin aasmaan nahi milta",
      "Jise bhi dekhiye vo apne aap mein gum hai",
      "Zubaan mili hai magar hum zubaan nahi milta",
      "Chiragh jalte hi bina'i bujhne lagti hai",
      "Khud apne ghar mein ghar ka nishan nhi milta",
    ],
  ];

  const poets = [
    "Nasir Kazmi",
    "Mirza Ghalib",
    "Allama Iqbal",
    "Ahmed Faraz",
    "Majrooh Sultanpuri",
    "Saleem Kausar",
    "Amjad Islam Amjad",
    "Mehdi Hassan",
    "Nida Fazli",
    "Parveen Shakir",
    "Fayyaz Hashmi",
    "Faiz Ahmed Faiz",
    "Raja Mehdi Ali Khan",
    "Hasrat Mohani",
    "Nida Fazli",
  ];

  const poet_DilHiToHai = "Mirza Ghalib";

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="min-h-screen bg-white overflow-hidden"
    >
      {/* Header */}
      <header className="bg-peach pt-4 pb-6 px-8 mx-6 m-3 mb-16 flex justify-between items-center rounded-3xl shadow-md ">
        <div className="text-6xl font-extralight text-gray-900 tracking-wider">
          Project Love
        </div>
        <nav className="flex space-x-10 text-gray-800 font-medium text-lg">
          <a
            href="#purpose"
            className="hover:text-gray-600 transition ease-in-out"
          >
            Purpose
          </a>
          <a
            href="#insights"
            className="hover:text-gray-600 transition ease-in-out"
          >
            Insights
          </a>
          <a
            href="#contact"
            className="hover:text-gray-600 transition ease-in-out"
          >
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
      <section
        className="flex justify-center items-start py-20 px-12 mx-6"
        data-scroll
      >
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
      <PoetryCarousel titles={titles} poetries={poetries} poets={poets} />

      <Footer />
    </div>
  );
};

export default HomePage;
