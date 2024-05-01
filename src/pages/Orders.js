import { Helmet } from "react-helmet-async";

const Orders = () => {
  return (
    <>
      <Helmet>
        <title>Orders Page - Little Lemon</title>
        <meta
          name="description"
          content="Manage your orders with ease at Little Lemon. View your order history, track current orders, and enjoy convenient online ordering services. Experience hassle-free dining with Little Lemon."
        />
        <meta property="og:title" content="Orders Page - Little Lemon" />
        <meta
          property="og:description"
          content="Manage your orders with ease at Little Lemon. View your order history, track current orders, and enjoy convenient online ordering services. Experience hassle-free dining with Little Lemon."
        />
        <meta property="og:image" content="%PUBLIC_URL%/og-orders-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orders Page - Little Lemon" />
        <meta
          name="twitter:description"
          content="Manage your orders with ease at Little Lemon. View your order history, track current orders, and enjoy convenient online ordering services. Experience hassle-free dining with Little Lemon."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/twitter-orders-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Little Lemon, restaurant, orders, online ordering" />
      </Helmet>
      <section className="w-full h-[100dvh] overflow-x-hidden">
        
      </section>
    </>
  );
};

export default Orders;
