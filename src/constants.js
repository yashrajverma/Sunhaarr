export const API_BASE_URL =
  process.env.NODE_ENV == "production"
    ? "https://sunhaarr-backend.vercel.app"
    : "http://localhost:5000";
export const BrandName = "Sunhaarr";
export const API_URL = {
  user: "/register",
  products: "/products",
  cart: "/cart",
  cartItem: "/item",
};

export const HTTP_STATUS_CODES = {
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  SUCCESS: 200,
  SERVER_ERROR: 500,
};

export const categories = [
  { type: "category", value: "tops", label: "Tops" },
  { type: "category", value: "earring", label: "Earrings" },
  { type: "category", value: "pendant", label: "Pendant" },
  { type: "category", value: "payal", label: "Payal" },
  { type: "category", value: "tikka", label: "Manng Tikka" },
  { type: "category", value: "pearl_necklace", label: "Pearl Necklace" },
  { type: "category", value: "everyday_necklace", label: "Everyday Necklace" },
  { type: "category", value: "wedding_necklace", label: "Wedding Necklace" },
  { type: "category", value: "mangalsutra", label: "Mangalsutra" },
  { type: "category", value: "men_chain", label: "Men Chains" },
  { type: "category", value: "women_chain", label: "Women Chains" },
  { type: "category", value: "child_chain", label: "Child Chains" },
  { type: "category", value: "new_arrivals", label: "New Arrivals" },
  { type: "category", value: "best_sellers", label: "Best Sellers" },

  { type: "purity", value: "18kt", label: "18kt" },
  { type: "purity", value: "20kt", label: "20kt" },
  { type: "purity", value: "22kt", label: "22kt" },

  { type: "metal", value: "plain_gold_platinum", label: "Plain Gold/Platinum" },
  { type: "metal", value: "gold", label: "Gold" },
  { type: "metal", value: "rose_gold", label: "Rose Gold" },
  { type: "metal", value: "white_gold", label: "White Gold" },

  { type: "occasions", value: "wedding", label: "Wedding" },
  { type: "occasions", value: "festive", label: "Festive" },
  { type: "occasions", value: "love", label: "Love" },
  { type: "occasions", value: "gift", label: "Gift" },
  { type: "occasions", value: "office", label: "Office Wear" },
  { type: "occasions", value: "party", label: "Party" },
];

export const cardItems = [
  {
    in_stock: true,
    category: "bangles",
    price: "4000",
    image:
      "https://images.unsplash.com/photo-1619893454156-26a705ac9eb5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products?category=bangles",
    text: "Bangles",
  },
  {
    in_stock: true,
    category: "rings",
    price: "2400",
    image:
      "https://images.unsplash.com/photo-1698259947512-a6ac66f961f2?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products?category=rings",
    text: "Rings",
  },
  {
    in_stock: true,
    category: "chain",
    price: "5600",
    image:
      "https://images.unsplash.com/photo-1585711715631-1e6bf224f092?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products?category=chains",
    text: "Chains",
  },
  {
    in_stock: true,
    category: "payal",
    price: "14400",
    image:
      "https://plus.unsplash.com/premium_photo-1673896633781-f7c5920870e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products?category=payal",
    text: "Payal",
  },
  {
    in_stock: true,
    category: "pendant",
    price: "4000",
    image:
      "https://images.unsplash.com/photo-1650455221359-3aebf920bcc5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products?category=pendant",
    text: "Pendant",
  },
  {
    in_stock: true,
    category: "earring",
    price: "4000",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products?category=earrings",
    text: "Earrings",
  },
];
