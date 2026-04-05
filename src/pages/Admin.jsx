import { useEffect, useState } from 'react';

export default function Admin() {
    const [bookings, setBookings] = useState([]);

    // Fetch all bookings from your Node.js backend
    useEffect(() => {
        // Make sure this URL matches your backend port exactly
        fetch('http://localhost:3000/api/bookings')
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(data => {
                console.log("Fetched data:", data); // Check your browser console to see if data arrives
                setBookings(data);
            })
            .catch(err => console.error("Error fetching bookings:", err));
    }, []);
    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-tropical">Customer Enquiries (Leads)</h2>
            <div className="table-responsive shadow-sm rounded">
                <table className="table table-hover bg-white">
                    <thead className="table-dark">
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((b) => (
                            <tr key={b._id}>
                                <td>{new Date(b.submittedAt).toLocaleDateString()}</td>
                                <td className="fw-bold">{b.name}</td>
                                <td><span className="badge bg-info text-dark">{b.service}</span></td>
                                <td>{b.phone}</td>
                                <td className="text-muted">{b.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}