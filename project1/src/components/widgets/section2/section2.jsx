import Button from "../../shared/button"
import "./section2.css"
const Section2 = (comp) => {
  return (
    <section style={{backgroundImage:`url(${comp.img})`}} className="section2">
        <h2 style={{color:`${comp.titleColor}`}}>20% Off Your <br /> First Order</h2>
        <p>Suspendisse ac rhoncus nisl,<br /> eu tempor urna. Curabitur vel bibenjgg.</p>
        <Button text={comp.btn}/>
    </section>
  )
}

export default Section2