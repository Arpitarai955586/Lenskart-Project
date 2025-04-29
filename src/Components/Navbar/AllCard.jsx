import { border ,Box } from '@chakra-ui/react'
import React, {useState,useRef} from 'react'
import style from './All.module.css'
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom"
import { Button, Drawer, Radio, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import { Carousel } from 'antd';
import StorePage from './ErrorPage';
import { FaChevronRight } from 'react-icons/fa';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const images = [
  {
    label: 'Top 1',
    img: 'https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png',
  },
  {
    label: 'Top 2',
    img: 'https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png',
  },
  {
    label: 'Top 3',
    img: 'https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png',
  },
  {
    label: 'Top 4',
    img: 'https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png',
  },
  {
    label: 'Top 5',
    img: 'https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png',
  },
  {
    label: 'Top 6',
    img: 'https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png',
  },
];




const AllCard = () => {
   const [open, setOpen] = useState(false);
   const [placement, setPlacement] = useState('left');


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = e => {
    setPlacement(e.target.value);
  };
  const imageData = [
    {
      src: 'https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png',
      title: 'Classic Eyeglasses',
      name: "Vincent Chase | Lenskart Air",
      price: '₹999',
    },
    {
      src:"https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png",
      title: 'Stylish Sunglasses',
      price: '₹1,499',
    },
    {
      
          src:"https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png",
          name: "Vincent Chase | Lenskart Air",
          
          title: 'Power Sunglasses',
          price: '₹1,799',
    },
  ];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  };
  const imageClick = () => {
    navigate("/image-store");
  };
  const HOFClick = () => {
    navigate("/Hof-store");
  };
  const HandleClick = () => {
    navigate("/Lens-store");
  };

  const [dotPosition, setDotPosition] = useState('top');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
  
    const handleTabClick = (index) => {
      setCurrentSlide(index);
      carouselRef.current.goTo(index, true);
    };
  return (
    <div>
         <Box style={{  display:"flex",justifyContent:"center" ,textAlign:"center", gap:"20px", marginTop:"10px"}} >
               <div style={{width:"120px" ,height:"50px" ,borderRadius:"12px",border:"1px solid black",boxShadow: "0px 2px 5px rgba(0,0,0,0.10)" }}> 
               <text>
                {/* <AiFillAppstore /> */}
                Buy at <br/> 
                  <span  style={{color:"blue"}} >Home</span></text>
               </div>
               <div style={{width:"120px" ,height:"50px" ,border:"1px solid black",borderRadius:"12px" ,boxShadow: "0px 2px 5px rgba(0,0,0,0.10)"}}> 
               <text>try at <br/> 
                  <span style={{color:"blue"}} >Home</span></text>
               </div>
               
               <div style={{width:"120px" ,height:"50px" ,border:"1px solid black",borderRadius:"12px" ,boxShadow: "0px 2px 5px rgba(0,0,0,0.10)"}}>
                 <text>Buy on <br/> 
                  <span  style={{color:"blue"}} >Home</span></text>
              </div>
           </Box>
        
            <Box style={{
          overflowX: "auto",
          display: "flex",
          gap: "20px",
          padding: "10px",
          scrollBehavior: "smooth",
          width: "520px",
          marginTop:"30px",
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
          </Box>
          <Box>
            <text style={{fontSize:"20px",marginLeft:"20px" , color:"blue ", marginTop:"20px", fontFamily:"sans-serif",fontWeight:"bold"}}> the EyeGlass Lens</text>
          </Box>
           <Box  
  style={{ 
    display: "flex", 
    width: "100%", 
    height: "100px",  // Changed 'Height' to lowercase 'height'
    // border: "1px solid black", 
    gap: "25px", 
    justifyContent:"center",
    alignItem:"center",
    // marginTop:"20px"
    
  }}
>
   
  <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
    
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      border: '2px solid black',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px',
      boxShadow:"inset 0 0 15px rgba(0, 0, 0, 0.3);"
     }}
  >
    <img
      src={item.src}
      alt={item.title}

      style={{ width: '100px', height: 'auto' }}
    />
    
    <div style={{marginLeft:"30px",marginBottom:"30px"}}>
      <div style={{ fontWeight: 'bold',fontSize:"20px" }}>{item.title} </div>
      <div>{item.price}</div>
      
    </div>
    <div style={{border:"1px solid black"}} >
      <FaChevronRight size={30} />
       </div> 
     </div>  
))} 

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
           </Box>
           <Box>
         <p 
        style={{
         fontSize: "20px",
        marginLeft: "20px",
        color: "blue",
        marginTop: "5px",
        fontFamily: "sans-serif",
        fontWeight: "bold"
    }}
  >
    The Eyeglass Lens
  </p>
</Box>
<Box  
  style={{ 
    display: "flex", 
    width: "100%", 
    height: "100px",  // Changed 'Height' to lowercase 'height'
    // border: "1px solid black", 
    gap: "25px", 
    justifyContent:"center",
    alignItem:"center",
    marginTop:"5px"

  }}
>
  <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
           </Box>
           <Box>
  <p 
    style={{
      fontSize: "20px",
      marginLeft: "20px",
      color: "blue",
      marginTop: "5px",
      fontFamily: "sans-serif",
      fontWeight: "bold"
    }}
  >
    The Eyeglass Lens
  </p>
</Box>

           <Box  
  style={{ 
    display: "flex", 
    width: "100%", 
    height: "100px",  // Changed 'Height' to lowercase 'height'
    // border: "1px solid black", 
    gap: "25px", 
    justifyContent:"center",
    alignItem:"center",
    // marginTop:"20px"

  }}
>
  <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
           </Box>
           <Box>
  <p 
    style={{
      fontSize: "20px",
      marginLeft: "20px",
      color: "blue",
      marginTop: "5px",
      fontFamily: "sans-serif",
      fontWeight: "bold"
    }}
  >
    The Eyeglass Lens
  </p>
</Box>

           <Box  
  style={{ 
    display: "flex", 
    width: "100%", 
    height: "100px",  // Changed 'Height' to lowercase 'height'
    // border: "1px solid black", 
    gap: "25px", 
    justifyContent:"center",
    alignItem:"center",
    // marginTop:"20px"

  }}
>
  <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
       <Button 
    type="text" 
    onClick={showDrawer} 
    style={{ 
      height: "100%", 
      padding: 0, // Remove default padding
      minWidth: 0 // Prevent extra width from Button component
    }}
  >
    <img
      src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
      alt="Eyeglasses"
      style={{ 
        height: "100%", 
        width: "auto", 
        objectFit: "cover",
        display: "block"
      }}
    />
  </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
     </div>
))}

       </Drawer>
           </Box>

           <Box>
  <p 
    style={{
      fontSize: "20px",
      marginLeft: "20px",
      color: "blue",
      marginTop: "20px",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      // border:"1px solid black"
    }}
  >
    The Eyeglass Lens
  </p>
</Box>
<Box style={{
          overflowX: "auto",
          display: "flex",
          gap: "20px",
          padding: "10px",
          scrollBehavior: "smooth",
          width: "520px",
          
        }}>
          <li style={{
            width: "250px",
            height:"250px",
            listStyleType: "none",
            objectFit: "cover",
             flex: "0 0 auto"
            
          }}>
             

            <Link to="/storePage"
            >
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
            <Link to="/2">
            <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt=""
             style={{
                width: "100%",
               height: "100%",
               objectFit: "cover",
               paddingTop: "-30px"
              
            }} 
             />
            </Link>
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
          </Box>
          <Box>
          <p 
          style={{
            fontSize: "20px",
            marginLeft: "20px",
            color: "blue",
            marginTop: "20px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            // border:"1px solid black"
          }}
        >
          Store Near By
        </p>
      </Box>
       <Box
       className={style.searchbar}
       w={{ base: "95%", sm: "70%" }}
       display={{ base: "block", md: "none" }}
       border="1px solid black"
       m="2"
       position="sticky"
       bottom="0"
       borderRadius="10"
       p="2"
       bg="white"
     >
       <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         gap={2}
       >
         {/* Left Icon */}
         <IoSearch size={25} />
 
         {/* Input field with onClick event */}
         <input
           type="text"
           placeholder="Enter the no"
           className={style.input}
           onClick={handleClick}  // Navigate on click
           style={{
             flexGrow: 1,
             margin: "0 10px",
             border: "none",
             outline: "none",
             fontSize: "16px",
             width: "100%",
             background: "transparent",
           }}
         />
       </Box>
     </Box>
     <Box>
  <p 
    style={{
      fontSize: "15px",
      marginLeft: "20px",
      color: "blue",
      marginTop: "20px",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      // border:"1px solid black"
    }}
  >
    store benefit
  </p>
</Box>
 <Box style={{ 
    display: "flex", 
    width: "100%", 
    height: "100px",  
    // border: "1px solid black", 
    gap: "25px", 
    justifyContent:"center",
    alignItem:"center",
    marginTop:"10px"

  }}>
     <div style={{height:"80px", width:"100px", border:"1px solid black",borderRadius:"10px",justifyContent:"center",
    textAlign:"center",  background: 'linear-gradient(to bottom, skyblue 50%, white 50%)',}}>
       <span>📦</span>
      <br/>
      <p style={{marginTop:"15px"}}>store</p>
     </div>
     <div style={{height:"80px", width:"100px", border:"1px solid black",borderRadius:"10px",justifyContent:"center",
    textAlign:"center",  background: 'linear-gradient(to bottom, skyblue 50%, white 50%)',}}>
       <span>📦</span>
      <br/>
      <p style={{marginTop:"15px"}}>store</p>
     </div>
     <div style={{height:"80px", width:"100px", border:"1px solid black",borderRadius:"10px",justifyContent:"center",
    textAlign:"center",  background: 'linear-gradient(to bottom, skyblue 50%, white 50%)',}}>
       <span>📦</span>
      <br/>
      <p style={{marginTop:"15px"}}>store</p>
     </div>
     <div style={{height:"80px", width:"100px", border:"1px solid black",borderRadius:"10px",justifyContent:"center",
    textAlign:"center",  background: 'linear-gradient(to bottom, skyblue 50%, white 50%)',}}>
       <span>📦</span>
      <br/>
       <p style={{marginTop:"15px"}}>store</p>
     </div>
     </Box>
     <span onClick={imageClick} >
      <img src="https://static5.lenskart.com/media/uploads/free-lens-home-16mar.png" alt="" />
     </span>
     <Box>
  <p 
    style={{
      fontSize: "15px",
      marginLeft: "20px",
      color: "black",
      marginTop: "20px",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      // border:"1px solid black"
    }}
  >
    Get personalized services
  </p>
</Box>
<Box style={{ 
      display: "flex", 
      width: "100%", 
      height: "200px",  
      // border: "1px solid black", 
      gap: "30px", 
      justifyContent: "center",
      alignItems: "center", 
      marginTop: "10px"
    }}>
      <div style={{
        height: "200px",
        width: "180px",
        border: "1px solid black",
        borderRadius: "10px",
        overflow: "hidden",
    }} onClick={HandleClick}
      >
        <img 
          src="https://static5.lenskart.com/media/uploads/Toddlers.gif" 
          alt="toddlers" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover" 
          }} 
        />
      </div>

      <div style={{
        height: "200px",
        width: "180px",
        border: "1px solid black",
        borderRadius: "10px",
        overflow: "hidden",
        }} onClick={HOFClick} >
        <img 
          src="https://static5.lenskart.com/media/uploads/Toddlers.gif" 
          alt="toddlers" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} 
        />
      </div>
    </Box>
    
     <Box  style={{marginTop:"20px"}}>
       <Carousel autoplay>
       <div 
        >
        <img src="https://static5.lenskart.com/media/uploads/free-lens-home-16mar.png" alt="" />
         </div>
    <div>
      <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" alt="" />
    </div>
    
    <div>
    <img src="https://static5.lenskart.com/media/uploads/free-lens-home-16mar.png" alt="" />
    </div>
      </Carousel>
     </Box>
     <div style={{width:"100%", height:"350px", backgroundColor:"skyblue" ,borderRadius:"10% 10%  10% 10%"  , marginTop:"10px"}}>
    <Box>
  <p 
    style={{
      fontSize: "20px",
      marginLeft: "10px",
      color: "blue",
      fontFamily: "Courser",
      fontWeight: "bold",
      // border:"1px solid black",
      padding:"20px"
    
    }}
  >style <span style={{backgroundColor:"blue" , color:"white"  ,borderRadius:"10%" ,padding:"10px"}}>button</span>
<br/>
  <span style={{color:"black"}}>the style discover by</span>
  </p>
  <Box style={{
  overflowX: "auto",
  display: "flex",
  gap: "20px",
  padding: "10px",
  scrollBehavior: "smooth",
  width: "100%",
  // border: "1px solid black"
}}>
  <Link to="/toddlers" style={{ textDecoration: "none" }}>
    <div style={{
      width: "100px",
      height: "100px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/juniors" style={{ textDecoration: "none" }}>
    <div style={{
      width: "80px",
      height: "80px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/toddlers" style={{ textDecoration: "none" }}>
    <div style={{
      width: "80px",
      height: "80px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/juniors" style={{ textDecoration: "none" }}>
    <div style={{
      width: "80px",
      height: "80px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>
</Box>
<Box style={{
  overflowX: "auto",
  display: "flex",
  gap: "20px",
  padding: "10px",
  scrollBehavior: "smooth",
  width: "100%",
  // border: "1px solid black"
}}>
  <Link to="/toddlers" style={{ textDecoration: "none" }}>
    <div style={{
      width: "100px",
      height: "100px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/juniors" style={{ textDecoration: "none" }}>
    <div style={{
      width: "100px",
      height: "100px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/toddlers" style={{ textDecoration: "none" }}>
    <div style={{
      width: "100px",
      height: "100px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/juniors" style={{ textDecoration: "none" }}>
    <div style={{
      width: "100px",
      height: "100px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>
</Box>
   </Box>  
   </div>
    <Box>
    <card class={style.ClassicCard} >
              <Link to="/1">
              <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" /></Link>
              <Link to="/1">
              <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" /></Link>
              <Link to="/1">
              <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" /></Link>
              <Link to="/1">
              <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" /></Link>
              <Link to="/1">
              <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" /></Link>
              <Link to="/1">
              <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" /></Link>
            </card>
    </Box>
    <Box>
  <p 
    style={{
      fontSize: "15px",
      marginLeft: "20px",
      color: "black",
      marginTop: "20px",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      // border:"1px solid black"
    }}
  >
    Get personalized services
  </p>
</Box>
<Box style={{
  overflowX: "auto",
  display: "flex",
  gap: "20px",
  padding: "10px",
  scrollBehavior: "smooth",
  width: "100%",
  // border: "1px solid black"
}}>
  <Link to="/toddlers" style={{ textDecoration: "none" }}>
    <div style={{
      width: "140px",
      height: "180px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/juniors" style={{ textDecoration: "none" }}>
    <div style={{
      width: "140px",
      height: "180px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/toddlers" style={{ textDecoration: "none" }}>
    <div style={{
      width: "140px",
      height: "180px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/juniors" style={{ textDecoration: "none" }}>
    <div style={{
      width: "140px",
      height: "180px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>
</Box>
<Box>
  <p 
    style={{
      fontSize: "15px",
      marginLeft: "20px",
      color: "black",
      marginTop: "20px",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      // border:"1px solid black"
    }}
  >
    Get personalized services
  </p>
</Box>
<Box style={{
  overflowX: "auto",
  display: "flex",
  gap: "20px",
  padding: "10px",
  scrollBehavior: "smooth",
  width: "100%",
  // border: "1px solid black"
}}>
  <Link to="/toddlers" style={{ textDecoration: "none" }}>
    <div style={{
      width: "140px",
      height: "140px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/juniors" style={{ textDecoration: "none" }}>
    <div style={{
      width: "140px",
      height: "140px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/toddlers" style={{ textDecoration: "none" }}>
    <div style={{
      width: "140px",
      height: "140px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>

  <Link to="/juniors" style={{ textDecoration: "none" }}>
    <div style={{
      width: "140px",
      height: "140px",
      flex: "0 0 auto",
      cursor: "pointer"
    }}>
      <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />
    </div>
  </Link>
</Box>

   <Box style={{backgroundColor:"skyblue ",weight:"100%",Height:"500px"}}>
   <Box>
  <p 
    style={{
      fontSize: "20px",
      marginLeft: "20px",
      color: "black",
      marginTop: "20px",
      fontFamily: "sans-serif",
      fontWeight: "bold", 
      padding:"20px"
      // border:"1px solid black"
    }}
  >Get personalized services
  </p>
</Box>
<div style={{ width: '100%' }}>
      {/* Scrollable Buttons */}
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          padding: '10px',
          gap: '10px',
        }}
      >
        {/* <Link to="./toddlers"> */}
        {images.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              padding: '8px 16px',
              minWidth: 'max-content',
              borderRadius: '20px',
              border: '1px solid #ccc',
              backgroundColor: currentSlide === index ? '#003366' : '#f0f0f0',
              color: currentSlide === index ? '#fff' : '#333',
              fontWeight: 'bold',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </button>
          
        ))}
        {/* </Link> */}
      </div>

      {/* Carousel */}
      <div style={{ marginTop: '20px' ,justifyContent:"center" }}>
        <Carousel
          ref={carouselRef}
          afterChange={(current) => setCurrentSlide(current)}
          autoplay
        >
          {images.map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '20px',
                marginLeft:"30px"
              }}
            >
              <Link to="./toddlers">
              <img
                src={item.img}
                alt={item.label}
                
              />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    
  </Box>
  <Box style={{backgroundColor:"skyblue ",weight:"100%",Height:"500px"}}>
   
  <div style={{ width: '100%' ,border:"1px solid black" ,marginTop:"20px"  }}>
      {/* Scrollable Buttons */}
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          padding: '10px',
          gap: '10px',
        }}
      >
        {/* <Link to="./toddlers"> */}
        {images.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              padding: '8px 16px',
              minWidth: 'max-content',
              borderRadius: '20px',
              border: '1px solid #ccc',
              backgroundColor: currentSlide === index ? '#003366' : '#f0f0f0',
              color: currentSlide === index ? '#fff' : '#333',
              fontWeight: 'bold',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </button>
        ))}
        {/* </Link> */}
      </div>

      {/* Carousel */}
      <div style={{ marginTop: '20px' ,justifyContent:"center" }}>
        <Carousel
          ref={carouselRef}
          afterChange={(current) => setCurrentSlide(current)}
          autoplay
        >
          {images.map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '20px',
                marginLeft:"30px"
              }}
            >
              <Link to="./SwapAault">
              <img
                src={item.img}
                alt={item.label}
                
              />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    
  </Box>
  <Box style={{backgroundColor:"skyblue ",weight:"100%",Height:"500px"}}>
   
   <div style={{ width: '100%' ,border:"1px solid black" ,marginTop:"20px"  }}>
       {/* Scrollable Buttons */}
       <div
         style={{
           display: 'flex',
           overflowX: 'auto',
           padding: '10px',
           gap: '10px',
         }}
       >
         {images.map((item, index) => (
           <button
             key={index}
             onClick={() => handleTabClick(index)}
             style={{
               padding: '8px 16px',
               minWidth: 'max-content',
               borderRadius: '20px',
               border: '1px solid #ccc',
               backgroundColor: currentSlide === index ? '#003366' : '#f0f0f0',
               color: currentSlide === index ? '#fff' : '#333',
               fontWeight: 'bold',
               cursor: 'pointer',
               whiteSpace: 'nowrap',
             }}
           >
             {item.label}
           </button>
         ))}
       </div>
 
       {/* Carousel */}
       <div style={{ marginTop: '20px' ,justifyContent:"center" }}>
         <Carousel
           ref={carouselRef}
           afterChange={(current) => setCurrentSlide(current)}
           autoplay
         >
           {images.map((item, index) => (
             <div
               key={index}
               style={{
                 textAlign: 'center',
                 padding: '20px',
                 marginLeft:"30px"
               }}
             >
               <Link to="./Creater">
               <img
                 src={item.img}
                 alt={item.label}
                 
               />
               </Link>
             </div>
           ))}
         </Carousel>
       </div>
     </div>
     
   </Box>
   <Box style={{backgroundColor:"skyblue ",weight:"100%",Height:"500px"}}>
   
   <div style={{ width: '100%' ,border:"1px solid black" ,marginTop:"20px"  }}>
       {/* Scrollable Buttons */}
       <div
         style={{
           display: 'flex',
           overflowX: 'auto',
           padding: '10px',
           gap: '10px',
         }}
       >
         {images.map((item, index) => (
           <button
             key={index}
             onClick={() => handleTabClick(index)}
             style={{
               padding: '8px 16px',
               minWidth: 'max-content',
               borderRadius: '20px',
               border: '1px solid #ccc',
               backgroundColor: currentSlide === index ? '#003366' : '#f0f0f0',
               color: currentSlide === index ? '#fff' : '#333',
               fontWeight: 'bold',
               cursor: 'pointer',
               whiteSpace: 'nowrap',
             }}
           >
             {item.label}
           </button>
         ))}
       </div>
 
       {/* Carousel */}
       <div style={{ marginTop: '20px' ,justifyContent:"center" }}>
         <Carousel
           ref={carouselRef}
           afterChange={(current) => setCurrentSlide(current)}
           autoplay
         >
           {images.map((item, index) => (
             <div
               key={index}
               style={{
                 textAlign: 'center',
                 padding: '20px',
                 marginLeft:"30px"
               }}
             > 
                <Link to="./toddlers">
               <img
                 src={item.img}
                 alt={item.label}
                 
               />
               </Link>
             </div>
           ))}
         </Carousel>
       </div>
     </div>
     
   </Box>
   <Box style={{backgroundColor:"skyblue ",weight:"100%",Height:"500px"}}>
   
   <div style={{ width: '100%' ,border:"1px solid black" ,marginTop:"20px"  }}>
       {/* Scrollable Buttons */}
       <div
         style={{
           display: 'flex',
           overflowX: 'auto',
           padding: '10px',
           gap: '10px',
         }}
       >
         {images.map((item, index) => (
           <button
             key={index}
             onClick={() => handleTabClick(index)}
             style={{
               padding: '8px 16px',
               minWidth: 'max-content',
               borderRadius: '20px',
               border: '1px solid #ccc',
               backgroundColor: currentSlide === index ? '#003366' : '#f0f0f0',
               color: currentSlide === index ? '#fff' : '#333',
               fontWeight: 'bold',
               cursor: 'pointer',
               whiteSpace: 'nowrap',
             }}
           >
             {item.label}
           </button>
         ))}
       </div>
 
       {/* Carousel */}
       <div style={{ marginTop: '20px' ,justifyContent:"center" }}>
         <Carousel
           ref={carouselRef}
           afterChange={(current) => setCurrentSlide(current)}
           autoplay
         >
           {images.map((item, index) => (
             <div
               key={index}
               style={{
                 textAlign: 'center',
                 padding: '20px',
                 marginLeft:"30px"
               }}
             >
              <Link to="./toddlers">
               <img
                 src={item.img}
                 alt={item.label}
                 
               />
               </Link>
             </div>
           ))}
         </Carousel>
       </div>
     </div>
     
   </Box>
   <Box style={{backgroundColor:"skyblue ",weight:"100%",Height:"500px"}}>
   
   <div style={{ width: '100%' ,border:"1px solid black" ,marginTop:"20px"  }}>
       {/* Scrollable Buttons */}
       <div
         style={{
           display: 'flex',
           overflowX: 'auto',
           padding: '10px',
           gap: '10px',
         }}
       >
         {images.map((item, index) => (
           <button
             key={index}
             onClick={() => handleTabClick(index)}
             style={{
               padding: '8px 16px',
               minWidth: 'max-content',
               borderRadius: '20px',
               border: '1px solid #ccc',
               backgroundColor: currentSlide === index ? '#003366' : '#f0f0f0',
               color: currentSlide === index ? '#fff' : '#333',
               fontWeight: 'bold',
               cursor: 'pointer',
               whiteSpace: 'nowrap',
             }}
           >
             {item.label}
           </button>
         ))}
       </div>
 
       {/* Carousel */}
       <div style={{ marginTop: '20px' ,justifyContent:"center" }}>
         <Carousel
           ref={carouselRef}
           afterChange={(current) => setCurrentSlide(current)}
           autoplay
         >
           {images.map((item, index) => (
             <div
               key={index}
               style={{
                 textAlign: 'center',
                 padding: '20px',
                 marginLeft:"30px"
               }}
             >
              <Link to="./toddlers">
               <img
                 src={item.img}
                 alt={item.label}
                 
               />
               </Link>
             </div>
           ))}
         </Carousel>
       </div>
     </div>
     
   </Box>
   <Box >
        <p 
        style={{
         fontSize: "20px",
        marginLeft: "20px",
        color: "blue",
        marginTop: "5px",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        
    }}
  >
    The Eyeglass Lens
  </p>
  <span>
    <img src="https://static1.lenskart.com/media/desktop/img/11-jan-25/c-x.png" />
  </span>
</Box>
   <Box>
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#ffffff",
      // border: "2px solid red",
      padding: "10px 0",
      position: "fixed",
      bottom: "0",
      width: "100%"
    }}>
      {/* Home */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#000066" }}>
        <span style={{ fontSize: "24px" }}>🏠</span>
        <span style={{ fontWeight: "bold", fontSize: "12px" }}>Home</span>
      </div>

      {/* Explore */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#cccccc" }}>
        <span style={{ fontSize: "24px" }}>🔺</span>
        <span style={{ fontSize: "12px" }}>Explore</span>
      </div>

      {/* AR Try on */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#008060",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        justifyContent: "center",
        color: "#cccccc",
        marginTop:"-10px",
        gap:"2px"
      }}>
        <p style={{ fontSize: "20px"  , marginTop:"20px"  }}>👓</p>
        <p style={{ fontSize: "10px", marginTop:"10px" }}>AR Try on</p>
      </div>

      {/* Eyecare */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#cccccc" }}>
        <span style={{ fontSize: "24px" }}>🌿</span>
        <span style={{ fontSize: "12px" }}>Eyecare</span>
      </div>

      {/* Orders */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#cccccc" }}>
        <span style={{ fontSize: "24px" }}>📝</span>
        <span style={{ fontSize: "12px" }}>Orders</span>
      </div>
    </div>
  </Box>

</div>
  )
}


export default AllCard