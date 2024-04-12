import { Helmet } from "react-helmet-async";
const Identification = ( ) => {
    return(
      <>
        <Helmet>
          <meta
            name="description"
            content="Welcome to the Identification page at Little Lemon. Login or sign-in to access exclusive features and services. Learn about our identification process, ensuring a secure dining experience for all our guests."
          />
         <meta property="og:title" content="Identification | Little Lemon" />
         <meta
           property="og:description"
           content="Welcome to the Identification page at Little Lemon. Login or sign-in to access exclusive features and services. Learn about our identification process, ensuring a secure dining experience for all our guests."
         />
         <meta property="og:image" content="%PUBLIC_URL%/og-identification-image.jpg" />
         <meta property="og:type" content="website" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="Identification | Little Lemon" />
         <meta
           name="twitter:description"
           content="Welcome to the Identification page at Little Lemon. Login or sign-in to access exclusive features and services. Learn about our identification process, ensuring a secure dining experience for all our guests."
         />
         <meta name="twitter:image" content="%PUBLIC_URL%/twitter-identification-image.jpg" />
         <meta name="robots" content="index, follow" />
         <meta name="keywords" content="Little Lemon, restaurant, identification, login, sign-in, security" />
         <title>Identification | Little Lemon</title>
      </Helmet>
        <section className="w-full h-auto flex items-center justify-center">
          <div className="md: w-[80dvw] h-[80dvh] mt-[10dvh] bg-[lightgrey]">
            
          </div>
        </section>
      </>
    );
  }
  export default Identification;