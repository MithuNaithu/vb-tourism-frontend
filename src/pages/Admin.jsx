import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Admin() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visitors, setVisitors] = useState([]);

    // Fetch all bookings when the page loads
    useEffect(() => {
        fetchBookings();
        fetchVisitors();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch('https://vb-tourism-backend.onrender.com/api/bookings');
            const data = await response.json();

            // Sort to show newest bookings first (assuming your backend sends an array)
            const sortedData = Array.isArray(data) ? data.reverse() : [];
            setBookings(sortedData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching bookings:", error);
            setLoading(false);
        }
    };

    const fetchVisitors = async () => {
        try {
            const baseUrl = import.meta.env.DEV 
                ? 'http://localhost:3000' 
                : 'https://vb-tourism-backend.onrender.com';
                
            const response = await fetch(`${baseUrl}/api/admin/visitors`);
            const data = await response.json();
            
            if (Array.isArray(data)) {
                setVisitors(data);
            }
        } catch (error) {
            console.error("Error fetching visitor data:", error);
        }
    };

    // --- NEW: The Restored Delete Function ---
    const handleDelete = async (id) => {
        // Safety check before deleting
        if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

        try {
            const response = await fetch(`https://vb-tourism-backend.onrender.com/api/bookings/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Instantly remove it from the screen without reloading the page
                setBookings(bookings.filter((booking) => booking._id !== id));
                console.log("✅ Enquiry deleted successfully!");
            } else {
                console.error("❌ Failed to delete the enquiry from database.");
            }
        } catch (error) {
            console.error("Error deleting booking:", error);
        }
    };
    // Delete a single visitor log
    const handleDeleteVisitor = async (id) => {
        try {
            const baseUrl = import.meta.env.DEV 
                ? 'http://localhost:3000' 
                : 'https://vb-tourism-backend.onrender.com';

            const response = await fetch(`${baseUrl}/api/admin/visitors/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setVisitors(visitors.filter((v) => v._id !== id));
            }
        } catch (error) {
            console.error("Error deleting visitor log:", error);
        }
    };

    // Clear all visitor logs completely
    const handleClearAllVisitors = async () => {
        if (!window.confirm("Are you absolutely sure you want to wipe out ALL traffic logs? This cannot be undone.")) return;

        try {
            const baseUrl = import.meta.env.DEV 
                ? 'http://localhost:3000' 
                : 'https://vb-tourism-backend.onrender.com';

            const response = await fetch(`${baseUrl}/api/admin/visitors`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setVisitors([]);
                alert("跑 All visitor logs have been cleared successfully!");
            }
        } catch (error) {
            console.error("Error clearing logs:", error);
        }
    };

    return (

        <div style={{ fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            {/* Simple Navbar for Admin */}

            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">← Back to Website</Link>
                    <span className="navbar-text text-white fw-bold">
                        Admin Dashboard
                    </span>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Website Enquiries</h2>
                    <span className="badge bg-primary fs-6">{bookings.length} Total Leads</span>
                </div>

                {loading ? (
                    <div className="text-center mt-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : bookings.length === 0 ? (
                    <div className="alert alert-info text-center" role="alert">
                        No enquiries found yet. When people submit the form, they will appear here!
                    </div>
                ) : (
                    <div className="card shadow-sm border-0">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Service</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking) => (
                                        <tr key={booking._id}>
                                            <td className="align-middle fw-bold">{booking.date}</td>
                                            <td className="align-middle">{booking.name}</td>
                                            <td className="align-middle">
                                                <a href={`https://wa.me/${booking.phone}`} target="_blank" rel="noreferrer" className="text-decoration-none text-success fw-bold">
                                                    {booking.phone}
                                                </a>
                                            </td>
                                            <td className="align-middle">{booking.email}</td>
                                            <td className="align-middle">
                                                <span className="badge bg-secondary">{booking.service}</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                {/* --- RESTORED DELETE BUTTON --- */}
                                                <button
                                                    onClick={() => handleDelete(booking._id)}
                                                    className="btn btn-sm btn-outline-danger shadow-sm"
                                                    title="Delete Enquiry"
                                                >
                                                    🗑️ Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
           {/* --- VISITOR TRAFFIC ANALYTICS SECTION --- */}
                <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                    <h2>Website Traffic Location (Recent)</h2>
                    <div className="d-flex gap-2">
                        {visitors.length > 0 && (
                            <button onClick={handleClearAllVisitors} className="btn btn-sm btn-danger shadow-sm fw-bold">
                                跑 Clear All Logs
                            </button>
                        )}
                        <span className="badge bg-success fs-6">Tracking Active</span>
                    </div>
                </div>

                {visitors.length === 0 ? (
                    <div className="alert alert-secondary text-center" role="alert">
                        No visitor traffic logs found yet.
                    </div>
                ) : (
                    <div className="card shadow-sm border-0 mb-5">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Time Checked</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>IP Address</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visitors.map((visitor) => (
                                        <tr key={visitor._id}>
                                            <td className="align-middle fw-semibold">
                                                {new Date(visitor.visitedAt).toLocaleString()}
                                            </td>
                                            <td className="align-middle text-primary fw-bold">
                                                {visitor.city}
                                            </td>
                                            <td className="align-middle fw-bold">
                                                {visitor.country}
                                            </td>
                                            <td className="align-middle text-muted small">
                                                {visitor.ip}
                                            </td>
                                            <td className="align-middle text-center">
                                                <button
                                                    onClick={() => handleDeleteVisitor(visitor._id)}
                                                    className="btn btn-sm btn-link text-danger p-0 border-0 text-decoration-none"
                                                    title="Delete Log"
                                                >
                                                    ❌ Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
        </div>
    );
}