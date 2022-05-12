import './Nav.css';
import cartIcon from "../images/cart.svg";

function Nav(props) {


    const onClickEvent = (event, id) => {
        props.handleNavChange(id)
    };

    return (
        <div class="topnav">
            <a className="active" onClick={(e) => { onClickEvent(e, "Home") }}>Home</a>
            <a onClick={(e) => { onClickEvent(e, "Shop") }}>Shop</a>
            <a onClick={(e) => { onClickEvent(e, "About") }}>About</a>
            <a onClick={(e) => { onClickEvent(e, "Contact") }}>Contact</a>
            <a className="cart" onClick={(e) => { onClickEvent(e, "Cart") }}><img src={cartIcon} className="cart-image" /></a>
        </div>
    );
}

export default Nav;