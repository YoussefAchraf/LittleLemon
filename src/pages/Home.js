import restaurantfood from "./assets/restaurant-food.jpg"
import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import { Helmet } from "react-helmet-async";
import Btn from "./components/btn";
import meals from "./fakeapi/MealsApi"
import reviews from "./fakeapi/ReviewsApi";
import FoodCard from "./components/FoodCard";
import ReviewCard from "./components/ReviewCard";
const Home = ( ) => {
    return(
      <>
        <Helmet>
          <meta
            name="description"
            content="Welcome to Little Lemon, your favorite restaurant for fresh and delicious meals in town. Explore our menu, reserve a table, and experience the taste of happiness."
          />
          <meta property="og:title" content="Home Page | Little Lemon" />
          <meta property="og:description" content="Welcome to Little Lemon, your favorite restaurant for fresh and delicious meals in town. Explore our menu, reserve a table, and experience the taste of happiness." />
          <meta property="og:image" content="%PUBLIC_URL%/og-image.jpg" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Home Page | Little Lemon" />
          <meta name="twitter:description" content="Welcome to Little Lemon, your favorite restaurant for fresh and delicious meals in town. Explore our menu, reserve a table, and experience the taste of happiness." />
          <meta name="twitter:image" content="%PUBLIC_URL%/twitter-image.jpg" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="Little Lemon, restaurant, fresh, delicious, meals" />
          <title>Home Page | Little Lemon</title>
        </Helmet>
        <section className="w-full h-[60dvh] bg-[#495e57] my-[10dvh] flex flex-col items-center md:justify-around md:my-[15dvh] md:flex-row">
          <div className="pt-[5dvh] pb-[1dvh] w-[80dvw] md:w-[30dvw]">
            <h1 className="text-[#f4ce14] font-serif font-extrabold text-2xl pb-[1dvh] md:text-4xl md:py-[1dvh]">Little Lemon</h1>
            <h3 className="text-[white] font-serif font-extrabold text-xl pb-[1dvh] md:text-2xl md:py-[1dvh]">Chicago</h3>
            <p className="text-[#ffffff] font-serif font-medium text-base py-[1dvh]">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Btn 
              className="pb-[1dvh]"
              txt="Reserve a table"
              page="/reservations"
            />
          </div>
          <div>
            <img 
              src={restaurantfood}
              alt="Little Lemon restaurant"
              className="h-[30dvh] w-[80dvw] rounded-[30px] md:h-[400px] md:w-[35dvw] md:mt-[10dvh]"
            />
          </div>
        </section>
        <section className="w-full h-auto my-[4dvh]">
          <div className="flex items-center justify-around md:gap[10dvw]">
            <h1 className="text-[#495e57] font-extrabold text-2xl">This week specials!</h1>
            <Btn
              txt="Our menu"
              page="/menu"
            />
          </div>
          <div className="mt-[10dvh] flex flex-col md:flex-row items-center justify-center gap-[2dvw]">
            {meals.map((meal, index) => (
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
          <div className="w-full h-auto py-[10dvh] bg-[#495e57] mt-[1dvh] flex flex-col ">
            <p className="text-white font-bold text-2xl pl-[2dvw] pb-[2dvh]">Our clients reviews</p>
            <div className="w-full flex flex-col md:flex-row justify-around">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  clientImg={review.image} 
                  imgAlt={review.clientName}
                  clientName={review.clientName}
                  clientReviw={review.review}
                />
              ))}
            </div>
          </div>
        </section>
      <section className="w-full h-auto mb-[4dvh] flex flex-col items-center justify-center md:flex-row px-[5dvw]">
        <div className=" w-[80dvw] md:w-[40dvw] pb-[5dvh]">
          <h1 className="text-[#f4ce14] font-serif font-extrabold text-2xl pb-[1dvh] md:text-4xl md:py-[1dvh]">Little Lemon</h1>
          <h3 className="text-[#495e57] font-serif font-extrabold text-xl pb-[1dvh] md:text-2xl md:py-[1dvh]">Chicago</h3>
          <p className="text-gray-700 text-base">
            In the heart of Chicago lies Little Lemon, a vibrant eatery helmed by chefs Mario and Adrian. Their lemon-themed haven delights patrons with citrus-infused dishes, from zesty pastas to succulent meats. Beyond its culinary prowess, Little Lemon fosters community, hosting gatherings and supporting local causes. Each visit is a memorable experience, leaving smiles and satisfied taste buds in its wake. Little Lemon isn't just a restaurant—it's a beacon of culinary excellence and heartfelt hospitality, cherished by all who walk through its doors.
          </p>
        </div>
        <div className="w-[80dvw] h-auto md:w-[60dvw] flex flex-col items-center justify-center gap-5">
          <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" className="w-auto h-[40dvh] md:h-[60dvh] rounded-2xl" />
          <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" className="w-auto h-[40dvh] md:h-[60dvh] rounded-2xl" />
        </div>
      </section>
      </>
    );
  }
  export default Home;
