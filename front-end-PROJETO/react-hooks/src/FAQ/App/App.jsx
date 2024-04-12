import Container from '../Container/Container';
import ContainerModal from '../ContainerModal/ContainerModal';
import './App.css'

const App = () => {
    return(
        <Container>
            <ContainerModal
            textButton={"What is Frontend Mentor, and how will it help me?"}
            textModal={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna tortor, facilisis sit amet quam ac, iaculis rutrum ex. In scelerisque orci ac tellus faucibus, et placerat nisi tincidunt. Aenean ut tellus tortor. Phasellus congue dignissim lectus, ac lacinia enim egestas ut. Suspendisse potenti. Nam ultrices et odio non tempor. Aliquam mattis ligula velit, et posuere dui suscipit ac. Quisque at neque ligula. Sed ut bibendum enim. Nam et ex et leo pretium lobortis. Sed viverra pulvinar nunc, vitae luctus ligula tristique eleifend."}/>

            <ContainerModal
            textButton={"Is frontend Mentor free?"}
            textModal={"Nam congue magna a congue commodo. Duis ornare urna non urna dictum vestibulum. Nunc quis velit finibus, hendrerit nunc posuere, mattis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut congue consequat diam, iaculis molestie magna dignissim non. In vulputate consequat velit. Quisque varius odio vitae tincidunt pharetra."}/>

            <ContainerModal
            textButton={"Can I use Frontend Mentor projects in my portfolio?"}
            textModal={"Praesent nec interdum enim, quis egestas elit. Duis sed aliquam nunc, vitae placerat ante. Nam sollicitudin posuere erat. Duis at hendrerit orci, eget dignissim dui. Pellentesque maximus imperdiet mi sit amet tempus. Fusce odio mauris, rutrum non bibendum vel, porta ac erat. Vestibulum at lacus vel mi pretium luctus. Aenean venenatis tellus in purus semper porttitor. Sed ac ipsum et orci dapibus finibus. Praesent sed risus hendrerit quam fermentum consequat."}/>

            <ContainerModal
            textButton={"How can I get help if I'm stuck on a challenge?"}
            textModal={"Vivamus vitae magna sit amet nisi rhoncus sodales. Sed scelerisque eu nibh sed iaculis. Mauris tellus libero, placerat nec sagittis et, posuere eget eros. Phasellus ligula mauris, consectetur eu turpis vel, gravida porta felis. Fusce commodo maximus lorem, vitae mollis urna auctor eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis suscipit iaculis dui, in suscipit felis sollicitudin vel. "}/>
        </Container>
    )
}

export default App;