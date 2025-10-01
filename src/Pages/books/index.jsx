import Footer from "../../component/shared/Footer";
import Header from "../../component/shared/Header";
import Hero from "../../component/shared/Hero";
import ProductList from "../../component/shared/ProductList";
import Book from "../../component/Book";   //buat Daftar buku baru

export default function Books() {
    return (
        <>
            <Header />
            <ProductList />
            <Book showAddButton={true} />
            <Footer />
        </>
    );
}
