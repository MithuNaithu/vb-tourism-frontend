import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // 👈 SEO Import added!

export default function About() {
    return (
        <div style={{ fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>

            {/* 🚀 PRO-LEVEL SEO FOR THE ABOUT PAGE */}
            <Helmet>
                <title>About Valiyaparamba Island | History & Geography of Kerala's Hidden Gem</title>

                <link rel="canonical" href="https://www.valiyaparambatourism.com/about" />
                <meta name="robots" content="index, follow" />


                <meta
                    name="description"
                    content="Discover the untouched beauty of Valiyaparamba Island and the Kavvayi Kayal backwater system in northern Kerala. Learn about our local culture and authentic village life."
                />

                <meta
                    name="keywords"
                    content="Valiyaparamba geography, Kavvayi Kayal system, Kasaragod tourism history, Tejaswini river, Kerala island life, authentic Kerala backwaters"
                />

                {/* Open Graph */}
                <meta property="og:title" content="Discover Valiyaparamba: Kerala's Best Kept Secret" />
                <meta property="og:description" content="Learn the history and geography of the pristine Kavvayi Kayal backwaters." />
                <meta property="og:image" content="/images/valiyaparamba-backwater-kerala.jpg" />
                <meta property="og:type" content="article" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Place",
            "name": "Valiyaparamba",
            "description": "A scenic backwater island in the Kasaragod district of Kerala, India.",
            "containedInPlace": {
              "@type": "State",
              "name": "Kerala"
            }
          }
        }
        `}
                </script>
            </Helmet>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Welcome Valiyaparamba</Link>
                    <ul className="navbar-nav ms-auto flex-row gap-4">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mt-4 mb-5">
                <div className="row">

                    {/* LEFT COLUMN: Premium Copywriting + Core Geographical Facts */}
                    <div className="col-lg-8">

                        {/* Section 1: Introduction */}
                        <section className="text-center p-5 bg-light mb-4 rounded">
                            <h1 className="mb-2">Valiyaparamba Backwater</h1>
                            <h2 className="text-tropical mb-4">Kerala’s Hidden Aquatic Gem</h2>
                            <p className="text-muted mb-0">
                                Tucked away in the serene landscape of northern Kerala, the <span className="text-dark fw-medium">Valiyaparamba Backwater</span> is one of the most pristine and unspoiled backwater stretches in the state. Located in <span className="text-dark fw-medium">Kasaragod district</span>, far from the buzz of mass tourism, Valiyaparamba offers a tranquil, almost meditative experience of Kerala’s famous backwaters—where emerald waters meet endless green and time seems to slow down.
                            </p>
                        </section>

                        {/* Section 2: Tapestry */}
                        <section className="p-5 mb-4 text-start">
                            <h3 className="mb-3 text-tropical">A Tapestry of Water and Land</h3>
                            <p className="text-muted mb-3">
                                <span className="text-dark fw-medium">Valiyaparamba</span> is a scenic island in northern Kerala, gracefully separated from the mainland by a sprawling network of backwaters primarily fed by the <span className="text-dark fw-medium">Tejeswini (Kariangode) River</span>. This river meanders through the landscape, forming a tranquil maze of canals, lagoons, and estuaries that stretch lazily across the region, glistening under the golden tropical sun.
                            </p>
                            <p className="text-muted mb-0">
                                Lush coconut palms line the water’s edge, their tall silhouettes mirrored in the gently rippling surface. Traditional fishing boats drift quietly through narrow canals, while thatched-roof homes rest along the banks, nestled in greenery and steeped in timeless village charm. Valiyaparamba offers an untouched backwater experience, far removed from the crowds—an oasis of peace and natural beauty.
                            </p>
                        </section>

                        {/* Section 3: RESTORED CORE CONTENT - Kavvayi Kayal System */}
                        <section className="p-5 bg-light mb-4 rounded text-start">
                            <h3 className="mb-3">The Backwaters of Valiyaparamba</h3>
                            <h4 className="text-tropical mb-4">Kavvayi Kayal System</h4>
                            <p className="text-muted mb-3">
                                Valiyaparamba Backwater is located within the beautiful <span className="text-dark fw-medium">Kavvayi Kayal</span>, one of the largest and most scenic backwater systems in northern Kerala.
                            </p>
                            <p className="text-muted mb-3">
                                Kavvayi Kayal is formed mainly by the waters of the <span className="text-dark fw-medium">Tejaswini River</span>, also known as the Kariangode River. The river flows gently into the Arabian Sea while creating a network of peaceful backwaters, canals, and small islands.
                            </p>
                            <p className="text-muted mb-0">
                                Valiyaparamba is a large island stretching about <span className="text-dark fw-medium">24 kilometers</span> in length. This main island, along with more than <span className="text-dark fw-medium">five smaller surrounding islands</span>, forms a unique backwater landscape within the Kavvayi Kayal system. On the western side of the island lies the <span className="text-dark fw-medium">Arabian Sea</span>, where a long and beautiful beach runs parallel to the backwaters, creating a rare setting where visitors can experience both serene backwaters and the open sea.
                            </p>
                        </section>

                        {/* Section 4: Natural Beauty & Life */}
                        <section className="p-5 mb-4 text-start">
                            <div className="row">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <h4 className="text-tropical mb-3">A Canvas of Natural Beauty</h4>
                                    <p className="text-muted mb-3 small">
                                        Unlike the commercialized backwaters of southern Kerala, expect raw, undisturbed beauty:
                                    </p>
                                    <ul className="text-muted mb-0 small lh-lg">
                                        <li><span className="text-dark fw-medium">Verdant paddy fields</span> lying inches above water.</li>
                                        <li><span className="text-dark fw-medium">Dense mangroves</span>, home to rich wildlife.</li>
                                        <li><span className="text-dark fw-medium">Isolated islands</span> where time stands still.</li>
                                        <li><span className="text-dark fw-medium">Sunsets</span> painting the sky in violet hues.</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 border-start border-2 px-md-4">
                                    <h4 className="text-tropical mb-3">Life Along the Water</h4>
                                    <p className="text-muted mb-3 small">
                                        Valiyaparamba is a living, breathing cultural landscape. Fishing is not just a livelihood but a way of life.
                                    </p>
                                    <p className="text-muted mb-0 small">
                                        Here, you’ll encounter <span className="text-dark fw-medium">authentic Kerala village life</span>—warm smiles, simple food, and a slower rhythm that soothes the soul.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Activities & Nearby */}
                        <section className="p-5 bg-light mb-4 rounded text-start">
                            <h3 className="mb-4">Explore the Untouched</h3>

                            <h5 className="text-tropical mb-3">Things to Do</h5>
                            <ul className="text-muted mb-4 lh-lg">

                                <li>
                                    <span className="text-dark fw-medium">Houseboat Cruises:</span>{' '}
                                    Enjoy peaceful journeys through the backwaters with our{' '}
                                    <Link to="/" className="text-decoration-none">
                                        Valiyaparamba houseboat booking
                                    </Link>{' '}
                                    experience, including traditional Kerala meals.
                                </li>

                                <li>
                                    <span className="text-dark fw-medium">Canoe Rides:</span>{' '}
                                    Explore narrow canals and hidden village routes, perfect for birdwatching and photography in the Valiyaparamba backwaters.
                                </li>

                                <li>
                                    <span className="text-dark fw-medium">Village Walks:</span>{' '}
                                    Walk through coconut groves and interact with locals while experiencing authentic Kerala village life and culture.
                                </li>

                            </ul>

                            <h5 className="text-tropical mb-3">Nearby Attractions</h5>
                            <ul className="text-muted mb-0 lh-lg">

                                <li>
                                    <span className="text-dark fw-medium">Bekal Fort & Beach:</span>{' '}
                                    Visit one of the largest forts in Kerala with stunning Arabian Sea views, located near Valiyaparamba in Kasaragod.
                                </li>

                                <li>
                                    <span className="text-dark fw-medium">Mangrove Trails:</span>{' '}
                                    Discover the rich biodiversity of Kerala’s mangrove forests through guided canoe rides and nature walks.
                                </li>

                            </ul>
                        </section>

                        {/* Section 6: Conclusion */}
                        <section className="p-5 mb-5 rounded text-start border-start border-4 border-info">
                            <h4 className="text-tropical mb-3">A Place to Disconnect</h4>
                            <p className="text-muted mb-3">
                                The best time to visit is from <span className="text-dark fw-medium">September to May</span>. The monsoon season (June to August) transforms the landscape into a lush green paradise, but heavy rains can make travel challenging.
                            </p>
                            <p className="text-muted mb-0 fst-italic">
                                Valiyaparamba Backwater is not just a destination; it’s an invitation to slow down. Whether cruising on a houseboat or simply sitting on the banks watching life unfold, this untouched corner of Kerala invites you to reconnect—with nature, with culture, and with yourself.
                            </p>
                        </section>

                        {/* Final Cinematic Image */}
                        <section className="mt-5 mb-2 text-center">
                            <div className="img-zoom-wrapper shadow-sm">
                                <img
                                    src="/images/valiyaparamba-backwater-kerala.jpg"
                                    className="img-cinematic"
                                    alt="Beautiful View of Valiyaparamba Backwaters"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-muted mt-3 fst-italic small tracking-wide">
                                A serene view of the Valiyaparamba backwaters at dawn.
                            </p>
                        </section>

                    </div>

                    {/* RIGHT COLUMN: Original Sidebar with Placeholders */}
                    <div className="col-lg-4">
                        <div className="sidebar sticky-top" style={{ top: "20px" }}>
                            <h5 className="mb-4">Travel Essentials</h5>

                            <div className="card mb-3 border-0 shadow-sm hover-card">
                                <div className="card-body">
                                    <h6>🎒 Travel Backpack</h6>
                                    <p className="small text-muted mb-2 mt-2">Best backpack for backwater trips.</p>
                                    <span className="small fw-bold text-tropical">Shop on Amazon ↗</span>
                                </div>
                            </div>

                            <div className="card mb-3 border-0 shadow-sm hover-card">
                                <div className="card-body">
                                    <h6>📱 Waterproof Pouch</h6>
                                    <p className="small text-muted mb-2 mt-2">Keep your tech safe on the boat.</p>
                                    <span className="small fw-bold text-tropical">Shop on Amazon ↗</span>
                                </div>
                            </div>

                            <div className="card border-0 shadow-sm hover-card">
                                <div className="card-body">
                                    <h6>🚂 MakeMyTrip Booking</h6>
                                    <p className="small text-muted mb-2 mt-2">Check trains to Payyanur.</p>
                                    <span className="small fw-bold text-tropical">Check Fares ↗</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center p-3 mt-4">
                <p className="mb-0">© 2026 visitvaliyaparamba.com</p>
            </footer>
        </div>
    );
}