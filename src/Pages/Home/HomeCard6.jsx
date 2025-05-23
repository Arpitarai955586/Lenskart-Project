// import React from "react";
// import { Box, Image, Square, Link } from "@chakra-ui/react";
// import { Navigation, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// const HomeCard6 = ({ type, heading }) => {
//   return (
//     <Box
//       justifyContent="left"
//       w="85%"
//       m="auto"
//       mt="6"
//       cursor="pointer"
//       fontSize="22px"
//       pb="7"
//       fontWeight="400"
//       border="3px solid black"
//     >
//       {heading}
//       <hr />
//       <Box mt="1"  >
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           navigation
//           autoplay={{ delay: 4000 }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//               spaceBetween: 10
//             },
//             480: {
//               slidesPerView: 1,
//               spaceBetween: 10
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 15
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 15
//             },
//             1280: {
//               slidesPerView: 3,
//               spaceBetween: 30
//             }
//           }}
//         >
//           {type.map((i) => (
//             <Box key={i}>
//               <SwiperSlide  >
//                 <Link to={i.linked}>
//                   <Square m="auto">
//                     <Image
//                       src={`${i.img}`}
//                       alt={i.caption}
//                       boxSize="160px"
//                       w="80%"
//                       border="1px solid black"
//                     />
//                   </Square>
//                 </Link>
//               </SwiperSlide>
//             </Box>
//           ))}
//         </Swiper>
//       </Box>
//     </Box>
//   );
// };

// export default HomeCard6;
import React from "react";
import { Box, Image, Square, Link } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const HomeCard6 = ({ type, heading }) => {
  return (
    <Box
      justifyContent="left"
      w="85%"
      m="auto"
      mt="6"
      cursor="pointer"
      fontSize="22px"
      pb="7"
      fontWeight="400"
      // border="3px solid black"
    >
      {/* Custom CSS for Swiper navigation arrows */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            width: 20px;
            height: 20px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
            color: black; /* Optional: to match design */
          }
        `}
      </style>

      {heading}
      <hr />
      <Box mt="1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          {type.map((i) => (
            <Box key={i}>
              <SwiperSlide>
                <Link to={i.linked}>
                  <Square m="auto">
                    <Image
                      src={`${i.img}`}
                      alt={i.caption}
                      boxSize="160px"
                      w="80%"
                      
                    />
                  </Square>
                </Link>
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HomeCard6;
