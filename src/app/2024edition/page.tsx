// app/2024edition/page.tsx

import NavigationSection from "../components/Navigation";
import Edition2024Page from "./components/Edition2024Page";
import Footer from "../components/Footer";

export default function Edition2024() {
  return (
    <main>
      <NavigationSection />
      <Edition2024Page />
      <Footer />
    </main>
  );
}