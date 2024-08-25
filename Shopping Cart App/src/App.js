import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiZT36pgBAKEN1gW6XE_zisd5pEV4S5EwFQ&usqp=CAU'
      ,name: 'moana cartone film',
      price: 200
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpV-EtmgJaH0DHQvlLZT6-tP1y2DnZQg3ngg&usqp=CAU',
      name: 'Dinosaurs',
      price: 250
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdUVn79j51Q_SZYUg5XA5x3lGS_6AjwWRng&usqp=CAU',
      name: 'mikey mouse ',
      price: 500
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvQq-7ybbB_nmYnhNvC-IhDkvsFrHP2ozYg&usqp=CAU',
      name: 'Alaa Eldine ',

      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgRuDvzWb1Dy-pNmlnu8J061yBnsMerSR3A&usqp=CAU',
      name: 'Snow White',
      price: 200
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_voMUaBDeR0Mn9YLVzU2Cb9aHrcVLMfFavg&usqp=CAU',
      name: 'Strnge World',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;