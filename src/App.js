import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList"
import React, { useState } from "react";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";

function App() {
  const productList = [
    {
      price: 99999,
      name: "Iphone 15 R",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Yphone 15 R",
      quantity: 0,
    },
  ];

  const [productListState, setProductListState] = useState(productList);
  let[totalAmount , setTotalAmount]= useState(0)

  const incrementQuantity = (index) => {
    const newProductList = [...productListState];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount);
    setProductListState(newProductList);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productListState];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0) {
      newProductList[index].quantity-- 
      newTotalAmount -= newProductList[index].price
    }
    setTotalAmount(newTotalAmount);
    setProductListState(newProductList);
    
  };

  const resetQuantity = () =>{
    let newProductList =[...productList];
    newProductList.map((products)=>{
      products.quantity=0
    })
    setProductListState(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index)=>{
    let newProductList =[...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1)
    setProductListState(newProductList);
    setTotalAmount(newTotalAmount);
  }
  
  const addItem=(name,price)=>{
    let newProductList =[...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductListState(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList productList={productListState} 
        incrementQuantity={incrementQuantity} 
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
        />  
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />  
      </main>
    </>
  );
}
export default App;
 