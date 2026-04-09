import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Welcome Valiyaparamba</Link>
                    <ul className="navbar-nav ms-auto flex-row gap-4">
                        <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>

            <section className="hero text-center text-white d-flex align-items-center justify-content-center"
                style={{ background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero.jpg') center/cover", height: "70vh" }}>
                <div className="container">
                    <h1 className="display-4 fw-bold text-shadow-sm">Explore Valiyaparamba Backwaters</h1>
                    <p className="lead mb-4 text-shadow-sm">Peaceful houseboat cruises, beautiful beaches, and authentic Kerala village life.</p>
                    <button onClick={() => setShowModal(true)} className="btn btn-warning btn-lg px-4 fw-bold shadow">
                        Send an Enquiry
                    </button>
                </div>
            </section>

            <section className="p-5 text-center bg-white">
                <div className="container">
                    <h2 className="mb-4">Why Visit Valiyaparamba</h2>
                    <p className="text-muted mb-5">Valiyaparamba is one of the most peaceful backwater destinations in northern Kerala.</p>
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <h4 className="display-6">🌴</h4><h6 className="mt-3">Beautiful Backwaters</h6>
                        </div>
                        <div className="col-md-3">
                            <h4 className="display-6">🚤</h4><h6 className="mt-3">Houseboat Cruises</h6>
                        </div>
                        <div className="col-md-3">
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
                            <div className="card h-100 shadow-sm border-0">
                                <img src="/images/houseboat.jpg" className="card-img-top" style={{ height: "250px", objectFit: "cover" }} alt="Houseboat" />
                                <div className="card-body p-4">
                                    <h5 className="mb-3">Luxury Houseboat Cruise</h5>
                                    <p className="text-muted mb-0">Experience the tranquil Kerala backwaters in our premium houseboats.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card h-100 shadow-sm border-0">
                                <img src="/images/homestay.jpg" className="card-img-top" style={{ height: "250px", objectFit: "cover" }} alt="Homestay" />
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