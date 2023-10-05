import MainCarousel from "../../components/MainCarousel/MainCarousel";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;
