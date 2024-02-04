import "./index.css"

const Header =()=>{
return(
<div className="header">
    <div className="logo">
        <h4>Space</h4>
    </div>
    <div className="menu">
        <ul className="navbar">
            <li>Products
                <i class="fa-solid fa-angle-down"></i>
                </li>
            <li>Templates</li>
            <li>Resources<i class="fa-solid fa-angle-down"></i></li>
        </ul>
    </div>
    <div className="login">
        <a href="">Log in</a>
        <button className="start">Get Started</button>
    </div>
</div>
)
};
export default Header;