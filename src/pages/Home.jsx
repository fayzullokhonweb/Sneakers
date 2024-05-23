import "../css/Home.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProduct } from "../features/productsSlice";
import products from "../components/Products";

function Home() {
  const dispatch = useDispatch();
  const [productAmount, setProductAmount] = useState(1);
  const [selectedImage, setSelectedImage] = useState("./image-product-1.jpg");

  const setAmount = (type) => {
    if (type === "decrease" && productAmount > 1) {
      setProductAmount((prev) => prev - 1);
    } else if (type === "increase" && productAmount < 9) {
      // updated limit
      setProductAmount((prev) => prev + 1);
    }
  };

  const addToBag = () => {
    const newProduct = {
      id: selectedImage,
      img: selectedImage,
      amount: productAmount,
    };
    dispatch(addProduct(newProduct));
    setProductAmount(1);
  };

  return (
    <div className="wrapper">
      <div className="box">
        <div className="cart">
          <img className="cartImg" src={selectedImage} alt="hero img" />
          <div className="cartImages">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedImage(product.img)}
              >
                <img
                  className={`image ${
                    selectedImage === product.img ? "active" : ""
                  }`}
                  src={product.img}
                  alt="product"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="content__wrapper">
          <div className="content">
            <h4 className="content__desc">Sneaker Company</h4>
            <h4 className="content__title">Fall Limited Edition Sneakers</h4>
            <p className="content__text">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="addCart">
            <div className="cartPrice">
              <div className="discWrapper">
                <h3 className="discountPrice">${productAmount * 125}.00</h3>
                <h3 className="discountPercentage">50%</h3>
              </div>
              <h3 className="realPrice">${productAmount * 250}.00</h3>
            </div>
            <div className="addCartChild">
              <div className="addCartBtns">
                <button
                  onClick={() => setAmount("decrease")}
                  disabled={productAmount === 1}
                  className="removeBtn"
                >
                  -
                </button>
                <h3 className="result">{productAmount}</h3>
                <button
                  onClick={() => setAmount("increase")}
                  disabled={productAmount === 9}
                  className="addBtn"
                >
                  +
                </button>
              </div>
              <button onClick={addToBag} className="addingCarts">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
