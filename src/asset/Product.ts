import product1 from "./product1.png";
import product2 from "./product2.png";
import product3 from "./product3.png";
import product4 from "./product4.png";
import product5 from "./product5.png";
import product6 from "./product6.png";
import product7 from "./product7.png";
import product8 from "./product10.png";
import product9 from "./product11.png";
import product10 from "./product10.png";
import product11 from "./product11.png";
import product12 from "./product12.png";
import product13 from "./product13.png";
import product14 from "./product14.png";
import product15 from "./product15.png";
import product16 from "./product16.png";
import product17 from "./product17.png";

import { StaticImageData } from "next/image";

export interface Products {
    id: number;
    name: string;
    price: number;
    image: string | StaticImageData;
    category: string;
    description: string;
}

export const products: Products[] = [
    {
        id: 1,
        name: "Fresh Apples",
        price: 100,
        image: product1,
        category: 'All',
        description: "Crisp, juicy apples picked fresh from the orchard. Perfect for snacking or baking.",
    },
    {
        id: 2,
        name: "Organic Bananas",
        price: 200,
        image: product2,
        category: 'bread',
        description: "Sweet and ripe organic bananas, ideal for smoothies, cereals, or a healthy snack.",
    },
    {
        id: 3,
        name: "Premium Coffee Beans",
        price: 300,
        image: product3,
        category: 'cupcake',
        description: "Rich and aromatic coffee beans sourced from the finest plantations. Enjoy a fresh brew every morning.",
    },
    {
        id: 4,
        name: "Whole Wheat Bread",
        price: 100,
        image: product4,
        category: 'cupcake',
        description: "Soft and healthy whole wheat bread, baked daily. Great for sandwiches and toast.",
    },
    {
        id: 5,
        name: "Farm Fresh Eggs",
        price: 300,
        image: product5,
        category: 'dessert',
        description: "Grade A farm fresh eggs, packed with protein and essential nutrients for your daily meals.",
    },
    {
        id: 6,
        name: "Assorted Groceries Pack",
        price: 300,
        image: product6,
        category: 'dessert',
        description: "A convenient pack of essential groceries including rice, pasta, and canned goods for your pantry.",
    },
      {
        id: 7,
        name: "Whole Wheat Bread",
        price: 100,
        image: product7,
        category: 'noodles',
        description: "Soft and healthy whole wheat bread, baked daily. Great for sandwiches and toast.",
    },
    {
        id: 8,
        name: "Farm Fresh Eggs",
        price: 300,
        image: product8,
        category: 'noodles',
        description: "Grade A farm fresh eggs, packed with protein and essential nutrients for your daily meals.",
    },
    {
        id: 9,
        name: "Assorted Groceries Pack",
        price: 300,
        image: product9,
        category: 'cakes',
        description: "A convenient pack of essential groceries including rice, pasta, and canned goods for your pantry.",
    },  {
        id: 10,
        name: "Whole Wheat Bread",
        price: 100,
        image: product10,
        category: 'cakes',
        description: "Soft and healthy whole wheat bread, baked daily. Great for sandwiches and toast.",
    },
    {
        id: 11,
        name: "Farm Fresh Eggs",
        price: 300,
        image: product11,
        category: 'Drinks',
        description: "Grade A farm fresh eggs, packed with protein and essential nutrients for your daily meals.",
    },
    {
        id: 12,
        name: "Assorted Groceries Pack",
        price: 300,
        image: product12,
        category: 'Drinks',
        description: "A convenient pack of essential groceries including rice, pasta, and canned goods for your pantry.",
    },
    {
        id: 13,
        name: "Assorted Groceries Pack",
        price: 300,
        image: product13,
        category: 'cakes',
        description: "A convenient pack of essential groceries including rice, pasta, and canned goods for your pantry.",
    },  {
        id: 14,
        name: "Whole Wheat Bread",
        price: 100,
        image: product14,
        category: 'cakes',
        description: "Soft and healthy whole wheat bread, baked daily. Great for sandwiches and toast.",
    },
    {
        id: 15,
        name: "Farm Fresh Eggs",
        price: 300,
        image: product15,
        category: 'ramen',
        description: "Grade A farm fresh eggs, packed with protein and essential nutrients for your daily meals.",
    },
    {
        id: 16,
        name: "Assorted Groceries Pack",
        price: 300,
        image: product16,
        category: 'Drinks',
        description: "A convenient pack of essential groceries including rice, pasta, and canned goods for your pantry.",
    },
    {
        id: 17,
        name: "Assorted Groceries Pack",
        price: 300,
        image: product17,
        category: 'Drinks',
        description: "A convenient pack of essential groceries including rice, pasta, and canned goods for your pantry.",
    },
];