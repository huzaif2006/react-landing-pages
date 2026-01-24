import "./section1.css"
import Card from "../../shared/card/card"
import {products} from "../../../products"

const Section1 = () => {
  return (
    <section className='section1'>
        <h2>Top Product</h2>

        <div className="card-container">
         {
          products.map((product)=>{
            return <Card image={product.image} alt={product.alt} title={product.title} price={product.price}/>
          })
         }
            
        </div>
    </section>
  )
}

export default Section1