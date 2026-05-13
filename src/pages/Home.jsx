import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [visitors, setVisitors] = useState("...");

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Houseboat Cruise',
        date: ''
    });

    useEffect(() => {
        fetch('https://api.counterapi.dev/v1/valiyaparamba_tourism/homepage/up')
            .then(res => res.json())
            .then(data => setVisitors(data.count))
            .catch(err => console.error("Counter error:", err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const friendNumber = "919497401671";
        const message = `*🔔 NEW ENQUIRY FROM WEBSITE 🔔*\n*Source:* valiyaparambatourism.com Platform\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'Not provided'}\n*Service:* ${formData.service}\n*Date:* ${formData.date}`;

        const whatsappUrl = `https://wa.me/${friendNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        fetch('https://vb-tourism-backend.onrender.com/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email || 'no-email@provided.com',
                service: formData.service,
                phone: formData.phone,
                date: formData.date
            })
        }).catch(error => console.error("❌ Backend connection failed:", error));

        const templateParams = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email || 'Not provided',
            service: formData.service,
            date: formData.date
        };

        // Secure EmailJS Submission
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => console.log('✅ EmailJS Sent Successfully!'))
            .catch((error) => console.error('❌ EmailJS Failed:', error));

        setFormData({ name: '', phone: '', email: '', service: 'Houseboat Cruise', date: '' });
        setShowModal(false);
        setIsSubmitting(false);
    };

    return (
        <div className="position-relative">

            <Helmet>
                {/* PRIMARY SEO TITLE */}
                <title>
                    Valiyaparamba Tourism | Houseboats, Homestays & Resorts in Kasaragod Kerala
                </title>

                {/* META DESCRIPTION */}
                <meta
                    name="description"
                    content="Discover Valiyaparamba tourism in Kasaragod Kerala with houseboat cruises, beachside resorts, homestays, and backwater experiences near Nileswar and Kottappuram."
                />

                {/* SEO SUPPORT */}
                <meta
                    name="keywords"
                    content="Valiyaparamba tourism, Valiyaparamba houseboat, Valiyaparamba homestay, Valiyaparamba resorts, Kottappuram houseboat, Nileswar houseboat, Kasaragod tourism, Kerala backwaters"
                />
                <meta name="robots" content="index, follow" />

                {/* CANONICAL */}
                <link rel="canonical" href="https://www.valiyaparambatourism.com/" />

                {/* OPEN GRAPH */}
                <meta
                    property="og:title"
                    content="Valiyaparamba Tourism | Houseboats, Homestays & Resorts Kerala"
                />
                <meta
                    property="og:description"
                    content="Explore Valiyaparamba backwaters with premium houseboats, peaceful homestays, and scenic Kerala resorts near Nileswar & Kottappuram."
                />
                <meta
                    property="og:image"
                    content="https://www.valiyaparambatourism.com/images/valiyaparamba-hero-kasaragod.jpg"
                />
                <meta property="og:url" content="https://www.valiyaparambatourism.com/" />
                <meta property="og:type" content="website" />

                {/* TWITTER */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta





                    name="twitter:title"
                    content="Valiyaparamba Tourism | Houseboats, Homestays & Resorts"
                />
                <meta
                    name="twitter:description"
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala’s peaceful backwaters."
                />
                <meta
                    name="twitter:image"
                    content="https://www.valiyaparambatourism.com/images/valiyaparamba-hero-kasaragod.jpg"
                />

                {/* STRUCTURED DATA - MAIN BUSINESS */}
                <script type="application/ld+json">
                    {`
        {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Valiyaparamba Tourism",
          "url": "https://www.valiyaparambatourism.com",
          "description": "Valiyaparamba Tourism offers houseboats, resorts, homestays and backwater tourism experiences in Kasaragod Kerala.",
          "areaServed": [
            "Valiyaparamba",
            "Nileswar",
            "Kottappuram",
            "Kasaragod"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Valiyaparamba",
            "addressRegion": "Kerala",
            "addressCountry": "India"
          },
          "touristType": [
            "Family Travelers",
            "Couples",
            "Backwater Tourists"
          ]
        }
        `}
                </script>

                {/* FAQ SCHEMA */}
                <script type="application/ld+json">
                    {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are the best tourism experiences in Valiyaparamba?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Valiyaparamba offers houseboat cruises, peaceful backwaters, beach resorts, local homestays, and island tourism experiences in Kasaragod Kerala."
              }
            },
            {
              "@type": "Question",
              "name": "Can I book houseboats, resorts, and homestays in Valiyaparamba?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Valiyaparamba Tourism provides direct local booking for houseboats, resorts, and homestays."
              }
            }
          ]
        }
        `}
                </script>
            </Helmet>

            <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
    <div className="container">

        <Link className="navbar-brand" to="/">
            Welcome to Valiyaparamba
        </Link>

        <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto gap-3 gap-lg-4">

                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/about"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                </li>

            </ul>
        </div>

    </div>
</nav>

            <section className="hero text-center text-white">
                <div className="container">
                    <h1 className="fw-bold text-shadow-sm mb-3">
                        Valiyaparamba Houseboat Booking, Resorts & Homestays in Kasaragod Kerala
                    </h1>
                    <p className="lead mb-4 text-shadow-sm">
                        Peaceful houseboat cruises, beautiful beaches, and authentic Kerala village life.
                    </p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="btn btn-contact btn-lg px-4 fw-bold shadow"
                    >
                        Contact Us
                    </button>
                </div>
            </section>


            <section className="p-4 text-center">
                <h2>Our Popular Valiyaparamba Experiences</h2>
                <p>
                    Looking for houseboat booking in Valiyaparamba? We offer peaceful backwater cruises
                    and authentic homestay experiences in Kasaragod Kerala. Enjoy scenic views,
                    island life, and traditional village tourism in one of Kerala’s most beautiful destinations.
                </p>
                <p>
                    Explore our <Link to="/about">Valiyaparamba travel guide</Link> and learn about
                    Kavvayi backwaters, island life, and tourism experiences.
                </p>
            </section>

            <section className="p-4 p-md-5 text-center bg-white">
                <div className="container px-3">
                    <h2 className="mb-4">Why Visit Valiyaparamba</h2>
                    <p className="text-muted mb-5">Valiyaparamba is one of the most peaceful backwater destinations in northern Kerala.</p>
                    <div className="row g-3 g-md-4 mt-4">
                        <div className="col-6 col-md-3 mb-3 mb-md-0 hover-card">
                            <div className="display-6" aria-hidden="true">🌴</div>
                            <h3 className="h6 mt-3">Beautiful Backwaters</h3>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0 hover-card">
                            <div className="display-6" aria-hidden="true">🚤</div>
                            <h3 className="h6 mt-3">Houseboat Cruises</h3>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0 hover-card">
                            <div className="display-6" aria-hidden="true">🏝</div>
                            <h3 className="h6 mt-3">Island Experience</h3>
                        </div>
                        <div className="col-6 col-md-3 hover-card">
                            <div className="display-6" aria-hidden="true">🌅</div>
                            <h3 className="h6 mt-3">Beautiful Sunsets</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-4 p-md-5 bg-light pb-5">
                <div className="container text-center mb-4 px-3">
                    <h2 className="mb-5">Houseboat and Homestays in Valiyaparamba</h2>
                    <div className="row g-3 g-md-4 justify-content-center">
                        <div className="col-12 col-md-5">
                            <div className="card h-100 shadow-sm border-0 hover-card img-zoom-wrapper">
                                <img src="/images/valiyaparamba-houseboat-kasaragod.jpg" className="card-img-top img-cinematic experience-img" alt="Best Valiyaparamba houseboat cruise in Kasaragod Kerala backwaters" loading="lazy" />
                                <div className="card-body p-4">
                                    <h5 className="mb-3 text-tropical">Valiyaparamba Houseboat Booking</h5>
                                    <p className="text-muted mb-0">Experience the tranquil Kerala backwaters in our premium traditional houseboats.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="card h-100 shadow-sm border-0 hover-card img-zoom-wrapper">
                                <img src="/images/valiyaparamba-homestay-kasaragod.jpg" className="card-img-top img-cinematic experience-img" alt="Best homestay in Valiyaparamba backwaters Kerala village stay experience" loading="lazy" />
                                <div className="card-body p-4">
                                    <h5 className="mb-3 text-tropical">Best Homestays in Valiyaparamba Kerala</h5>
                                    <p className="text-muted mb-0">Stay with local families and enjoy legendary coastal Kerala hospitality and seafood.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-white py-4 mt-auto">
                <div className="container-fluid px-3">
                    <div className="row g-3">
                        <div className="col-12 col-md-auto text-center text-md-start">
                            <p className="mb-0 small">© valiyaparambatourism.com</p>
                            <p className="mb-0 text-muted extra-small">Thrikaripur, Kerala, India</p>
                        </div>
                        <div className="col-12 col-md-auto ms-md-auto text-center">
                            <div className="badge bg-secondary px-3 py-2 shadow-sm fs-6">
                                Visitors: {visitors}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {showModal && (
                <>
                    <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content shadow-lg border-0">
                                <div className="modal-header bg-dark text-white">
                                    <h5 className="modal-title">Book Your Experience</h5>
                                    <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body p-3 p-md-4 text-start">
                                    <form onSubmit={handleWhatsAppSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label text-muted small mb-1">Full Name</label>
                                            <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter your name" required value={formData.name} onChange={handleChange} style={{ fontSize: '1rem' }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label text-muted small mb-1">WhatsApp Number</label>
                                            <input type="tel" name="phone" className="form-control form-control-lg" placeholder="+91" required value={formData.phone} onChange={handleChange} style={{ fontSize: '1rem' }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label text-muted small mb-1">Email Address (Optional)</label>
                                            <input type="email" name="email" className="form-control form-control-lg" placeholder="name@example.com" value={formData.email} onChange={handleChange} style={{ fontSize: '1rem' }} />
                                        </div>
                                        <div className="row g-2 mb-4">
                                            <div className="col-12 col-sm-6">
                                                <label className="form-label text-muted small mb-1">Select Service</label>
                                                <select name="service" className="form-select form-select-lg" required value={formData.service} onChange={handleChange} style={{ fontSize: '1rem' }}>
                                                    <option value="Houseboat Cruise">Houseboat Cruise</option>
                                                    <option value="Homestay Experience">Homestay Experience</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label className="form-label text-muted small mb-1">Date</label>
                                                <input type="date" name="date" className="form-control form-control-lg" required value={formData.date} onChange={handleChange} style={{ fontSize: '1rem' }} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-contact w-100 fs-6 shadow-sm" disabled={isSubmitting}>
                                            {isSubmitting ? "Processing..." : "Send Enquiry via WhatsApp"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}