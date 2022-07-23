import "./navbar.css"
import Button from "../Button/button"
import Carrito from "../Cart-Widget/Carrito"

const Navbar = () =>{

    return (
        <navbar>
            
            <div>
                <img class="logo" src="/LOGO-ZIMA.png" alt="LOGO-ZIMA"/>
            </div>
            <div>
                <Button color="darkviolet"> Platos </Button>
                <Button color="darkviolet"> Cuencos </Button>
                <Button color="darkviolet"> Tazones </Button>
                <Button color="darkviolet"> Tazas </Button>
                <Button color="darkviolet"> Botellas </Button>
            </div>
        
            <Carrito/>

        </navbar>
    )

}

export default Navbar