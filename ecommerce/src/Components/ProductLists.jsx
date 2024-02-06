import Product from "./Product"

const products = [
    {
        id: 1,
        name: "Pizza",
        urlImage: 
        "https://bit.ly/3SzPwJ5",
        price:0.01
    },
    {
        id: 2,
        name: "Vegan Salad bowl",
        urlImage: 
        "https://bit.ly/48LPDae",
        price:0.02
    },
    {
        id: 3,
        name: "Pesto Pasta",
        urlImage: 
        "https://bit.ly/47XHfmK",
        price:0.02
    },
    {
        id: 4,
        name: "Udon Salad",
        urlImage: 
        "https://bit.ly/48OXQdW",
        price:0.02
    },
    {
        id: 5,
        name: "Premium Food",
        urlImage: 
        "https://bit.ly/3HImMaN",
        price:0.02
    },
    {
        id: 6,
        name: "Cool Drink",
        urlImage: 
        "https://bit.ly/48S0Ndu",
        price:0.02
    },
];

const ProductLists = () => {
    return( 
        <div className="grid">
           { products.map((Producti) => (
        <Product key={Producti.id} producti={Producti}/>
    ))}
</div>
    )
}
export default ProductLists