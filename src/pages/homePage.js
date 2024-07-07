import '../../globalStyle.css';
import CategoryBar from '../components/categoryBar';
import Navbar from '../components/navbar';
import ProductInfoCard from "../components/productInfoCard";

import { useNavigate } from "react-router-dom";



const HomePage = (props) => {
    const { productInfoCards, categories, setSearchText} = props;

    const navigate = useNavigate();

    const openSearchPage = () => {
        navigate("/search");
    };
    return (
        <div className='homepage-root-container'>
        <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage}/>
        <CategoryBar categories={categories}/>
        <div className="homepage-body">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg" alt="" id="homepage-img"/>

                <div className="products-card-container">
                {productInfoCards.map((elem) => {
                    return <ProductInfoCard
                    title = {elem.title} products = {elem.products}
                    />
                })}
                </div>
            </div>
        </div>
    )
}


export default HomePage;