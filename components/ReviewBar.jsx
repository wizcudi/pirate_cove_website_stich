const ratings = [
    { name: "Google", color: "text-blue-500", stars: 5 },
    { name: "facebook", color: "text-blue-800", stars: 5 },
    { name: "yelp", color: "text-red-600", stars: 5 },
    { name: "houzz", color: "text-green-600", stars: null },
    { name: "Porch", color: "text-orange-500", stars: null }
];

const ReviewBar = () => {
    return (
        <section className="py-12 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4">
                <h3 className="text-center font-bold text-primary uppercase tracking-widest text-sm mb-8">
                    5-Star Epoxy Flooring Contractors, Polished & Stained Concrete Services Near St. Petersburg
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    {ratings.map((rating, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <span className={`font-bold text-2xl ${rating.color}`}>{rating.name}</span>
                            {rating.stars && (
                                <div className="flex text-yellow-400 text-sm">
                                    {[...Array(rating.stars)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewBar;
