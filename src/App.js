import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Contexts
import { ProductContext } from '../src/contexts/ProductContext'
import { CartContext } from './contexts/CartContext'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//hooks
import {useLocalStorage} from '../src/hooks/useLocalStorage'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
		<CartContext.Provider value={{ cart }}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/" component={Products} />

			<Route path="/cart" component={ShoppingCart}/>

		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
