// import React, { useState, useEffect } from "react";
// import shirt from "../../src/assets/shirt.png";
// import swatshirt from "../../src/assets/Swatshirts.jpg";
// import CategoryPhoneCase from "../../src/assets/Category-Phone-Case.jpg";
// import CategoryOrnament from "../../src/assets/Category-Ornament.jpg";
// import CategoryCandle from "../../src/assets/Category-Candle.jpg";
// import lion from "../../src/assets/lion.png";
// import urenough from "../../src/assets/urenough.png";
// import ornadesign from "../../src/assets/ornadesign.png";
// import mountain from "../../src/assets/mountain.png";
// import svglogo from "../../src/assets/svglogo.svg";
// import svglogophone from "../../src/assets/logophonecase.svg";
// import candledesign from "../../src/assets/candledesign.png";

// const HeroAnimation = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Track the current image index

//   // List of product images with their designs
//   const products = [
//     {
//       image: CategoryPhoneCase,
//       design: svglogophone,
//       alt: "Phone Case",
//       designAlt: "Phone Case Design",
//       width: "w-[6rem]",
//       top: "top-[75%]",
//       left: "left-1/2",
//     },
//     {
//       image: CategoryCandle,
//       design: candledesign,
//       alt: "Candle",
//       designAlt: "Candle Design",
//       width: "w-[17rem]",
//       top: "top-[60%]",
//       left: "left-[43%]",
//     },
//     {
//       image: swatshirt,
//       design: mountain,
//       alt: "Sweatshirt",
//       designAlt: "Mountain Design",
//       width: "w-[9rem]",
//       top: "top-1/2",
//       left: "left-1/2",
//     },
//     {
//       image: CategoryOrnament,
//       design: ornadesign,
//       alt: "Ornament",
//       designAlt: "Ornament Design",
//       width: "w-[11rem]",
//       top: "top-1/2",
//       left: "left-1/2",
//     },
//     {
//       image: shirt,
//       design: lion,
//       alt: "Shirt",
//       designAlt: "Lion Design",
//       width: "w-[15rem]",
//       top: "top-1/2",
//       left: "left-1/2",
//     },
//   ];

//   // Change the image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === products.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // 3 seconds interval

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [products.length]);

//   return (
//     <div className="relative flex justify-center items-center w-full h-full">
//       {products.map((product, index) => {
//         const { image, design, alt, designAlt, left, top, width } = product;
//         return (
//           <div
//             key={index}
//             className={`absolute transition-opacity duration-1000 ease-in-out ${
//               activeIndex === index ? "opacity-100" : "opacity-0"
//             } flex justify-center items-center`}
//           >
//             <div className="relative">
//               {/* Main Product Image */}
//               <img src={image} alt={alt} className="w-[40rem] h-[40rem]" />
//               {/* Design Overlay */}
//               <div
//                 className={`absolute ${top} ${left} transform -translate-x-1/2 -translate-y-1/2`}
//               >
//                 <img src={design} alt={designAlt} className={`${width}`} />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default HeroAnimation;


import React, { useState, useEffect } from "react";
import shirt from "../../src/assets/shirt.png";
import swatshirt from "../../src/assets/Swatshirts.jpg";
import CategoryPhoneCase from "../../src/assets/Category-Phone-Case.jpg";
import CategoryOrnament from "../../src/assets/Category-Ornament.jpg";
import CategoryCandle from "../../src/assets/Category-Candle.jpg";
import lion from "../../src/assets/lion.png";
import urenough from "../../src/assets/urenough.png";
import ornadesign from "../../src/assets/ornadesign.png";
import mountain from "../../src/assets/mountain.png";
import svglogo from "../../src/assets/svglogo.svg";
import svglogophone from "../../src/assets/logophonecase.svg";
import candledesign from "../../src/assets/candledesign.png";

const HeroAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the current image index

  // List of product images with their designs
  const products = [
    {
      image: CategoryPhoneCase,
      design: svglogophone,
      alt: "Phone Case",
      designAlt: "Phone Case Design",
      width: "w-[7rem]",
      top: "top-[55%]",
      left: "left-[37%]",
    },
    {
      image: CategoryCandle,
      design: candledesign,
      alt: "Candle",
      designAlt: "Candle Design",
      width: "w-[17rem]",
      top: "top-[38%]",
      left: "left-[21%]",
    },
    {
      image: swatshirt,
      design: mountain,
      alt: "Sweatshirt",
      designAlt: "Mountain Design",
      width: "w-[9rem]",
      top: "top-[32%]",
      left: "left-[39%]",
    },
    {
      image: CategoryOrnament,
      design: ornadesign,
      alt: "Ornament",
      designAlt: "Ornament Design",
      width: "w-[15rem]",
      top: "top-[32%]",
      left: "left-[31%]",
    },
    {
      image: shirt,
      design: lion,
      alt: "Shirt",
      designAlt: "Lion Design",
      width: "w-[15rem]",
      top: "top-[30%]",
      left: "left-[32%]",
    },
  ];

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [products.length]);

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      {products.map((product, index) => {
        const { image, design, alt, designAlt, left, top, width } = product;
        return (
          <div
            key={index}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            } flex justify-center items-center`}
          >
            <div className="relative">
              {/* Main Product Image */}
              <img src={image} alt={alt} className="w-[40rem] h-[40rem]" />
              {/* Design Overlay with scaling animation */}
              <div
                className={`absolute ${top} ${left} ${
                  activeIndex === index
                    ? "animate-scale-up" // Scaling effect when active
                    : "scale-0"          // Start from scale-0 when not active
                }`}
              >
                <img src={design} alt={designAlt} className={`${width}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroAnimation;
