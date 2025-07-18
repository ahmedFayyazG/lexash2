"use client";
import React from "react";

export default function SeoSettingsPage() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", fontFamily: "Poppins, sans-serif", color: "#000" }}>
      

            {/* Main SEO Settings */}
            <main style={{ flex: 1, padding: "40px", background: "#f9fafb" }}>
                <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "30px" , fontFamily:"poppins", color:"black"}}>SEO Settings</h1>

                <section
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "30px",
                        marginBottom: "40px",
                    }}
                >
                    {/* Meta Information */}
                    <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 0 4px rgba(0,0,0,0.05)" }}>
                        <h3 style={{ marginBottom: "15px", fontWeight: "600", fontFamily:"poppins", color:"black" }}>Meta Information</h3>
                        <input placeholder="Meta Title" style={inputStyle} />
                        <textarea placeholder="Meta Description" style={textareaStyle} rows={3} />
                        <input placeholder="Canonical URL" style={inputStyle} />
                        <input placeholder="Keywords (optional, comma-separated)" style={inputStyle} />
                    </div>

                    {/* Social Sharing */}
                    <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 0 4px rgba(0,0,0,0.05)" }}>
                        <h3 style={{ marginBottom: "15px", fontWeight: "600" , fontFamily:"poppins", color:"black"}}>Social Sharing (Open Graph / Twitter)</h3>
                        <input placeholder="Open Graph Title" style={inputStyle} />
                        <textarea placeholder="Open Graph Description" style={textareaStyle} rows={2} />
                        <input placeholder="OG Image URL" style={inputStyle} />
                        <input placeholder="Twitter Title" style={inputStyle} />
                        <textarea placeholder="Twitter Description" style={textareaStyle} rows={2} />
                        <input placeholder="Twitter Image URL" style={inputStyle} />
                    </div>
                </section>

                {/* Schema / Advanced */}
                <section style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 0 4px rgba(0,0,0,0.05)" }}>
                    <h3 style={{ marginBottom: "15px", fontWeight: "600" , fontFamily:"poppins", color:"black"}}>Schema Markup (JSON-LD)</h3>
                    <select style={{ ...inputStyle, marginBottom: "10px" }}>
                        <option>None</option>
                        <option>Article</option>
                        <option>FAQ</option>
                        <option>Local Business</option>
                        <option>Product</option>
                    </select>
                    <textarea placeholder="Optional JSON-LD Script" style={{ ...textareaStyle, minHeight: "120px" }} />
                </section>

                {/* Buttons */}
                <button
                    style={{
                        marginTop: "30px",
                        padding: "12px 24px",
                        background: "#000",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500",
                        fontSize: "14px",
                        fontFamily: "Poppins, sans-serif",
                        transition: "background 0.3s",  
                        color: "Black",


                    }}
                >
                    Save SEO Settings
                </button>
            </main>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "13px",
    boxSizing: "border-box" as const,
};

const textareaStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "13px",
    boxSizing: "border-box" as const,
};
