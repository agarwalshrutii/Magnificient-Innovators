import "./header.css"
import Cards from "../cards/cards";
export default function Header () {
    return ( <>
        <header>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Welcome to</h1>
              <p>CSD Canteen</p>
              <button type="button">Login In/Sign Up</button>
            </div>
            <Cards/>
          </div>
        </div>
      </header> 
      
      <Cards/></>
    );
}
