import product1 from "./product1.png";
import product2 from "./product2.png";
import product3 from "./product3.png";
import product6 from "./product6.png";
import product7 from "./product7.png";
import product8 from "./product8.png";

import { StaticImageData } from "next/image";

export interface Products {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
    description: string;
}

export const products: Products[] = [
    {
        id: 1,
        name: "Fresh Apples",
        price: 100,
        image: product1,
        description: "Crisp, juicy apples picked fresh from the orchard. Perfect for snacking or baking.",
    },
    {
        id: 2,
        name: "Organic Bananas",
        price: 200,
        image: product2,
        description: "Sweet and ripe organic bananas, ideal for smoothies, cereals, or a healthy snack.",
    },
    {
        id: 3,
        name: "Premium Coffee Beans",
        price: 300,
        image: product3,
        description: "Rich and aromatic coffee beans sourced from the finest plantations. Enjoy a fresh brew every morning.",
    },
    {
        id: 4,
        name: "Whole Wheat Bread",
        price: 100,
        image: product6,
        description: "Soft and healthy whole wheat bread, baked daily. Great for sandwiches and toast.",
    },
    {
        id: 5,
        name: "Farm Fresh Eggs",
        price: 300,
        image: product7,
        description: "Grade A farm fresh eggs, packed with protein and essential nutrients for your daily meals.",
    },
    {
        id: 6,
        name: "Assorted Groceries Pack",
        price: 300,
        image: product8,
        description: "A convenient pack of essential groceries including rice, pasta, and canned goods for your pantry.",
    },
];