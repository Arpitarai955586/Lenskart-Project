import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";

export default function HarryPotter() {
    const navigate = useNavigate();
  const [tab, setTab] = useState('eyeglasses');

  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 16px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    banner: {
      position: 'relative',
      width: '100%',
      height: '240px',
      overflow: 'hidden',
    },
    bannerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    bannerText: {
      position: 'absolute',
      bottom: '16px',
      left: '16px',
      color: 'white',
    },
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '16px',
    },
    tabButton: (isActive) => ({
      padding: '8px 24px',
      borderBottom: isActive ? '2px solid #1D4ED8' : 'none',
      color: isActive ? '#1D4ED8' : 'gray',
      background: 'none',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    }),
    sizeSection: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#EEF2FF',
      padding: '16px',
      marginTop: '24px',
      borderRadius: '16px',
      margin: '0 16px',
    },
    sizeImage: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    sizeTextContainer: {
      marginLeft: '16px',
    },
    fitButton: {
      marginTop: '8px',
      padding: '8px 16px',
      backgroundColor: '#1D4ED8',
      color: 'white',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <div style={styles.header}>
       
          <button onClick={() => navigate(-1)}>
           <FaArrowLeft size={20} />
        </button>

        <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#1E3A8A' }}>Harry Potter</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <FaSearch size={20} />
          <FaHeart size={20} />
          <FaShoppingCart size={20} />
          <FaBars size={20} />
        </div>
      </div>

      {/* Banner */}
      <div style={styles.banner}>
        <img
          src="https://i.imgur.com/KDIDiSE.png" 
          alt="Harry Potter Styles"
          style={styles.bannerImage}
        />
        <div style={styles.bannerText}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg" alt="Harry Potter Logo" style={{ height: '32px', marginBottom: '8px' }} />
          <p style={{ fontSize: '14px', fontWeight: '300' }}>Styles Inspired By Favourite Characters</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          onClick={() => setTab('eyeglasses')}
          style={styles.tabButton(tab === 'eyeglasses')}
        >
          Eyeglasses
        </button>
        <button
          onClick={() => setTab('sunglasses')}
          style={styles.tabButton(tab === 'sunglasses')}
        >
          Sunglasses
        </button>
      </div>

      {/* Size Fit Section */}
      <div style={styles.sizeSection}>
        <img
          src="https://i.imgur.com/6X8VgLj.png" // Replace with your face fit image
          alt="Face Fit"
          style={styles.sizeImage}
        />
        <div style={styles.sizeTextContainer}>
          <h2 style={{ fontSize: '16px', fontWeight: '600' }}>Not sure about your size?</h2>
          <p style={{ fontSize: '14px', color: 'gray' }}>Size changes with face</p>
          <button style={styles.fitButton}>
            Find my fit
          </button>
        </div>
      </div>
      

    </div>
    
  );
}
