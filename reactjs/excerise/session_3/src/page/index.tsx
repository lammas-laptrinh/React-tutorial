
import ProductList from "@components/ProductList";
import Favorites from "@components/Favourites";
import { ProductProvider } from "@context/productContext";

const Home: any = () => {
  return (
    <div className="container">
      <main className="main-content">
        <ProductProvider>
          <Favorites />
          <ProductList />
        </ProductProvider>
      </main>
    </div>
  );
};

export default Home;