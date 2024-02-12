import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import SignNav from "../components/SignNav";
import LangNav from "../components/LangNav";
import HeaderSlider from "../components/HeaderSlider";
import Ebooks from "../components/Ebooks";
import Footer from "../components/Footer";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <LangNav />
      <SignNav />
      <PageNav />
      <HeaderSlider />
      <Ebooks />
      <Footer />
    </main>
  );
}
