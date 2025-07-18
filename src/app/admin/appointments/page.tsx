"use client";

import { useEffect, useState } from "react";

interface Appointment {
    uri: string;
    name: string;
    start_time: string;
    end_time: string;
    location: { join_url: string };
    status: string;
}

export default function AppointmentsPage() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

    useEffect(() => {
        fetch("/api/calendly-events", {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ""}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Unauthorized");
                return res.json();
            })
            .then((data) => setAppointments(data.collection || []))
            .catch((err) => setError(err.message));
    }, []);

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const daysInMonth = getDaysInMonth(currentDate);
    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    const appointmentsForDay = (day: number) => {
        const dateStr = new Date(year, currentDate.getMonth(), day).toISOString().slice(0, 10);
        return appointments.filter((event) => event.start_time.startsWith(dateStr));
    };

    const changeMonth = (offset: number) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + offset);
        setCurrentDate(newDate);
    };

    if (error)
        return (
            <p style={{ color: "black", padding: "2rem", fontFamily: "Poppins, sans-serif" }}>
                Access Denied.
            </p>
        );

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "2rem",
                fontFamily: "Poppins, sans-serif",
                background: "#f9fafb",
                color: "black",
            }}
        >
            <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "1rem" , fontFamily: "Poppins, sans-serif" , color: "black" }}>
                Admin Appointments Calendar
            </h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                    color: "black",
                }}
            >
                <button
                    onClick={() => changeMonth(-1)}
                    style={{
                        padding: "6px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        background: "#fff",
                        cursor: "pointer",
                        color: "black",
                    }}
                >
                    ← Prev
                </button>
                <h2 style={{ fontSize: "20px", fontWeight: "500" , fontFamily: "Poppins, sans-serif" , color: "black"  }}>
                    {monthName} {year}
                </h2>
                <button
                    onClick={() => changeMonth(1)}
                    style={{
                        padding: "6px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        background: "#fff",
                        cursor: "pointer",
                        color: "black",
                    }}
                >
                    Next →
                </button>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: "1px",
                    backgroundColor: "#e5e7eb",
                    fontSize: "14px",
                    border: "1px solid #e5e7eb",
                    color: "black",
                }}
            >
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div
                        key={d}
                        style={{
                            padding: "0.75rem",
                            background: "#f3f4f6",
                            textAlign: "center",
                            fontWeight: 600,
                        }}
                    >
                        {d}
                    </div>
                ))}
                {[...Array(daysInMonth)].map((_, index) => {
                    const day = index + 1;
                    const events = appointmentsForDay(day);
                    return (
                        <div
                            key={day}
                            style={{
                                minHeight: "100px",
                                padding: "8px",
                                background: "#fff",
                                border: "1px solid #eee",
                                position: "relative",
                                verticalAlign: "top",
                                boxSizing: "border-box",
                                color: "black",
                            }}
                        >
                            <div style={{ fontWeight: "500", marginBottom: "4px" }}>{day}</div>
                            {events.map((event) => (
                                <div
                                    key={event.uri}
                                    onClick={() => setSelectedAppointment(event)}
                                    style={{
                                        backgroundColor: "#fef3c7",
                                        padding: "4px 6px",
                                        marginBottom: "4px",
                                        borderRadius: "4px",
                                        fontSize: "12px",
                                        color: "black",
                                        cursor: "pointer",
                                    }}
                                >
                                    {new Date(event.start_time).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}{" "}
                                    {event.name}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>

            {selectedAppointment && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 50,
                    }}
                    onClick={() => setSelectedAppointment(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "#fff",
                            padding: "2rem",
                            borderRadius: "10px",
                            width: "90%",
                            maxWidth: "400px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            fontFamily: "Poppins, sans-serif",
                            color: "black",
                        }}
                    >
                        <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "1rem" , fontFamily: "Poppins, sans-serif" , color: "black" }}>
                            {selectedAppointment.name}
                        </h2>
                        <p>
                            <strong>Start:</strong>{" "}
                            {new Date(selectedAppointment.start_time).toLocaleString()}
                        </p>
                        <p>
                            <strong>End:</strong>{" "}
                            {new Date(selectedAppointment.end_time).toLocaleString()}
                        </p>
                        <p>
                            <strong>Status:</strong> {selectedAppointment.status}
                        </p>
                        <div style={{ marginTop: "1rem" }}>
                            <a
                                href={selectedAppointment.location.join_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block",
                                    background: "#1e3a8a",
                                    color: "#fff",
                                    padding: "8px 16px",
                                    borderRadius: "4px",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "500",
                                    transition: "background 0.3s",  
                                    cursor: "pointer",
                                }}
                            >
                                Join Meeting
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
