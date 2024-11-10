import Image1 from "./assets/images/image1.svg";
import Image2 from "./assets/images/image2.svg";
import Image3 from "./assets/images/image3.svg";
export const API_BASE_URL = "http://localhost:5000";
export const BrandName = "Sunhaarr";
export const API_URL = {
  getUser: "/user",
};

export const HTTP_STATUS_CODES = {
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  SUCCESS: 200,
  SERVER_ERROR: 500,
};

export const categories = [
  { type: "type", value: "tops", label: "Tops" },
  { type: "type", value: "earring", label: "Earrings" },
  { type: "type", value: "pendant", label: "Pendant" },
  { type: "type", value: "payal", label: "Payal" },
  { type: "type", value: "tikka", label: "Manng Tikka" },
  { type: "type", value: "pearl_necklace", label: "Pearl Necklace" },
  { type: "type", value: "everyday_necklace", label: "Everyday Necklace" },
  { type: "type", value: "wedding_necklace", label: "Wedding Necklace" },
  { type: "type", value: "mangalsutra", label: "Mangalsutra" },
  { type: "type", value: "men_chain", label: "Men Chains" },
  { type: "type", value: "women_chain", label: "Women Chains" },
  { type: "type", value: "child_chain", label: "Child Chains" },
  { type: "type", value: "new_arrivals", label: "New Arrivals" },
  { type: "type", value: "best_sellers", label: "Best Sellers" },

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
    category: "Earrings",
    price: "4000",
    image: Image1,
    link: "/products?search=bangles",
    text: "Bangles",
  },
  {
    category: "Earrings",
    price: "2400",
    image: Image2,
    link: "/products?search=rings",
    text: "Rings",
  },
  {
    category: "Earrings",
    price: "5600",
    image: Image3,
    link: "/products?search=chains",
    text: "Chains",
  },
  {
    category: "Earrings",
    price: "14400",
    image: Image1,
    link: "/products?search=payal",
    text: "Payal",
  },
  {
    category: "Earrings",
    price: "4000",
    image: Image2,
    link: "/products?search=pendant",
    text: "Pendant",
  },
  {
    category: "Earrings",
    price: "4000",
    image: Image3,
    link: "/products?search=earrings",
    text: "Earrings",
  },
];
