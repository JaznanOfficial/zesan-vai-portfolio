import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navbar/Navigation";
import Projects from "@/components/Projects/Projects";

export default function Home() {
    return (
        <div className="w-10/12 mx-auto">
            <Navigation />
            <Header />
            <Carousel />
            <Projects />
            <Footer />
        </div>
    );
}
