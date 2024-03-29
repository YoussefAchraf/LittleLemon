import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";

const meals = [
    {
      name: "Greek Salad",
      price: 12.99,
      description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad
    },
    {
      name: "Bruschetta",
      price: 5.99,
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruschetta
    },
    {
      name: "Lemon Dessert",
      price: 5.00,
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert
    }
];

export default meals;
