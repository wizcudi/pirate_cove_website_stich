import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import ReviewBar from "../components/ReviewBar";
import ValueBar from "../components/ValueBar";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";
import Services from "../components/Services";
import StatsSection from "../components/StatsSection";
import Gallery from "../components/Gallery";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <IntroSection />
            <ReviewBar />
            <ValueBar />
            <AboutSection />
            <ProcessSection />
            <Services />

            {/* 10% Off Banner */}
            <section className="py-12 bg-primary">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white">Receive 10% Off Any New</h3>
                        <p className="text-white/90 text-lg font-medium">Residential or Commercial Project!</p>
                    </div>
                    <a
                        className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all uppercase tracking-wider transform hover:scale-105"
                        href="#quote"
                    >
                        Receive 10% Off
                    </a>
                </div>
            </section>

            <StatsSection />
            <Gallery />
            <ContactSection />
            <Footer />
        </main>
    );
}
