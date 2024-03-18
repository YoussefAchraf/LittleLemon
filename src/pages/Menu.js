import { Helmet } from "react-helmet-async";
const Menu = ( ) => {
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

        <section className="w-[100dvw] h-[100dvh] overflow-x-hidden">
      
        </section>
      </>
    );
  }
  export default Menu;