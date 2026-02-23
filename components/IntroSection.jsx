import Image from 'next/image';

const IntroSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                    Best Epoxy Floor Coating Installers In St. Petersburg
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    Looking for the best epoxy flooring & coating company for an upcoming project? Our epoxy flooring contractors specialize in installing beautiful epoxy & concrete coatings for residential and commercial clients throughout St. Petersburg, FL. Watch one of our videos to see our process!
                </p>

                {/* Video Thumbnail */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-200 group cursor-pointer">
                    <Image
                        fill
                        alt="Epoxy Flooring Installation Video"
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKUg0_Vos_sbRx9Nsu60kwi54y2qte8w6bwAKPmoibb4mD7dhHuziKNa_m8l0D3Y0OLxGplS495M1NZXkA7hmQH7_85uAYp8nIOiMbL5YZXkiSAbT8U4NT66nG2j72E5Q0b7bbI44RPwmQ1lqRJUjZnmbRWn3WY3eg66r0X7C0wPp7YDFX4bopKmv0XPR1BbTCVU8ozfvTrE7_byQiAvBgohVDnRL6w32Di7QOMRf8H4nYmKquUSEXWf96FeVCKHkg8ppiD21v-XoW"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-primary/90 text-white rounded-full p-4 pl-5 shadow-lg group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
