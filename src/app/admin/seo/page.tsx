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

// "use client";

// import { useState, useCallback } from "react";
// import Cropper from "react-easy-crop";
// import { PDFDocument } from "pdf-lib";
// import getCroppedImg from "../utils/cropImage";


// export default function DocumentScanner() {
//     const [images, setImages] = useState<string[]>([]);
//     const [imageSrc, setImageSrc] = useState<string | null>(null);
//     const [croppedImages, setCroppedImages] = useState<string[]>([]);
//     const [crop, setCrop] = useState({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState(1);
//     const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//     const onCropComplete = useCallback((_, croppedAreaPixels) => {
//         setCroppedAreaPixels(croppedAreaPixels);
//     }, []);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImageSrc(reader.result as string);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const showCroppedImage = useCallback(async () => {
//         try {
//             const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
//             setCroppedImages([...croppedImages, croppedImage as string]);
//             setImageSrc(null);
//         } catch (e) {
//             console.error(e);
//         }
//     }, [imageSrc, croppedAreaPixels, croppedImages]);

//     const generatePDF = async () => {
//         const pdfDoc = await PDFDocument.create();
//         for (const img of croppedImages) {
//             const pngImage = await pdfDoc.embedPng(img);
//             const page = pdfDoc.addPage([pngImage.width, pngImage.height]);
//             page.drawImage(pngImage, { x: 0, y: 0, width: pngImage.width, height: pngImage.height });
//         }
//         const pdfBytes = await pdfDoc.save();
//         const blob = new Blob([pdfBytes], { type: "application/pdf" });
//         const link = document.createElement("a");
//         link.href = URL.createObjectURL(blob);
//         link.download = "scanned-document.pdf";
//         link.click();
//     };

//     return (
//         <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
//             <h1 style={{ color: "black" }}>Scan & Crop Documents</h1>

//             <input type="file" accept="image/*" capture="environment" onChange={handleFileChange} />

//             {imageSrc && (
//                 <div style={{ position: "relative", height: "400px", width: "300px", marginTop: "20px" }}>
//                     <Cropper
//                         image={imageSrc}
//                         crop={crop}
//                         zoom={zoom}
//                         aspect={3 / 4}
//                         onCropChange={setCrop}
//                         onZoomChange={setZoom}
//                         onCropComplete={onCropComplete}
//                     />
//                     <button onClick={showCroppedImage} style={{ marginTop: "10px" }}>Save Crop</button>
//                 </div>
//             )}

//             <button onClick={generatePDF} style={{ marginTop: "1rem" }}>Download PDF</button>

//             <div style={{ marginTop: "20px" }}>
//                 {croppedImages.map((src, idx) => (
//                     <img key={idx} src={src} alt={`Cropped ${idx + 1}`} style={{ width: "100%", maxWidth: "300px", marginBottom: "10px" }} />
//                 ))}
//             </div>
//         </div>
//     );
// }
