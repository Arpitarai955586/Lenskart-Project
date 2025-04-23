import { border ,Box } from '@chakra-ui/react'
import React, {useState} from 'react'
import style from './All.module.css'
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom"
import { Button, Drawer, Radio, Space } from 'antd';
import { useNavigate } from "react-router-dom";
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
      price: '₹999',
    },
    {
      src:"https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png",
      title: 'Stylish Sunglasses',
      price: '₹1,499',
    },
    {
      
          src:"https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png",
          
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
    navigate("/hof-store");
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
             <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif "alt="" style={{
                 width: "100%",
                 height: "100%",
               objectFit: "cover",
              
            }} />
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
             <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif "alt="" style={{
                 width: "100%",
                 height: "100%",
               objectFit: "cover",
              
            }} />
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
    <div style={{width:"100%", height:"300px", backgroundColor:"skyblue" ,borderRadius:"10% 10%  10% 10%"  , marginTop:"10px"}}>
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
    Recommanded for you
    <br />
    <span style={{color:"black" ,fontSize:"15px"}}>the best Recommanded for you</span>
  </p>
   </Box>  
    </div>
      </div>
  )
}

export default AllCard