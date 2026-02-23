import Image from 'next/image';

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 uppercase tracking-widest">
                    Project Gallery
                </h2>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-[600px]">
                {/* Main large image */}
                <div className="col-span-2 row-span-2 rounded-lg overflow-hidden relative group">
                    <Image
                        fill
                        alt="Gallery 1"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        src="/images/Storage-Project-Gallery.jpeg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>

                {/* Top right images */}
                <div className="rounded-lg overflow-hidden relative group">
                    <Image
                        fill
                        alt="Gallery 2"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        src="/images/DoubleGarage-Project-Gallery.jpeg"
                    />
                </div>
                <div className="rounded-lg overflow-hidden relative group">
                    <Image
                        fill
                        alt="Gallery 3"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        src="/images/Home-Project-Gallery.jpeg"
                    />
                </div>

                <div className="rounded-lg overflow-hidden relative group">
                    <Image
                        fill
                        alt="Gallery 2"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        src="/images/Garage-Project-Gallery.jpeg"
                    />
                </div>
                <div className="rounded-lg overflow-hidden relative group">
                    <Image
                        fill
                        alt="Gallery 3"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        src="/images/Patio-Project-Gallery.jpeg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
