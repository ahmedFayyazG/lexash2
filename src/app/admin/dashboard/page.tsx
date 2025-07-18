"use client";
import React, { useState } from "react";
import AppointmentsPage from "@/app/admin/appointments/page";
import SeoSettingsPage from "@/app/admin/seo/page"; // Adjust to your file structure

const DashboardPage = () => {
    const [activePage, setActivePage] = useState("dashboard");

    const handleNavigation = (page: string) => setActivePage(page);

    return (
        <div
            style={{
                display: "flex",
                fontFamily: "Poppins, sans-serif",
                height: "100vh",
                flexDirection: "column",
                overflow: "hidden",
                color: "black",
            }}
        >
            {/* Top Navbar */}
            <div
                style={{
                    width: "100%",
                    padding: "12px 20px",
                    backgroundColor: "#f9faff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
                    flexShrink: 0,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        padding: "10px 20px",
                        borderRadius: "9999px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                        maxWidth: "400px",
                        flex: 1,
                    }}
                >
                    <span style={{ color: "black", fontSize: "16px", marginRight: "10px" }}>🔍</span>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "#f9faff",
                            padding: "10px",
                            fontSize: "14px",
                            width: "100%",
                            fontFamily: "Poppins, sans-serif",
                            color: "black",
                        }}
                    />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginLeft: "30px" }}>
                    <span style={{ color: "black", fontSize: "18px", cursor: "pointer" }}>🔔</span>
                    <span style={{ color: "black", fontSize: "18px", cursor: "pointer" }}>❕</span>
                    <span style={{ color: "black", fontSize: "18px", cursor: "pointer" }}>🌙</span>
                    <div
                        style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#1a0dab",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            fontWeight: "500",
                            cursor: "pointer",
                        }}
                    >
                        AP
                    </div>
                </div>
            </div>

            {/* Sidebar + Main Content */}
            <div style={{ display: "flex", flexGrow: 1, minHeight: 0, overflow: "hidden", flexDirection: "row" }}>
                <aside
                    style={{
                        width: "240px",
                        backgroundColor: "#fff",
                        borderRight: "1px solid #eee",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        boxShadow: "2px 0 4px rgba(0,0,0,0.03)",
                    }}
                >
                    <h2 style={{ fontWeight: "bold", fontSize: "22px" }}>Taplox</h2>
                    <nav style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
                        <span onClick={() => handleNavigation("dashboard")} style={{ cursor: "pointer", color: "black" }}>
                            Dashboard
                        </span>
                        <span onClick={() => handleNavigation("appointments")} style={{ cursor: "pointer", color: "black" }}>
                            Appointments
                        </span>
                        <span onClick={() => handleNavigation("seo")} style={{ cursor: "pointer", color: "black" }}>
                            SEO Tools
                        </span>
                        <span style={{ color: "black", cursor: "pointer" }}>Settings</span>
                        <span style={{ color: "black", cursor: "pointer" }}>Forms</span>
                        <span style={{ color: "black", cursor: "pointer" }}>Users</span>
                        <span style={{ color: "black", cursor: "pointer" }}>Analytics</span>
                        <span style={{ color: "black", cursor: "pointer" }}>Integrations</span>
                        <span style={{ color: "black", cursor: "pointer" }}>Blogs</span>

                    </nav>
                </aside>

                <main
                    style={{
                        flexGrow: 1,
                        backgroundColor: "#f9faff",
                        padding: "20px",
                        overflowY: "auto",
                        fontFamily: "Poppins, sans-serif",
                        color: "black",
                    }}
                >
                    {activePage === "dashboard" && (
                        <>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "20px" }}>
                                {["Clicks", "Sales", "Events", "Users"].map((item) => (
                                    <div
                                        key={item}
                                        style={{
                                            flex: "1 1 200px",
                                            backgroundColor: "#fff",
                                            padding: "20px",
                                            borderRadius: "12px",
                                            boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                        }}
                                    >
                                        <strong>{item}</strong>
                                        <h3 style={{ fontWeight: "600", fontSize: "20px" }}>{Math.floor(Math.random() * 10000)}</h3>
                                        <span style={{ fontSize: "12px", color: "green" }}>+ 3.0% from last month</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                <div
                                    style={{
                                        flex: "1 1 500px",
                                        backgroundColor: "#fff",
                                        padding: "20px",
                                        borderRadius: "12px",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
                                        minWidth: "300px",
                                    }}
                                >
                                    <h3 style={{ marginBottom: "10px" }}>Top Pages</h3>
                                    <div
                                        style={{
                                            height: "200px",
                                            backgroundColor: "#f3f4f6",
                                            borderRadius: "6px",
                                            textAlign: "center",
                                            lineHeight: "200px",
                                        }}
                                    >
                                        Graph Placeholder
                                    </div>
                                </div>
                                <div
                                    style={{
                                        flex: "1 1 300px",
                                        backgroundColor: "#fff",
                                        padding: "20px",
                                        borderRadius: "12px",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
                                        minWidth: "300px",
                                    }}
                                >
                                    <h3 style={{ marginBottom: "10px" }}>Sessions by Country</h3>
                                    <div
                                        style={{
                                            height: "200px",
                                            backgroundColor: "#f3f4f6",
                                            borderRadius: "6px",
                                            textAlign: "center",
                                            lineHeight: "200px",
                                        }}
                                    >
                                        Map Placeholder
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activePage === "appointments" && <AppointmentsPage />}
                    {activePage === "seo" && <SeoSettingsPage />}
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
