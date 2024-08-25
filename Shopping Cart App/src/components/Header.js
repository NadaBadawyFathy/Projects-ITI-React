import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} style={{cursor:'pointer'}}>Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)} style={{cursor:'pointer'}}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}
export default Header;
