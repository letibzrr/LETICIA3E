import ButtonCard from "../ButtonCard/ButtonCard";
import './SectionCars.css'

const SectionCars = ({image, title, text, color}) => {
    return(
          <article style={{backgroundColor: color}}>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{text}</p>
            <ButtonCard name="Learn More" />
        </article>
    )
}

export default SectionCars;