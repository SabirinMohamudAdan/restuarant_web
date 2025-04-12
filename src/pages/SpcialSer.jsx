import bgImage from "../image/bg3.jpg"; // Make sure to import your background image

const SpecialsCard = () => {
  const menuItems = [
    { 
      name: "Roasted Chicken", 
      price: "$55", 
      popular: true,
      image: "/images/chicken.jpg" // Add your image paths
    },
    { 
      name: "Baked Crab Cheese", 
      price: "$66", 
      spicy: true,
      image: "/images/crab.jpg"
    },
    { 
      name: "Foie Gras", 
      price: "$99", 
      premium: true,
      image: "/images/foie-gras.jpg"
    },
  ];

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white uppercase font-serif tracking-wider mb-2">
            Today's Special
          </h2>
          <p className="text-amber-200 italic text-xl">Fresh and delicious</p>
        </div>

        {/* Three Featured Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              {/* Food Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Food Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-xl font-bold text-amber-600">{item.price}</span>
                </div>
                
                {item.popular && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                    Popular
                  </span>
                )}
                {item.spicy && (
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mb-2">
                    Spicy
                  </span>
                )}
                
                <button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialsCard;