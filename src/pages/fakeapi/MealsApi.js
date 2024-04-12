import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import caesarSalad from "../assets/caesar-salad.jpeg";
import chickenAlfredo from "../assets/chicken-alfredo.jpeg";
import capreseSalad from "../assets/caprese-salad.jpg";
import pestoPasta from "../assets/pesto-pasta.jpg";
import steakFrites from "../assets/steak-frites.jpg";
import mediterraneanPlate from "../assets/mediterranean-plate.jpg";
import shrimpScampi from "../assets/shrimp-scampi.jpg";
import spinachSalad from "../assets/spinach-salad.jpg";
import tiramisu from "../assets/tiramisu-cake.jpeg";
import chickenParmesan from "../assets/chicken-parmesan.jpeg";
import fruitTart from "../assets/fruit-tart.jpg";
import cremeBrulee from "../assets/creme-brulee.jpg";

const meals = [
  {
      name: "Greek Salad",
      price: 12.99,
      description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad,
      type: "salad",
      ws: true
  },
  {
      name: "Bruschetta",
      price: 5.99,
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruschetta,
      type: "delight",
      ws: true
  },
  {
      name: "Lemon Dessert",
      price: 5.00,
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert,
      type: "delight",
      ws: true
  },
  {
      name: "Caesar Salad",
      price: 9.99,
      description: "Crisp romaine lettuce tossed with our signature Caesar dressing, croutons, and Parmesan cheese.",
      image: caesarSalad,
      type: "salad",
      ws: false
  },
  {
      name: "Chicken Alfredo",
      price: 14.99,
      description: "Fettuccine pasta topped with creamy Alfredo sauce and grilled chicken breast, served with garlic bread.",
      image: chickenAlfredo,
      type: "plate",
      ws: false
  },
  {
      name: "Caprese Salad",
      price: 11.99,
      description: "A classic Italian salad made with fresh tomatoes, mozzarella cheese, basil leaves, drizzled with balsamic glaze.",
      image: capreseSalad,
      type: "salad",
      ws: false
  },
  {
      name: "Pesto Pasta",
      price: 10.99,
      description: "Spaghetti tossed in homemade pesto sauce made with fresh basil, pine nuts, garlic, Parmesan cheese, and olive oil.",
      image: pestoPasta,
      type: "plate",
      ws: false
  },
  {
      name: "Steak Frites",
      price: 19.99,
      description: "Grilled sirloin steak served with crispy French fries, accompanied by a side of peppercorn sauce.",
      image: steakFrites,
      type: "plate",
      ws: false
  },
  {
      name: "Mediterranean Plate",
      price: 16.99,
      description: "A delightful assortment of hummus, falafel, tabbouleh, stuffed grape leaves, and pita bread.",
      image: mediterraneanPlate,
      type: "plate",
      ws: false
  },
  {
      name: "Shrimp Scampi",
      price: 17.99,
      description: "Jumbo shrimp sautéed in garlic butter sauce, served over a bed of linguine pasta, garnished with parsley.",
      image: shrimpScampi,
      type: "plate",
      ws: false
  },
  {
      name: "Spinach Salad",
      price: 10.99,
      description: "Fresh spinach leaves topped with sliced strawberries, goat cheese, candied pecans, and balsamic vinaigrette.",
      image: spinachSalad,
      type: "salad",
      ws: false
  },
  {
      name: "Tiramisu",
      price: 6.99,
      description: "A classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
      image: tiramisu,
      type: "delight",
      ws: false
  },
  {
      name: "Chicken Parmesan",
      price: 15.99,
      description: "Breaded chicken breast topped with marinara sauce and melted mozzarella cheese, served with spaghetti marinara.",
      image: chickenParmesan,
      type: "plate",
      ws: false
  },
  {
      name: "Fruit Tart",
      price: 8.99,
      description: "A delightful pastry crust filled with creamy custard and topped with assorted fresh fruits.",
      image: fruitTart,
      type: "delight",
      ws: false
  },
  {
      name: "Creme Brulee",
      price: 7.50,
      description: "A classic French dessert consisting of rich custard topped with a layer of caramelized sugar.",
      image: cremeBrulee,
      type: "delight",
      ws: false
  }
];

export default meals;
