import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
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

        // 1. OPEN WHATSAPP IMMEDIATELY
        const friendNumber = "919497401671";
        const message = `*🔔 NEW ENQUIRY FROM WEBSITE 🔔*\n*Source:* Valiyaparambatourism.com Platform\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'Not provided'}\n*Service:* ${formData.service}\n*Date:* ${formData.date}`;
        const whatsappUrl = `https://wa.me/${friendNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // 2. SEND TO BACKEND DATABASE (Silently in background)
        fetch('https://vb-tourism-backend.onrender.com/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email || 'no-email@provided.com',
                service: formData.service,
                phone: formData.phone,
                date: formData.date
            })
        }).catch(error => console.error("❌ Backend connection failed:", error));

        // 3. SEND EMAILJS NOTIFICATION
        const templateParams = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email || 'Not provided',
            service: formData.service,
            date: formData.date
        };

        emailjs.send(
            'service_31x27d7',
            'template_imcqz89',
            templateParams,
            'Lq6-PF8FnyNA_z__J'
        )
            .then((response) => {
                console.log('✅ EmailJS Sent Successfully!', response.status, response.text);
            })
            .catch((error) => {
                console.error('❌ EmailJS Failed:', error);
            });

        // 4. RESET & CLOSE
        setFormData({
            name: '',
            phone: '',
            email: '',
            service: 'Houseboat Cruise',
            date: ''
        });

        setShowModal(false);
        setIsSubmitting(false);
    };

    return (
        <div className="position-relative" style={{ fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>

            {/* SEO TAGS FOR GOOGLE */}
            <Helmet>
                <title>
                    Best Houseboat Booking in Valiyaparamba | Resorts & Homestay in Kasaragod Kerala
                </title>

                <meta
                    name="description"
                    content="Book the best houseboat cruise in Valiyaparamba backwaters, Kasaragod. Explore luxury resorts, budget homestays, and peaceful Kerala village tourism experiences."
                />

                <meta
                    name="keywords"
                    content="Valiyaparamba houseboat booking, best resorts in Valiyaparamba, homestay in Valiyaparamba Kerala, Kasaragod backwater tourism, Kavvayi island houseboat, Kerala backwater cruise booking, budget homestay Kasaragod, luxury houseboat Kerala, Valiyaparamba travel guide, things to do in Valiyaparamba"
                />

                {/* Social Sharing */}
                <meta property="og:title" content="Valiyaparamba Houseboat Booking Kerala" />
                <meta property="og:description" content="Book houseboats, resorts and homestays in Valiyaparamba backwaters." />
                <meta property="og:image" content="/images/hero.jpg" />
                <meta property="og:type" content="website" />
                
                {/* JSON-LD Script correctly placed inside Helmet */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "TouristDestination",
                      "name": "Valiyaparamba Backwaters",
                      "description": "Book houseboats, resorts, and homestays in Valiyaparamba, Kasaragod, Kerala.",
                      "touristType": ["Couples", "Families"],
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Valiyaparamba",
                        "addressRegion": "Kerala",
                        "addressCountry": "India"
                      }
                    }
                    `}
                </script>
            </Helmet>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Welcome Valiyaparamba</Link>
                    <ul className="navbar-nav ms-auto flex-row gap-4">
                        <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>

            <section className="hero text-center text-white d-flex align-items-center justify-content-center" style={{ minHeight: '40vh', padding: '80px 15px', backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h1 className="fw-bold text-shadow-sm mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: '1.2' }}>
                        Best Houseboat Booking in Valiyaparamba Backwaters        </h1>
                    <p className="lead mb-4 text-shadow-sm" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                        Peaceful houseboat cruises, beautiful beaches, and authentic Kerala village life.
                    </p>
                    <button onClick={() => setShowModal(true)} className="btn btn-warning btn-lg px-4 fw-bold shadow">
                        Send an Enquiry
                    </button>
                </div>
            </section>
            
            {/* SEO helps check omline verify and rank better in google search results. */}
            <section className="p-4 text-center">
                <h2>Valiyaparamba Backwater Tourism in Kasaragod</h2>
                <p>
                    Valiyaparamba is one of the most beautiful and unexplored backwater destinations in Kerala.
                    Book houseboat cruises, homestays, and resorts in Valiyaparamba and enjoy peaceful village life,
                    stunning beaches, and authentic Kerala experiences.
                </p>
            </section>

            <section className="p-5 text-center bg-white">
                <div className="container">
                    <h2 className="mb-4">Why Visit Valiyaparamba</h2>
                    <p className="text-muted mb-5">Valiyaparamba is one of the most peaceful backwater destinations in northern Kerala.</p>
                    <div className="row mt-4">
                        {/* Added mb-4 mb-md-0 to give spacing between items when stacked on mobile */}
                        <div className="col-md-3 mb-4 mb-md-0">
                            <h4 className="display-6">🌴</h4><h6 className="mt-3">Beautiful Backwaters</h6>
                        </div>
                        <div className="col-md-3 mb-4 mb-md-0">
                            <h4 className="display-6">🚤</h4><h6 className="mt-3">Houseboat Cruises</h6>
                        </div>
                        <div className="col-md-3 mb-4 mb-md-0">
                            <h4 className="display-6">🏝</h4><h6 className="mt-3">Island Experience</h6>
                        </div>
                        <div className="col-md-3">
                            <h4 className="display-6">🌅</h4><h6 className="mt-3">Beautiful Sunsets</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-5">Core Experiences</h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-5">
                            <div className="card h-100 shadow-sm border-0 hover-card img-zoom-wrapper">
                                <img
                                    src="/images/valiyaparamba-houseboat-kerala.jpg"
                                    className="card-img-top img-cinematic"
                                    alt="Valiyaparamba houseboat cruise in Kasaragod Kerala backwaters"
                                    loading="lazy"
                                />
                                <div className="card-body p-4">
                                    <h5 className="mb-3">Luxury Houseboat Cruise</h5>
                                    <p className="text-muted mb-0">Experience the tranquil Kerala backwaters in our premium houseboats.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card h-100 shadow-sm border-0 hover-card img-zoom-wrapper">
                                <img
                                    src="/images/valiyaparamba-homestay-kerala.jpg"
                                    className="card-img-top img-cinematic"
                                    alt="Best homestay in Valiyaparamba backwaters Kerala village stay experience"
                                    loading="lazy"
                                />
                                <div className="card-body p-4">
                                    <h5 className="mb-3">Authentic Homestays</h5>
                                    <p className="text-muted mb-0">Enjoy legendary coastal Kerala hospitality and fresh seafood.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-white py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <p className="mb-0 small">© 2026 valiyaparambatourism.com</p>
                        <p className="mb-0 text-muted extra-small">Thrikaripur, Kerala, India</p>
                    </div>
                    <div className="badge bg-secondary px-3 py-2">
                        Visitors: {visitors}
                    </div>
                </div>
            </footer>

            {showModal && (
                <>
                    <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>
                    <div className="modal fade show d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content shadow-lg border-0">
                                <div className="modal-header bg-dark text-white">
                                    <h5 className="modal-title">Send an Enquiry</h5>
                                    <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body p-4">
                                    <form onSubmit={handleWhatsAppSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label small">Full Name</label>
                                            <input type="text" name="name" className="form-control" required value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small">WhatsApp Number</label>
                                            <input type="tel" name="phone" className="form-control" placeholder="+91" required value={formData.phone} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small">Email Address (Optional)</label>
                                            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-6">
                                                <label className="form-label small">Select Service</label>
                                                <select name="service" className="form-select" value={formData.service} onChange={handleChange}>
                                                    <option value="Houseboat Cruise">Houseboat Cruise</option>
                                                    <option value="Homestay Experience">Homestay Experience</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label small">Date</label>
                                                <input type="date" name="date" className="form-control" required value={formData.date} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-warning w-100 fw-bold" disabled={isSubmitting}>
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