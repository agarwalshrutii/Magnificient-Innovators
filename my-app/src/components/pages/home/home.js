import { LuShoppingCart,LuUser } from "react-icons/lu";
import AlertDialog from "../../popup/popup";
import Avatar from '@mui/material/Avatar';
import "./homepage.css"

export default function homepage ()
{
    return (
        <div class = "homepage">


<div class="nav">
<body>
<div class="navbar">

<div class="menu-bar">
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
    <li><a href="" class="cart"><LuShoppingCart/></a></li>
</ul>
</div>
</div>
</body>
</div>

<div class ="title"><span>PRODUCTS</span></div>


<div className="col">
            <div className="card">
                   
                   <button type = "button" className="button1">Explore more</button>
                </div>
                <div className="card">
                   
                   <button type = "button" className="button1">Explore more</button>
                </div>
                <div className="card">
                   
                   <button type = "button" className="button1">Explore more</button>
                </div>
                <div className="card">
                   
                   <button type = "button" className="button1">Explore more</button>
                </div>
                <div className="card">
                   
                   <button type = "button" className="button1">Explore more</button>
                </div>
                <div className="card">
                   
                   <button type = "button" className="button1">Explore more</button>
                </div>
                <div className="card">
                   
                   <button type = "button" className="button1">Explore more</button>
                </div>
                <div className="card">
                   
                   <button type = "button" className="button1">Explore more</button>
                </div>

</div>








</div>
    );
}