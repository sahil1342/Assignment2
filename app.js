import ReactDOM from 'react-dom/client';
import "./globalStyle.css";
import HomePage from './src/pages/homePage';
import SearchPage from './src/pages/amazonSearchPage';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProductDescription from './src/pages/productDescription';



const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const categories = ["Fresh", "Amazon Mini Tv", "Sell", "Best Sellers", "Electronics", "Books", "Prime", "Fashion", "Home", "Mobiles", "Grocery", "Appliances", "Baby", "Toys", "Deals", "Food"];

const productInfoCards = [
    {
        id  :1,
        title: "Refresh your space",
        products: [
            {
                title: "Air Conditioners",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
            },
            {
                title: "Refrigerators",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
            },
            {
                title: "Microwaves",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
            },
            {
                title: "Washing Machines",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
            },

        ],
    },
    {
        id  :2,
        title: "Electronics",
        products: [
            {
                title: "Air Conditioners",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
            },
            {
                title: "Refrigerators",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
            },
            {
                title: "Microwaves",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
            },
            {
                title: "Washing Machines",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
            },
        ],
    },
    {
        id  :3,
        title: "Books",
        products: [
            {
                title: "Air Conditioners",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
            },
            {
                title: "Refrigerators",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
            },
            {
                title: "Microwaves",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
            },
            {
                title: "Washing Machines",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
            },
        ],
    },
];




const App = () => {

    const [products, setProducts] = useState([]);
    // console.log(searchText)

    async function getData(){
        const res = await fetch(`https://dummyjson.com/products?limit=194`);
        const data = await res.json();
        // console.log(data)
        setProducts(data.products);
        
    }

    useEffect(()=>{
        getData()
    }, []);

    const [searchText, setSearchText] = useState("");
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage searchText={searchText} setSearchText={setSearchText} categories={categories} productInfoCards={productInfoCards}/>
        },
        {
            path: "/search",
            element: <SearchPage searchText={searchText} setSearchText={setSearchText} categories={categories}/>
        },
        {
            path: "/description/:id",
            element: <ProductDescription 
            categories={categories}
            products={products}
            />
        }
    ])

    return (
        <RouterProvider router={router} />
    );
};

root.render(<App/>);
