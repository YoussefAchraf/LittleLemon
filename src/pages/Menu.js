import FoodCard from "./components/FoodCard";
import meals from "./fakeapi/MealsApi";
import { Helmet } from "react-helmet-async";
const Menu = ( ) => {
  const saladMeals = meals.filter((meal) => meal.type === "salad");
  const delightMeals = meals.filter((meal) => meal.type === "delight");
  const plateMeals = meals.filter((meal) => meal.type === "plate");
    return(
      <>
        <Helmet>
          <meta
            name="description"
            content="Explore the delicious menu at Little Lemon. From appetizers to desserts, we offer a wide range of fresh and flavorful dishes to satisfy your cravings. Check out our menu and plan your next dining experience with us."
          />
          <meta property="og:title" content="Menu | Little Lemon" />
          <meta
            property="og:description"
            content="Explore the delicious menu at Little Lemon. From appetizers to desserts, we offer a wide range of fresh and flavorful dishes to satisfy your cravings. Check out our menu and plan your next dining experience with us."
          />
          <meta property="og:image" content="%PUBLIC_URL%/og-menu-image.jpg" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Menu | Little Lemon" />
          <meta
            name="twitter:description"
            content="Explore the delicious menu at Little Lemon. From appetizers to desserts, we offer a wide range of fresh and flavorful dishes to satisfy your cravings. Check out our menu and plan your next dining experience with us."
          />
          <meta name="twitter:image" content="%PUBLIC_URL%/twitter-menu-image.jpg" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="Little Lemon, restaurant, menu, dishes, appetizers, desserts" />
          <title>Menu | Little Lemon</title>
        </Helmet>
        <section className="w-full h-auto mt-[15dvh] flex flex-col px-[10dvw]">
          <section className="w-[80dvw] h-auto flex flex-col">
            <h1 className="text-[grey] text-[30px] py-[8dvh] font-semibold">Our Salads</h1>
            <div className="flex flex-wrap gap-3 content-start">
              {saladMeals.map((meal, index) => (
                <FoodCard
                  key={index}
                  img={meal.image}
                  imgAlt={meal.name}
                  foodTitle={meal.name}
                  foodDesc={meal.description}
                  foodPrice={`$${meal.price.toFixed(2)}`}
                />
              ))}
            </div>
          </section>
          <section className="w-[80dvw] h-auto flex flex-col">
            <h1 className="text-[grey] text-[30px] py-[8dvh] font-semibold">Our meals</h1>
            <div className="flex flex-wrap gap-3">
              {plateMeals.map((meal, index) => (
                <FoodCard
                  key={index}
                  img={meal.image}
                  imgAlt={meal.name}
                  foodTitle={meal.name}
                  foodDesc={meal.description}
                  foodPrice={`$${meal.price.toFixed(2)}`}
                />
              ))} 
            </div>
          </section>
          <section className="w-[80dvw] h-auto flex flex-col">
            <h1 className="text-[grey] text-[30px] py-[8dvh] font-semibold">Our delights</h1>
            <div className="flex flex-wrap gap-3 content-start">
              {delightMeals.map((meal, index) => (
                <FoodCard
                  key={index}
                  img={meal.image}
                  imgAlt={meal.name}
                  foodTitle={meal.name}
                  foodDesc={meal.description}
                  foodPrice={`$${meal.price.toFixed(2)}`}
                />
              ))}
            </div>
          </section>
        </section>
      </>
    );
  }
  export default Menu;