// app/2024edition/page.tsx

import NavigationSection from "../components/Navigation";
import Billetterie from "./components/Billetterie";
import Footer from "../components/Footer";

export default function Edition2024() {
  return (
    <main>
      <NavigationSection />
      <Billetterie />
      <Footer />
    </main>
  );
}