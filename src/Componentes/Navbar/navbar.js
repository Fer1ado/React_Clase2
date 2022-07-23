import "./navbar.css"
import Button from "../Button/button"

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

        <div class="cart-btn algo">
            <span class="nav-icon">
                <i class="fas fa-cart-plus fa-xl"></i>
            </span>
                <div class="cart-items">0</div>
        </div>
        </navbar>
    )

}

export default Navbar