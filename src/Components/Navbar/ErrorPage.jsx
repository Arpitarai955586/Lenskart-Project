import React from 'react';

const StorePage = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#ffffff', textAlign: 'center', color: '#333' }}>
      
      {/* Navbar */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <img 
          src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" 
          alt="Lenskart Logo" 
          style={{ height: '30px' }}
        />
        <div style={{ display: 'flex', gap: '10px', fontSize: '20px' }}>
          <span>❤️</span>
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '48px', color: 'teal', marginBottom: '20px' }}>DAMN!!</h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '10px' }}>
          Seems like the page you were looking for cannot be found. Don't worry.
        </p>
        <p style={{ fontSize: '16px', color: '#999', marginBottom: '20px' }}>
          The requested resource failed with status 404.
        </p>
        <a 
          href="/" 
          style={{ color: 'teal', fontWeight: 'bold', textDecoration: 'underline', marginBottom: '40px' }}
        >
          CLICK HERE
        </a>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a href="#" style={{ color: 'teal', fontWeight: 'bold', textDecoration: 'none' }}>Sunglasses</a>
          <a href="#" style={{ color: 'teal', fontWeight: 'bold', textDecoration: 'none' }}>Eyeglasses</a>
          <a href="#" style={{ color: 'teal', fontWeight: 'bold', textDecoration: 'none' }}>Contact Lenses</a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#001f3f', color: '#fff', padding: '15px 0', fontSize: '18px' }}>
        <p>Can we <strong>Help?</strong></p>
      </footer>
    </div>
  );
};

export default StorePage;
