import SectionCars from "../SectionCars/SectionCars"
import IconSedans from "../../../images/icon-sedans.svg"
import IconSuvs from "../../../images/icon-suvs.svg"
import IconLuxury from "../../../images/icon-luxury.svg"
import './App.css'

const App = () => {
    return(
        <section>
        <SectionCars
            title="SEDANS"
            text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            image={IconSedans}
            color="hsl(31, 77%, 52%)"
        />
        <SectionCars
            title="SUVS"
            text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            image={IconSuvs}
            color="hsl(184, 100%, 22%)"
        />
        <SectionCars
            title="LUXURY"
            text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
            image={IconLuxury}
            color="hsl(179, 100%, 13%)"
        />
        </section>
    )
}

export default App;