import React from 'react';

const PurposeSection = () => {
  return (
    <div>
    <div style={{ backgroundColor: '#00003a', color: 'white', padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'normal', marginBottom: '50px' }}>Our purpose</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {/* Left Text Section */}
        <div style={{ flex: '1 1 45%', minWidth: '300px', paddingRight: '20px' }}>
          <h1 style={{ fontSize: '48px', lineHeight: '1.2', fontWeight: 'normal' }}>
            We exist to transform the way people see and experience the world.
          </h1>
          <p style={{ fontSize: '24px', marginTop: '30px', lineHeight: '1.6' }}>
            Since day one, Lenskart has defied expectations on how people engage with eyewear.
            Yes, eyecare and eyewear is what we do. But we exist for something much bigger than ourselves.
          </p>
        </div>

        {/* Right Video Section */}
        <div style={{ flex: '1 1 45%', minWidth: '300px', marginTop: '20px' }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/your-video-id" // Replace with real video ID
            title="Our Purpose"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </div>
      <div>
      <img src="https://static1.lenskart.com/media/desktop/img/Apr22/more1.jpg" alt="" />
    </div>
    </div>
  );
};

export default PurposeSection;
