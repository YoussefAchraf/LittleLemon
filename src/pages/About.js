import { Helmet } from "react-helmet-async";
const About = ( ) => {
  return(
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover the story behind Little Lemon, your favorite restaurant for fresh and delicious meals in town. Learn about our philosophy, team, and commitment to delivering happiness through food."
        />
        <meta property="og:title" content="About Us | Little Lemon" />
        <meta
          property="og:description"
          content="Discover the story behind Little Lemon, your favorite restaurant for fresh and delicious meals in town. Learn about our philosophy, team, and commitment to delivering happiness through food."
        />
        <meta property="og:image" content="%PUBLIC_URL%/og-about-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Little Lemon" />
        <meta
          name="twitter:description"
          content="Discover the story behind Little Lemon, your favorite restaurant for fresh and delicious meals in town. Learn about our philosophy, team, and commitment to delivering happiness through food."
        />
       <meta name="twitter:image" content="%PUBLIC_URL%/twitter-about-image.jpg" />
       <meta name="robots" content="index, follow" />
       <meta name="keywords" content="Little Lemon, restaurant, about us, philosophy, team, delicious meals" />
       <title>About Us | Little Lemon</title>
      </Helmet>
      <section className="w-[100dvw] h-[100dvh] overflow-x-hidden">
      
      </section>
    </>
  );
}
export default About;