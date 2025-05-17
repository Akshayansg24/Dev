import React from "react";
import "./App.css";

function App() {
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "₹250",
      description: "Classic cheese and tomato pizza.",
      image: "https://tse1.mm.bing.net/th?id=OIP.67HufXX0DvcQawQzK7VxgQHaH4&pid=Api&P=0&h=180"
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: "₹180",
      description: "Fresh romaine lettuce with Caesar dressing.",
      image: "https://tse3.mm.bing.net/th?id=OIP.8UagT3WWGxruvIOqJTCPeQHaE8&pid=Api&P=0&h=180"
    },
    {
      id: 3,
      name: "Spaghetti Carbonara",
      price: "₹320",
      description: "Pasta with creamy egg sauce and pancetta.",
      image: "https://tse2.mm.bing.net/th?id=OIP.-L2zuKj5SBswlGEfZetZqgHaJ4&pid=Api&P=0&h=180"
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      price: "₹150",
      description: "Warm chocolate cake with molten center.",
      image: "https://tse2.mm.bing.net/th?id=OIP.mD9uvqMGLhaAxor-MWFSiQHaKX&pid=Api&P=0&h=180"
    }
  ];

  return (
    <div className="container">
      <header>
        <h1>🍽️ Delicious Bites</h1>
        <p>Your favorite restaurant in town!</p>
      </header>

      <section>
        <h2>✨ Our Menu</h2>
        <ul className="menu-list">
          {menuItems.map(item => (
            <li key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-img" />
              <div className="menu-details">
                <h3>
                  {item.name}
                  <span className="price-badge">{item.price}</span>
                </h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>© 2025 Delicious Bites. Made with ❤️ in India.</p>
      </footer>
    </div>
  );
}

export default App;
