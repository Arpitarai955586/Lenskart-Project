import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";

export default function CardStore() {
    const navigate = useNavigate();
  const [tab, setTab] = useState('eyeglasses');

  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 16px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(196, 54, 54, 0.1)',
      position:"fixed",
      top:"0",
      width:"100%"
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
    
    
    
    
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <div style={styles.header}>
       
          <button onClick={() => navigate('/', { replace: true })}>
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
      <span>
      <img src="https://static5.lenskart.com/media/uploads/Lens-replacement-LP-new-topbanner_2-SG-040425.png" alt="" />
      </span>
      <button
      style={{
        backgroundColor: "#00004d", 
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "12px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%", 
        position:"fixed" ,
        bottom:"0"

      }}
    >
      Add To Cart
    </button>
      <h1 style={{marginLeft:"20px",fontSize:"20px" ,color:"black",marginTop:"20px" ,padding:"10px" }}>Add by the add</h1>
     <div style={{
              overflowX: "auto",
              display: "flex",
              gap: "20px",
              padding: "10px",
              scrollBehavior: "smooth",
              width: "520px",
            //   marginTop:"10px",
            }}>
                
              <li style={{
                width: "250px",
                height: "250px",
                listStyleType: "none",
                objectFit: "cover",
                 flex: "0 0 auto"
                
              }}>
                <Link to="/card">
                 <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif "alt="" style={{
                     width: "100%",
                     height: "100%",
                   objectFit: "cover",
                  
                }} />
                 </Link>
              </li>
              <li style={{
                width: "250px",
                height: "250px",
                listStyleType: "none",
                flex: "0 0 auto"
              }}>
                <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt=""
                 style={{
                    width: "100%",
                   height: "100%",
                   objectFit: "cover",
                   paddingTop: "-30px"
                  
                }} 
                 />
              </li>
              <li style={{
                width: "250px",
                height: "250px",
                listStyleType: "none",
                flex: "0 0 auto",
               
              }}>
                <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" 
                 style={{
                  width: "100%",
                   height: "100%",
                   objectFit: "cover",
                  
                }}
                />
              </li>
              <li style={{
                width: "250px",
                height: "250px",
                listStyleType: "none",
                flex: "0 0 auto",
                
              }}>
                <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt=""   
                 style={{
                   width: "100%",
                   height: "100%",
                   objectFit: "cover",
                  
                }}/>
              </li>
              </div>
    </div>
    
  );
}
