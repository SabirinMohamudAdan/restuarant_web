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
//           <h2 className="text-xl md:text-2xl text-[#da9360] italic">
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
//                hover:text-[#da9360] focus:outline-none border-b-2 border-transparent
//                 hover:border-[#da9360] transition"
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
//                 <div className="text-[#da9360] text-xl font-bold mb-4">{item.price}</div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-[#da9360] hover:bg-[#da9360] text-white py-2 px-6 rounded-full font-medium transition"
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


import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../image/m1.jpg";
import img2 from "../image/m2.jpg";
import img3 from "../image/m3.jpg";
import img4 from "../image/m4.jpg";
import img5 from "../image/m5.jpg";
import img6 from "../image/m6.jpg";

const MenuSection = () => {
  const menuItems = [
    {
      category: "MAINS",
      items: [
        {
          name: "Chicken Crispy Roll",
          description: "Crispy golden rolls filled with tender chicken",
          price: "$86",
          image: img1,
          popular: true
        },
        {
          name: "Roasted Chicken",
          description: "Free-range chicken with rosemary and garlic",
          price: "$55",
          image: img2,
          chefSpecial: true
        }
      ]
    },
    {
      category: "STARTERS",
      items: [
        {
          name: "Baked Crab Cheese",
          description: "Lump crab meat baked with three cheeses",
          price: "$89",
          image: img3,
          spicy: true
        },
        {
          name: "Cheese Shrimp Roll",
          description: "Crispy shrimp with melted mozzarella",
          price: "$42",
          image: img4
        }
      ]
    },
    {
      category: "DRINKS",
      items: [
        {
          name: "Crispy Squid",
          description: "Golden fried squid with garlic aioli",
          price: "$54",
          image: img5
        },
        {
          name: "Signature Cocktail",
          description: "Our award-winning house special",
          price: "$48",
          image: img6,
          premium: true
        }
      ]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 uppercase tracking-wider mb-2 font-serif">
            O U R  M E N U
          </h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-amber-600 mx-auto mb-4"
          />
          <h2 className="text-xl md:text-2xl text-amber-700 italic">
            Healthy & Tasty
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex rounded-full bg-amber-100 p-1">
            {menuItems.map((section, index) => (
              <button
                key={index}
                className="px-6 py-2 text-sm font-medium rounded-full transition-all
                hover:bg-amber-600 hover:text-white focus:outline-none"
              >
                {section.category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {menuItems.flatMap(section => section.items).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center"
            >
              {/* Circular Image with Floating Badge */}
              <div className="relative mb-8">
                <motion.div
                  className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl
                  hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Floating Badges */}
                {item.popular && (
                  <motion.div 
                    className="absolute -top-3 -right-3 bg-amber-600 text-white text-xs font-bold
                    px-3 py-1 rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    POPULAR
                  </motion.div>
                )}
                {item.chefSpecial && (
                  <motion.div 
                    className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold
                    px-3 py-1 rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    CHEF'S PICK
                  </motion.div>
                )}
              </div>
              
              {/* Food Info */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-amber-800 mb-4">{item.description}</p>
                <div className="text-amber-600 text-xl font-bold mb-6">{item.price}</div>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#b45309" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-600 text-white py-2 px-8 rounded-full font-medium
                  shadow-md hover:shadow-lg transition-all"
                >
                  Add to Order
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;