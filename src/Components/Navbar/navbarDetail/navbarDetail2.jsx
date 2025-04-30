import React from "react";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaGlobe, FaSearch, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const StoreLocator = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#fdfafa" }}>
      {/* Top Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
        {/* Logo */}
        <img
          src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
          alt="Lenskart Logo"
          style={{ height: "40px" }}
        />

        {/* Contact Info and Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "16px", color: "#000" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FaPhoneAlt /> <span>1800 202 4444</span>
          </div>
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaGlobe />
        </div>
      </div>

      {/* Main Search Section */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#000066", fontSize: "24px", marginBottom: "10px" }}>Find a store near you</h2>
        <p style={{ color: "#333", fontSize: "16px", marginBottom: "20px" }}>
          Get free eye test & eye checkup by trained optometrist and eye specialist
        </p>

        {/* Search Input and Location Button */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px 15px",
            flex: 1
          }}>
            <FaSearch /> 
            <input
              type="text"
              placeholder="Search by state/pincode/Locality"
              style={{ border: "none", outline: "none", marginLeft: "10px", width: "100%", fontSize: "14px" }}
            />
          </div>

          <button style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px 15px",
            backgroundColor: "#fff",
            cursor: "pointer",
            fontSize: "14px"
          }}>
            <FaMapMarkerAlt style={{ marginRight: "8px" }} /> Use my current location
          </button>

          <a href="#" style={{ marginLeft: "10px", color: "#000066", fontSize: "14px", display: "flex", alignItems: "center" }}>
            <FaWhatsapp style={{ marginRight: "5px" }} /> Need Help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
