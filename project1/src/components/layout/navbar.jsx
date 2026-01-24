import "./navbar.css"

function Navbar() {
    return(
       <nav>
        {/* logo */}
        <a href="" className="logo">
            <img src="/logo.webp" alt="logo" />
        </a>

        {/* navlinks  */}
        <ul className="navlinks">
            <li><a href="">Home</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Services</a></li>
        </ul>
        <button className="menu-btn"><i class="ri-menu-fill"></i></button>

       </nav>
    )
}

export default Navbar