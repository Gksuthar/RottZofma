export const homeSlides = [
    {
      id: 1,
      image: 'https://b.zmtcdn.com/web_assets/81f3ff9a4e825000288117749041b9c51563205247.png',
      title: 'Discover the best food & drinks',
      description: 'The best restaurants, cafes, and bars in your city',
      badge: 'ZOMATO SPECIAL',
      buttonText: 'See Restaurants'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600',
      title: 'Fresh Pizza at 50% Off',
      description: 'Order from the top-rated pizzerias near you',
      badge: 'FLASH SALE',
      buttonText: 'Grab Deal'
    }
  ];

  // Helo 

 export const categories = [
    { id: 'organic', label: 'Organic Veg', icon: '🥦' },
    { id: 'spices', label: 'Pure Spices', icon: '🌶️' },
    { id: 'dairy', label: 'Farm Dairy', icon: '🥛' },
    { id: 'fruits', label: 'Fresh Fruits', icon: '🍎' },
    { id: 'grains', label: 'Whole Grains', icon: '🌾' },
  ];

  export const products = [
  // --- ORGANIC & VEG BOWL ---
  {
    id: 1,
    name: "Organic Buddha Bowl",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    rating: 4.5,
    time: "25-30 min",
    price: 350,
    discountPrice: 180,
    category: "Healthy, Salad, Organic",
    tag: "BEST SELLER"
  },
  {
    id: 2,
    name: "Quinoa Avocado Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    rating: 4.2,
    time: "20-25 min",
    price: 420,
    discountPrice: 299,
    category: "Organic, Vegan",
    tag: "MUST TRY"
  },
  {
    id: 3,
    name: "Roasted Pumpkin Soup",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800",
    rating: 4.8,
    time: "30-35 min",
    price: 250,
    discountPrice: 199,
    category: "Soups, Healthy",
    tag: "TREATING"
  },

  // --- PIZZA & FAST FOOD ---
  {
    id: 4,
    name: "Farmhouse Fresh Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    rating: 4.6,
    time: "35-40 min",
    price: 599,
    discountPrice: 449,
    category: "Italian, Pizza",
    tag: "50% OFF"
  },
  {
    id: 5,
    name: "Wild Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800",
    rating: 4.4,
    time: "40-45 min",
    price: 480,
    category: "Italian, Gourmet",
    tag: ""
  },
  {
    id: 6,
    name: "Classic Cheese Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    rating: 4.3,
    time: "15-20 min",
    price: 299,
    discountPrice: 149,
    category: "Burgers, Fast Food",
    tag: "BOGO"
  },

  // --- INDIAN MAIN COURSE ---
  {
    id: 7,
    name: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    rating: 4.7,
    time: "30-35 min",
    price: 380,
    discountPrice: 320,
    category: "North Indian, Main",
    tag: "CHEF'S PICK"
  },
  {
    id: 8,
    name: "Dal Tadka (Desi Ghee)",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
    rating: 4.5,
    time: "25-30 min",
    price: 240,
    category: "North Indian, Home Style",
    tag: ""
  },
  {
    id: 9,
    name: "Hyderabadi Veg Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=800",
    rating: 4.9,
    time: "45-50 min",
    price: 450,
    discountPrice: 399,
    category: "Biryani, Indian",
    tag: "LEGENDARY"
  },

  // --- DESSERTS & SWEETS ---
  {
    id: 10,
    name: "Belgian Chocolate Waffle",
    image: "https://images.unsplash.com/photo-1585854467758-e33bc584824b?w=800",
    rating: 4.6,
    time: "20-25 min",
    price: 280,
    category: "Desserts, Waffles",
    tag: "SWEET TOOTH"
  },
  {
    id: 11,
    name: "Fresh Mango Cheesecake",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800",
    rating: 4.8,
    time: "15-20 min",
    price: 320,
    discountPrice: 280,
    category: "Cakes, Desserts",
    tag: "SEASONAL"
  },
  {
    id: 12,
    name: "Gulab Jamun (2 Pcs)",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=800",
    rating: 4.7,
    time: "10-15 min",
    price: 120,
    category: "Indian Sweets",
    tag: ""
  },

  // --- ORIENTAL & ASIAN ---
  {
    id: 13,
    name: "Dragon Sushi Roll",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
    rating: 4.4,
    time: "35-40 min",
    price: 650,
    category: "Japanese, Sushi",
    tag: "PREMIUM"
  },
  {
    id: 14,
    name: "Thai Green Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
    rating: 4.5,
    time: "30-35 min",
    price: 499,
    discountPrice: 420,
    category: "Thai, Main",
    tag: "SPICY"
  },
  {
    id: 15,
    name: "Hakka Noodles",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
    rating: 4.1,
    time: "20-25 min",
    price: 220,
    category: "Chinese, Street Food",
    tag: ""
  },

  // --- BEVERAGES ---
  {
    id: 16,
    name: "Cold Brew Coffee",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800",
    rating: 4.6,
    time: "10-15 min",
    price: 240,
    category: "Beverages, Coffee",
    tag: "REFRESHING"
  },
  {
    id: 17,
    name: "Fresh Watermelon Juice",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=800",
    rating: 4.3,
    time: "10-15 min",
    price: 150,
    category: "Juices, Healthy",
    tag: ""
  },
  {
    id: 18,
    name: "Classic Masala Chai",
    image: "https://images.unsplash.com/photo-1594631252845-29fc458695d7?w=800",
    rating: 4.9,
    time: "5-10 min",
    price: 80,
    category: "Beverages, Tea",
    tag: "LOCAL FAVORITE"
  },

  // --- HEALTH & FITNESS ---
  {
    id: 19,
    name: "Grilled Tofu Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    rating: 4.4,
    time: "25-30 min",
    price: 399,
    category: "High Protein, Vegan",
    tag: "GYM DIET"
  },
  {
    id: 20,
    name: "Fruit & Nut Oatmeal",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800",
    rating: 4.2,
    time: "15-20 min",
    price: 199,
    category: "Breakfast, Healthy",
    tag: ""
  },
  {
    id: 21,
    name: "Greek Yogurt Parfait",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
    rating: 4.5,
    time: "10-15 min",
    price: 250,
    category: "Snacks, Healthy",
    tag: ""
  },

  // --- SNACKS ---
  {
    id: 22,
    name: "Paneer Tikka (6 Pcs)",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
    rating: 4.7,
    time: "20-25 min",
    price: 320,
    discountPrice: 260,
    category: "Starters, Indian",
    tag: "PARTY PACK"
  },
  {
    id: 23,
    name: "French Fries XXL",
    image: "https://images.unsplash.com/photo-1630384066252-11e1ed8fd571?w=800",
    rating: 4.0,
    time: "15-20 min",
    price: 180,
    category: "Snacks, Fast Food",
    tag: ""
  },
  {
    id: 24,
    name: "Garlic Breadsticks",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800",
    rating: 4.3,
    time: "15-20 min",
    price: 149,
    category: "Sides, Italian",
    tag: ""
  },

  // --- BAKERY ---
  {
    id: 25,
    name: "Butter Croissant",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800",
    rating: 4.6,
    time: "10-15 min",
    price: 120,
    category: "Bakery, Breakfast",
    tag: "FRESHLY BAKED"
  },
  {
    id: 26,
    name: "Blueberry Muffin",
    image: "https://images.unsplash.com/photo-1587538637820-dbbf23768ec7?w=800",
    rating: 4.4,
    time: "10-15 min",
    price: 99,
    category: "Bakery, Snacks",
    tag: ""
  },

  // --- PREMIUM / SPECIALS ---
  {
    id: 27,
    name: "Saffron Infused Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    rating: 4.8,
    time: "30-35 min",
    price: 450,
    category: "Gourmet, Indian",
    tag: "ROYAL"
  },
  {
    id: 28,
    name: "Truffle Pasta",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
    rating: 4.9,
    time: "40-45 min",
    price: 899,
    discountPrice: 750,
    category: "Gourmet, Italian",
    tag: "LIMITED"
  },
  {
    id: 29,
    name: "Avocado Toast with Egg",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
    rating: 4.5,
    time: "15-20 min",
    price: 350,
    category: "Breakfast, Healthy",
    tag: "POPULAR"
  },
  {
    id: 30,
    name: "Matcha Green Tea Latte",
    image: "https://images.unsplash.com/photo-1536496070240-2313181d550e?w=800",
    rating: 4.3,
    time: "10-15 min",
    price: 280,
    category: "Beverages, Healthy",
    tag: ""
  }
];