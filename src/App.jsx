
import { useState } from 'react'
import './App.css'

function App() {
  
  const images = ["1.png", "2.png", "3.png", "4.png"]
  const [selectedImg, setSelectedImg] = useState( images[0] )
  const [num, setNum] = useState(1)
  const [list, setList] = useState( [] )

  const info = {
    id:1,
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    currentPrice: 125,
    beforeDiscount: 250,
    discoutPercent: 50


  }

  function addToCart() {
    info.total = num * info.currentPrice
    setList( [...list, info] )
    console.log(list);
    
  }

  return (
    <>
    <section className='itemContainer'>
      <div className="left">
      <img className='currentImg' src={selectedImg} alt="" />
      <div className="allImgs">
        {
          images.map( (item) => (
            <img onClick={ () => setSelectedImg(item) } src={item} alt="" />
          ) )
        }
      </div>
      </div>
      <div className="right">
        <h4>{info.company}</h4>
        <h1>{info.title}</h1>
        <p>{info.desc}</p>
        <h3>{info.currentPrice}$  <span>{info.discoutPercent}%</span></h3>
        <h6>{info.beforeDiscount}</h6>
        <button onClick={ () =>setNum(num - 1 ) }>-</button>
        <h2>{num}</h2>
        <button onClick={ () =>setNum(num + 1 ) }>+</button>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </section>
      
    </>
  )
}

export default App
