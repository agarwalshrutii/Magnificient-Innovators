import "./navbar.css";


export default function Navbar () {
    return (
        <div class="nav">
        <title>Nav Bar</title>
        <link rel="stylesheet" href="style3.css"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    
    <body>
    <div class="navbar">
        
    <div class="menu-bar">
    <img src="logo.png" class="logo"></img>
        <ul>
        
            <li ><a href="#"><i class="fa fa-home"></i>HOME</a></li>
            <li><a href="#"><i class="fa fa-user"></i>ABOUT</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Mission</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">Team</a></li>
                </ul>
            </div>
            </li>
            <li><a href="#"><i class="fa fa-clone"></i>PRODUCT</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Toiletries</a></li>
                    <li><a href="#">Household Requirements</a></li>
                    <li><a href="#">General Items</a></li>
                    <li><a href="#">Watches & Stationery</a></li>
                    <li><a href="#">Liquor</a></li>
                    <li><a href="#">Food & Medicine</a></li>
                </ul>
            </div>
            </li>
            <li><a href="#"><i class="fa fa-phone"></i>CONTACT</a></li>
        </ul>
    </div>
    </div>
    </body>
   </div>

    )
}