import Contact from "../component/shared/Contact";
import Footer from "../component/shared/Footer";
import Header from "../component/shared/Header";
import Hero from "../component/shared/Hero";
import ProductList from "../component/shared/ProductList";
import Team from "../component/shared/Team";

export default function Home(){
    return(
        <>
        <Header/>
        <Hero/>
        <ProductList/>
        <Team/>
        <Contact/>
        <Footer/>
        </>
    )
}