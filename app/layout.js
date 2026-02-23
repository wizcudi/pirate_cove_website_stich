import "./globals.css";

export const metadata = {
    title: "Pirate Cove | Epoxy Flooring & Concrete Coatings St. Petersburg",
    description: "St Petersburg Epoxy Flooring, Concrete Coating, Pool Deck Resurfacing. Best epoxy floor coating installers in Florida.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
