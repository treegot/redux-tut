import React from "react";
const Home = (props) => {
console.warn("home",props.data)
    return (

        <div>
         
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src=" https://images.news18.com/ibnlive/uploads/2021/02/1612330607_samsung-galaxy-s212.jpg?impolicy=website&width=510&height=356" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                       onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    );
}
export default Home;