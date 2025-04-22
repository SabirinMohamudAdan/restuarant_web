// import React from 'react';
// import { motion } from 'framer-motion';
// import img from "../image/m1.jpg";
// import img1 from "../image/m2.jpg";
// import img2 from "../image/m3.jpg";
// import img3 from "../image/m4.jpg";
// import img4 from "../image/m4.jpg";
// import img5 from "../image/m5.jpg";
// import img6 from "../image/m6.jpg";


// const MenuSection = () => {
//   const menuItems = [
//     {
//       category: "MAINS",
//       items: [
//         {
//           name: "Chicken Crispy Roll",
//           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           price: "$86"
//         },
//         {
//           name: "Roasted Chicken",
//           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           price: "$55"
//         }
//       ]
//     },
//     {
//       category: "STARTER",
//       items: [
//         {
//           name: "Baked Crab Cheese",
//           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           price: "$89"
//         },
//         {
//           name: "Cheese Shrimp Roll",
//           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           price: "$42"
//         }
//       ]
//     },
//     {
//       category: "DRINKS",
//       items: [
//         {
//           name: "Crispy Squid",
//           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           price: "$54"
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider mb-2">
//             O U R M E N U
//           </h1>
//           <h2 className="text-xl md:text-2xl text-amber-600 italic">
//             Healthy & Tasty
//           </h2>
//         </motion.div>

//         {/* Category Tabs */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="flex justify-center mb-12 border-b border-gray-200"
//         >
//           {menuItems.map((section, index) => (
//             <button
//               key={index}
//               className="px-6 py-3 text-lg font-medium text-gray-700 hover:text-amber-600 focus:outline-none border-b-2 border-transparent hover:border-amber-500 transition"
//             >
//               {section.category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Menu Items */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {menuItems.flatMap(section => section.items).map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index, duration: 0.5 }}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition"
//             >
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
//                   <span className="text-xl font-bold text-amber-600">{item.price}</span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{item.description}</p>
//                 <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md font-medium transition">
//                   Add to Order
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuSection;

// import React from 'react';
// import { motion } from 'framer-motion';
// import img1 from "../image/m1.jpg";
// import img2 from "../image/m2.jpg";
// import img3 from "../image/m3.jpg";
// import img4 from "../image/m4.jpg";
// import img5 from "../image/m5.jpg";
// import img6 from "../image/m6.jpg";

// const MenuSection = () => {
//   const menuItems = [
//     {
//       category: "MAINS",
//       items: [
//         {
//           name: "Chicken Crispy Roll",
//           description: "Crispy fried chicken rolls with special dipping sauce",
//           price: "$86",
//           image: img1
//         },
//         {
//           name: "Roasted Chicken",
//           description: "Herb-roasted free-range chicken with vegetables",
//           price: "$55",
//           image: img2
//         }
//       ]
//     },
//     {
//       category: "STARTER",
//       items: [
//         {
//           name: "Baked Crab Cheese",
//           description: "Lump crab meat baked with three cheeses",
//           price: "$89",
//           image: img3
//         },
//         {
//           name: "Cheese Shrimp Roll",
//           description: "Crispy shrimp rolls with melted cheese",
//           price: "$42",
//           image: img4
//         }
//       ]
//     },
//     {
//       category: "DRINKS",
//       items: [
//         {
//           name: "Crispy Squid",
//           description: "Golden fried squid with garlic aioli",
//           price: "$54",
//           image: img5
//         },
//         {
//           name: "Signature Cocktail",
//           description: "Our special house cocktail blend",
//           price: "$48",
//           image: img6
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider mb-2">
//             O U R M E N U
//           </h1>
//           <h2 className="text-xl md:text-2xl text-amber-600 italic">
//             Healthy & Tasty
//           </h2>
//         </motion.div>

//         {/* Category Tabs */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="flex justify-center mb-12 border-b border-gray-200"
//         >
//           {menuItems.map((section, index) => (
//             <button
//               key={index}
//               className="px-6 py-3 text-lg font-medium text-gray-700 hover:text-amber-600 focus:outline-none border-b-2 border-transparent hover:border-amber-500 transition"
//             >
//               {section.category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Menu Items */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {menuItems.flatMap(section => section.items).map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index, duration: 0.5 }}
//               whileHover={{ y: -5, scale: 1.02 }}
//               className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
//             >
//               {/* Food Image with Hover Effect */}
//               <div className="h-48 overflow-hidden relative">
//                 <motion.img 
//                   src={item.image} 
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                   initial={{ scale: 1 }}
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.5 }}
//                 />
//               </div>
              
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
//                   <span className="text-xl font-bold text-amber-600">{item.price}</span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{item.description}</p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md font-medium transition"
//                 >
//                   Add to Order
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuSection;

// import React from 'react';
// import { motion } from 'framer-motion';
// import img1 from "../image/m1.jpg";
// import img2 from "../image/m2.jpg";
// import img3 from "../image/m3.jpg";
// import img4 from "../image/m4.jpg";
// import img5 from "../image/m5.jpg";
// import img6 from "../image/m6.jpg";

// const MenuSection = () => {
//   const menuItems = [
//     {
//       category: "MAINS",
//       items: [
//         {
//           name: "Chicken Crispy Roll",
//           description: "Crispy fried chicken rolls with special dipping sauce",
//           price: "$86",
//           image: img1
//         },
//         {
//           name: "Roasted Chicken",
//           description: "Herb-roasted free-range chicken with vegetables",
//           price: "$55",
//           image: img2
//         }
//       ]
//     },
//     {
//       category: "STARTER",
//       items: [
//         {
//           name: "Baked Crab Cheese",
//           description: "Lump crab meat baked with three cheeses",
//           price: "$89",
//           image: img3
//         },
//         {
//           name: "Cheese Shrimp Roll",
//           description: "Crispy shrimp rolls with melted cheese",
//           price: "$42",
//           image: img4
//         }
//       ]
//     },
//     {
//       category: "DRINKS",
//       items: [
//         {
//           name: "Crispy Squid",
//           description: "Golden fried squid with garlic aioli",
//           price: "$54",
//           image: img5
//         },
//         {
//           name: "Signature Cocktail",
//           description: "Our special house cocktail blend",
//           price: "$48",
//           image: img6
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black w-full">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
//             O U R M E N U
//           </h1>
//           <h2 className="text-xl md:text-2xl text-amber-500 italic">
//             Healthy & Tasty
//           </h2>
//         </motion.div>

//         {/* Category Tabs */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="flex justify-center mb-12 border-b border-gray-200"
//         >
//           {menuItems.map((section, index) => (
//             <button
//               key={index}
//               className="px-6 py-3 text-lg font-medium text-white
//                hover:text-amber-500 focus:outline-none border-b-2 border-transparent
//                 hover:border-amber-500 transition"
//             >
//               {section.category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Menu Items */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {menuItems.flatMap(section => section.items).map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index, duration: 0.5 }}
//               whileHover={{ y: -5 }}
//               className="flex flex-col items-center text-center"
//             >
//               {/* Circular Image Container */}
//               <motion.div 
//                 className="w-48 h-48 rounded-full overflow-hidden border-4
//                  border-amber-100 shadow-lg mb-6"
//                 whileHover={{ rotate: 5, scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <img 
//                   src={item.image} 
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
              
//               {/* Food Info */}
//               <div className="max-w-xs">
//                 <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
//                 <p className="text-white mb-3">{item.description}</p>
//                 <div className="text-amber-500 text-xl font-bold mb-4">{item.price}</div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-amber-500 hover:bg-amber-500 text-white py-2 px-6 rounded-full font-medium transition"
//                 >
//                   Add to Order
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuSection;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import img1 from "../image/m1.jpg";
// import img2 from "../image/m2.jpg";
// import img3 from "../image/m3.jpg";
// import img4 from "../image/m4.jpg";
// import img5 from "../image/m5.jpg";
// import img6 from "../image/m6.jpg";
// import img7 from "../image/m4.jpg"; // Additional drink images
// import img8 from "../image/m3.jpg";
// import img9 from "../image/m2.jpg";

// const MenuSection = () => {
//   const [activeCategory, setActiveCategory] = useState("MAINS");
//   const [showMoreDrinks, setShowMoreDrinks] = useState(false);

//   const menuItems = [
//     {
//       category: "MAINS",
//       items: [
//         {
//           name: "Chicken Crispy Roll",
//           description: "Crispy fried chicken rolls with special dipping sauce",
//           price: "$86",
//           image: img1
//         },
//         {
//           name: "Roasted Chicken",
//           description: "Herb-roasted free-range chicken with vegetables",
//           price: "$55",
//           image: img2
//         }
//       ]
//     },
//     {
//       category: "STARTER",
//       items: [
//         {
//           name: "Baked Crab Cheese",
//           description: "Lump crab meat baked with three cheeses",
//           price: "$89",
//           image: img3
//         },
//         {
//           name: "Cheese Shrimp Roll",
//           description: "Crispy shrimp rolls with melted cheese",
//           price: "$42",
//           image: img4
//         }
//       ]
//     },
//     {
//       category: "DRINKS",
//       items: [
//         {
//           name: "Signature Cocktail",
//           description: "Our special house cocktail blend",
//           price: "$48",
//           image: img6
//         },
//         {
//           name: "Classic Mojito",
//           description: "Refreshing mint lime cocktail",
//           price: "$42",
//           image: img7
//         },
//         ...(showMoreDrinks ? [
//           {
//             name: "Tropical Sunrise",
//             description: "Vibrant layered fruit cocktail",
//             price: "$52",
//             image: img8
//           },
//           {
//             name: "Whiskey Sour",
//             description: "Classic whiskey with citrus twist",
//             price: "$58",
//             image: img9
//           },
//           {
//             name: "Crispy Squid",
//             description: "Golden fried squid with garlic aioli",
//             price: "$54",
//             image: img5
//           }
//         ] : [])
//       ]
//     }
//   ];

//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//     if (category === "DRINKS") {
//       setShowMoreDrinks(true);
//     } else {
//       setShowMoreDrinks(false);
//     }
//   };

//   const currentItems = menuItems.find(section => section.category === activeCategory)?.items || [];

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black w-full">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
//             O U R M E N U
//           </h1>
//           <h2 className="text-xl md:text-2xl text-amber-500 italic">
//             Healthy & Tasty
//           </h2>
//         </motion.div>

//         {/* Category Tabs */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="flex justify-center mb-12 border-b border-gray-700"
//         >
//           {menuItems.map((section, index) => (
//             <button
//               key={index}
//               onClick={() => handleCategoryClick(section.category)}
//               className={`px-6 py-3 text-lg font-medium transition
//                 ${activeCategory === section.category 
//                   ? 'text-amber-500 border-b-2 border-amber-500' 
//                   : 'text-white hover:text-amber-400'}`}
//             >
//               {section.category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Menu Items */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {currentItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index, duration: 0.5 }}
//               whileHover={{ y: -5 }}
//               className="flex flex-col items-center text-center"
//             >
//               {/* Circular Image Container */}
//               <motion.div 
//                 className="w-48 h-48 rounded-full overflow-hidden border-4
//                  border-amber-100 shadow-lg mb-6"
//                 whileHover={{ rotate: 5, scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <img 
//                   src={item.image} 
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
              
//               {/* Food Info */}
//               <div className="max-w-xs">
//                 <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
//                 <p className="text-gray-300 mb-3">{item.description}</p>
//                 <div className="text-amber-500 text-xl font-bold mb-4">{item.price}</div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full font-medium transition"
//                 >
//                   Add to Order
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Show More Button (only for drinks) */}
//         {activeCategory === "DRINKS" && !showMoreDrinks && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex justify-center mt-8"
//           >
//             <motion.button
//               onClick={() => setShowMoreDrinks(true)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-transparent border-2 border-amber-500 text-amber-500 py-2 px-8 rounded-full font-medium hover:bg-amber-500 hover:text-white transition"
//             >
//               View More Drinks
//             </motion.button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MenuSection;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from "../image/m1.jpg";
import img2 from "../image/m2.jpg";
import img3 from "../image/m3.jpg";
import img4 from "../image/m4.jpg";
import img5 from "../image/m5.jpg";
import img6 from "../image/d5.jpg";
import img7 from "../image/d3.jpg"; // Additional drink images
import img8 from "../image/m3.jpg";

import img9 from "../image/m2.jpg";
import img10 from "../image/d8.jpg";
import img11 from "../image/d10.jpg";
import img12 from "../image/sr1.jpg";
import img13 from "../image/sr2.png";
import img14 from "../image/cup1.jpg";
import img15 from "../image/cup8.jpg";
import img16 from "../image/cup5.jpg";
import img17 from "../image/cup3.jpg";
import img18 from "../image/cup10.jpg";
import img19 from "../image/cup2.jpg";
import img20 from "../image/cup4.jpg";

import img21 from "../image/pe1.jpg"
import img22 from "../image/pe5.jpg"
import img23 from "../image/pe3.jpg"
import img24 from "../image/brg2.jpg"
import img25 from "../image/ch1.jpg"
const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("MAINS");
  const [showMoreDrinks, setShowMoreDrinks] = useState(false);

  const menuItems = [
    {
      category: "MAINS",
      items: [
        {
          name: "Chicken Crispy Roll",
          description: "Crispy fried chicken rolls with special dipping sauce",
          price: "$86",
          image: img1
        },
        {
          name: "Roasted Chicken",
          description: "Herb-roasted free-range chicken with vegetables",
          price: "$55",
          image: img2
        }
      ]
    },
    {
      category: "STARTER",
      items: [
        {
          name: "Baked Crab Cheese",
          description: "Lump crab meat baked with three cheeses",
          price: "$89",
          image: img3
        },
        {
          name: "Baked Crab Cheese",
          description: "Lump crab meat baked with three cheeses",
          price: "$89",
          image: img12
        },
        {
          name: "Cheese Shrimp Roll",
          description: "Crispy shrimp rolls with melted cheese",
          price: "$42",
          image: img4
        },
        {
          name: "Fish burger with cheese",
          description: "Crispy shrimp rolls with melted cheese",
          price: "$42",
          image: img13
        }
      ]
    },



    {
      category: "CHICKEN",
      items: [
        {
          name: "Burger",
          description: "burger with chicken ",
          price: "$20",
          image: img24
        },
        {
          name: " Chicken",
          description: "chicken  with delicious test",
          price: "$25",
          image: img25
        },
        {
          name: "Peaza ",
          description: " peaza with chicken  ",
          price: "$15",
          image: img21
        },
        {
          name: "Peaza ",
          description: " peaza with chicken  ",
          price: "$20",
          image: img22
        },
        {
          name: "Peaza ",
          description: " peaza with chicken  ",
          price: "$30",
          image: img23
        },
        {
          name: "Peaza ",
          description: " peaza with chicken  ",
          price: "$15",
          image: img22
        },
        {
          name: "Coffee",
          description: " Cool Coffee   with nice",
          price: "$12",
          image: img17
        }
      ]
    },

    {
      category: "COFFEE",
      items: [
        {
          name: "Cool Coffee",
          description: "Cofee  chocolate  with nice",
          price: "$9",
          image: img14
        },
        {
          name: " Chocolate Coffee",
          description: "Cofee  chocolate  with nice",
          price: "$5",
          image: img20
        },
        {
          name: "Coffee ",
          description: " Hot Coffee  ",
          price: "$9",
          image: img18
        },
        {
          name: "Coffee",
          description: "Cofee  chocolate  with nice",
          price: "$10",
          image: img19
        },
        {
          name: "Coffee",
          description: "Coffee  chocolate with hot",
          price: "$7",
          image: img15
        },
        {
          name: "Chocolate Coffe",
          description: "Coffee  chocolate  with nice",
          price: "$8",
          image: img16
        },
        {
          name: "Coffee",
          description: " Cool Coffee   with nice",
          price: "$12",
          image: img17
        }
      ]
    },
    {
      category: "DRINKS",
      items: [
        {
          name: "Leomon",
          description: "Our special house cocktail blend",
          price: "$48",
          image: img6
        },
        {
          name: "Leomon Cocktail",
          description: "Our special house cocktail blend",
          price: "$48",
          image: img10
        },

        {
          name: "Classic Chocolate",
          description: "Refreshing mint lime cocktail",
          price: "$42",
          image: img7
        },
        {
          name: "Classic Chocolate",
          description: "Refreshing mint lime cocktail",
          price: "$42",
          image: img11
        },
        ...(showMoreDrinks ? [
          {
            name: "Tropical Sunrise",
            description: "Vibrant layered fruit cocktail",
            price: "$52",
            image: img8
          },
          {
            name: "Whiskey Sour",
            description: "Classic whiskey with citrus twist",
            price: "$58",
            image: img9
          },
          {
            name: "Crispy Squid",
            description: "Golden fried squid with garlic aioli",
            price: "$54",
            image: img5
          }
        ] : [])
      ]
    }
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "DRINKS") {
      setShowMoreDrinks(false); // Reset to show only basic drinks when category changes
    }
  };

  const showAllItems = activeCategory === "MAINS";
  const currentItems = showAllItems 
    ? menuItems.flatMap(section => section.items)
    : menuItems.find(section => section.category === activeCategory)?.items || [];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
            O U R M E N U
          </h1>
          <h2 className="text-xl md:text-2xl text-amber-500 italic">
            Healthy & Tasty
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-12 border-b border-gray-700"
        >
          <button
            onClick={() => setActiveCategory("MAINS")}
            className={`px-2 py-3 text-lg font-medium transition
              ${activeCategory === "MAINS" 
                ? 'text-amber-500 border-b-2 border-amber-500' 
                : 'text-white hover:text-amber-400'}`}
          >
            
          </button>
          {menuItems.map((section, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(section.category)}
              className={`px-6 py-3 text-lg font-medium transition
                ${activeCategory === section.category 
                  ? 'text-amber-500 border-b-2 border-amber-500' 
                  : 'text-white hover:text-amber-400'}`}
            >
              {section.category}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {currentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Image Container */}
              <motion.div 
                className="w-48 h-48 rounded-full overflow-hidden border-4
                 border-amber-100 shadow-lg mb-6"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Food Info */}
              <div className="max-w-xs">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-300 mb-3">{item.description}</p>
                <div className="text-amber-500 text-xl font-bold mb-4">{item.price}</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full font-medium transition"
                >
                  Add to Order
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button (only for drinks) */}
        {activeCategory === "DRINKS" && !showMoreDrinks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              onClick={() => setShowMoreDrinks(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-amber-500 text-amber-500 py-2 px-8 rounded-full font-medium hover:bg-amber-500 hover:text-white transition"
            >
              View More Drinks
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MenuSection;