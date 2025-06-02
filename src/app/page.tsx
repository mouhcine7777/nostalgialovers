"use client";
import NostalgiaBrunchPopup from "./components/NostalgiaBrunchPopup";
import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import SectionLineup from "./components/SectionLineup";
import BrunchSection from "./components/BrunchSection";
import MomentsSection from "./components/MomentsSection";
import LocationSection from "./components/LocationSection";
import NavigationSection from "./components/Navigation";
import TicketsSection from "./components/TicketsSection";
import PartenariatSection from "./components/PartenariatSection";
import SpotifyPlaylistSection from "./components/SpotifyPlaylistSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <NavigationSection />
      <NostalgiaBrunchPopup />
      <HeroSection />
      <BannerSection />
      <SectionLineup />
      <MomentsSection />
      <TicketsSection />
      <SpotifyPlaylistSection />
      <BrunchSection />
      <PartenariatSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
