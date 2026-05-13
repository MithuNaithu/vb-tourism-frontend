# Code Citations

## License: unknown
https://github.com/livinginthefiction/test-netlify-se/blob/03e771f44292c26381038930b3b5c9cea8bb74aa/src/pages/Faq.jsx

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/monojkumar2001/nfes/blob/7e8479b58476a25808767d08f99a1a88b8a94111/pages/index.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/shanmugam8196/purbis/blob/05d6f4032b01fb9c80768c45b04e5cac637f3458/src/pages/PizzaDeliverySoftware/seo.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/livinginthefiction/test-netlify-se/blob/03e771f44292c26381038930b3b5c9cea8bb74aa/src/pages/Faq.jsx

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/monojkumar2001/nfes/blob/7e8479b58476a25808767d08f99a1a88b8a94111/pages/index.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/shanmugam8196/purbis/blob/05d6f4032b01fb9c80768c45b04e5cac637f3458/src/pages/PizzaDeliverySoftware/seo.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/livinginthefiction/test-netlify-se/blob/03e771f44292c26381038930b3b5c9cea8bb74aa/src/pages/Faq.jsx

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/monojkumar2001/nfes/blob/7e8479b58476a25808767d08f99a1a88b8a94111/pages/index.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/shanmugam8196/purbis/blob/05d6f4032b01fb9c80768c45b04e5cac637f3458/src/pages/PizzaDeliverySoftware/seo.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/livinginthefiction/test-netlify-se/blob/03e771f44292c26381038930b3b5c9cea8bb74aa/src/pages/Faq.jsx

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/monojkumar2001/nfes/blob/7e8479b58476a25808767d08f99a1a88b8a94111/pages/index.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/shanmugam8196/purbis/blob/05d6f4032b01fb9c80768c45b04e5cac637f3458/src/pages/PizzaDeliverySoftware/seo.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/livinginthefiction/test-netlify-se/blob/03e771f44292c26381038930b3b5c9cea8bb74aa/src/pages/Faq.jsx

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/monojkumar2001/nfes/blob/7e8479b58476a25808767d08f99a1a88b8a94111/pages/index.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/shanmugam8196/purbis/blob/05d6f4032b01fb9c80768c45b04e5cac637f3458/src/pages/PizzaDeliverySoftware/seo.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/livinginthefiction/test-netlify-se/blob/03e771f44292c26381038930b3b5c9cea8bb74aa/src/pages/Faq.jsx

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/monojkumar2001/nfes/blob/7e8479b58476a25808767d08f99a1a88b8a94111/pages/index.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/shanmugam8196/purbis/blob/05d6f4032b01fb9c80768c45b04e5cac637f3458/src/pages/PizzaDeliverySoftware/seo.js

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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
                
```


## License: unknown
https://github.com/ebulfez21/Porto/blob/6230120e25e6d08f46df0be3001853092bf79ef9/src/Layout/Nav/Nav.jsx

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid px-3 px-sm-0">
                    <Link className="navbar-brand fs-6 fs-sm-5" to="/">Welcome to Valiyaparamba</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto flex-row gap-3 gap-lg-4
```


## License: unknown
https://github.com/ebulfez21/Porto/blob/6230120e25e6d08f46df0be3001853092bf79ef9/src/Layout/Nav/Nav.jsx

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid px-3 px-sm-0">
                    <Link className="navbar-brand fs-6 fs-sm-5" to="/">Welcome to Valiyaparamba</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto flex-row gap-3 gap-lg-4
```


## License: unknown
https://github.com/ebulfez21/Porto/blob/6230120e25e6d08f46df0be3001853092bf79ef9/src/Layout/Nav/Nav.jsx

```
I'll make the Home.jsx page mobile responsive by updating the CSS and JSX structure. Let me analyze the current code and add mobile-friendly improvements.

**Plan:**
1. Add mobile-responsive navbar with hamburger menu
2. Make hero section stack properly on mobile with adjusted font sizes
3. Adjust card layouts for mobile (single column)
4. Make modal responsive and touch-friendly
5. Improve spacing and padding for smaller screens
6. Ensure images are fluid and readable text on all devices

```jsx
// filepath: c:\VB_TOURISM\src\pages\Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visitors, setVisitors] = useState("...");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        emailjs.send('service_31x27d7', 'template_imcqz89', templateParams, 'Lq6-PF8FnyNA_z__J')
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                    content="Book Valiyaparamba houseboats, homestays, and resorts in Kerala's peaceful backwaters."
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

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid px-3 px-sm-0">
                    <Link className="navbar-brand fs-6 fs-sm-5" to="/">Welcome to Valiyaparamba</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto flex-row gap-3 gap-lg-4
```

