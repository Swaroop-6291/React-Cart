import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {

  const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  
  const img2 =
  "https://assets.ajio.com/medias/sys_master/root/20211111/51St/618d0e63f997ddf8f101dea0/-473Wx593H-460991629-clearblack-MODEL.jpg";
  
  const img3="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX522_.jpg";

  const img4="https://static.zara.net/photos///2023/I/0/2/p/1063/321/505/2/w/2400/1063321505_1_1_1.jpg?ts=1692359831613";

  const img5="https://staranddaisy.in/wp-content/uploads/2023/03/lfc_1366m_yellow_1-768x768.jpg";

  const img6="data:image/jpeg;base64,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"
  
  const productList=[{
    name:"Mac Book",
    price:12000,
    imgSrc:img1,
    id:"fsgreyhhhhhwr",
  },
  {
    name:"Black Shoes",
    price:1200,
    imgSrc:img2,
    id:"fsgreyhheqgt",
  },
  {
    name:"iPhone14",
    price:8000,
    imgSrc:img3,
    id:"infirwi",
  },
  {
    name:"Zara Shirt",
    price:300,
    imgSrc:img4,
    id:"wrgerje"
  },
  {
    name:"Electric Car for Kids",
    price:100,
    imgSrc:img5,
    id:"sfgege"

  },
  {
     name:"Rolex",
     price:1000,
     imgSrc:img6,
     id:"rwgtw"
  },
];
  const dispatch=useDispatch();

  const addToCartHandler=(options)=>{
      console.log(options);
      dispatch({type:"addToCart",payload:options})
      toast.success("Added to Cart");
      
  };  

  return (
     <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home