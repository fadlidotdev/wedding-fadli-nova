import "aos/dist/aos.css";
import "./App.css";
import LaunchScreen from "./components/LaunchScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo, useState } from "react";
import MusicIcon from "./components/MusicIcon";
import PauseIcon from "./components/PauseIcon";
import SectionIntro from "./components/SectionIntro";
import SectionMessage from "./components/SectionMessage";
import Admin from "./components/Admin";
import SectionSaveTheDate from "./components/SectionSaveTheDate";
import SectionAyat from "./components/SectionAyat";
import SectionCouple from "./components/SectionCouple";
import SectionIntroInvitation from "./components/SectionIntroInvitation";
import SectionItsTheDay from "./components/SectionItsTheDay";
import SectionDigitalEnvelop from "./components/SectionDigitalEnvelop";
import SectionGallery from "./components/SectionGallery";
import SectionStory from "./components/SectionStory";
import SectionFin from "./components/SectionFin";
import SectionInstagramFilter from "./components/SectionInstagramFilter";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [openedInvitaion, setOpenedInvitation] = useState(false);
  const [showLaunchScreen, setShowLaunchScreen] = useState(true);

  useEffect(() => {
    let timeout;

    if (openedInvitaion) {
      timeout = setTimeout(() => {
        setShowLaunchScreen(false);
      }, 1900);
    }

    return () => clearTimeout(timeout);
  }, [openedInvitaion]);

  const audio = useMemo(() => new Audio("/bg-music.mp3"), []);

  useEffect(() => {
    audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleClickOpenInvitation = () => {
    setOpenedInvitation(true);

    toggleAudio();
  };

  const url = new URL(window.location.href);
  const name = url.searchParams.get("name");
  const page = url.searchParams.get("page");

  if (page === "admin") {
    return <Admin />;
  }

  return (
    <>
      {showLaunchScreen && (
        <div
          className={`transition-all duration-[2000ms] ${openedInvitaion ? "-mt-[100svh]" : ""}`}
        >
          <LaunchScreen name={name} onOpenInvitation={handleClickOpenInvitation} />
        </div>
      )}

      {openedInvitaion && (
        <>
          <div
            onClick={toggleAudio}
            className="transition-all duration-500 fixed z-50 top-3 left-3 text-white bg-[#dcd1c2] flex items-center justify-center w-9 h-9 rounded-full animate-spin-slow"
            data-aos="fade-right"
            data-aos-delay="2000"
          >
            {isPlaying ? <MusicIcon /> : <PauseIcon />}
          </div>

          <SectionIntro />

          <SectionIntroInvitation />

          <SectionAyat />

          <SectionCouple />

          <SectionSaveTheDate name={name} />

          <SectionItsTheDay />

          <SectionMessage name={name} />

          <SectionDigitalEnvelop />

          <SectionInstagramFilter />

          <SectionGallery />

          <SectionStory />

          <SectionFin />
        </>
      )}
    </>
  );
}

export default App;
