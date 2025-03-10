"use client";
import HeroSection from "./components/HeroSection";
import LineupSection from "./components/LineupSection";
import MomentsSection from "./components/MomentsSection";
import LocationSection from "./components/LocationSection";
import NavigationSection from "./components/Navigation";
import TicketsSection from "./components/TicketsSection";
import SpotifyPlaylistSection from "./components/SpotifyPlaylistSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <NavigationSection />
      <HeroSection />
      <LineupSection />
      <MomentsSection />
      <TicketsSection />
      <SpotifyPlaylistSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
