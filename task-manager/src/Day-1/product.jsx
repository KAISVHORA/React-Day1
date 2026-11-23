
import reactLogo from "../assets/react.svg";

function Productcard() {
    const products = [
        {
            id: 1,
            name: "Keyboard",
            image: reactLogo,
            price: 750,
            rating: 4.5,
            available: true,
        },
        {
            id: 2,
            name: "Mouse",
            image: reactLogo,
            price: 450,
            rating: 4.2,
            available: false,
        },
        {
            id: 3,
            name: "Laptop",
            image: reactLogo,
            price: 50000,
            rating: 4.8,
            available: true,
        },
    ];

    return (
        <div className="products-cards">
            {products.map((product) => (
                <article key={product.id}>
                    <h1>{product.name}</h1>
                    <img src={product.image} alt="React logo" />
                    <p>Price:- {product.price}</p>
                    <span>Rating:- {product.rating}</span>
                    {product.available ? (
                        <p className="availables">Available</p>
                    ) : (
                        <p className="unavailables">Unavailable</p>
                    )}
                </article>
            ))}
        </div>
    )

}

export default Productcard;