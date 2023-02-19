import { useState } from "react";

const Title = () => {
    return (
      <div>
        <a href="/">
          {" "}
          <img
            alt="Food Haveli"
            src="https://i.pinimg.com/originals/28/65/07/28650724b95899bd15c7266906a738fa.png"
          />
          ;
        </a>
      </div>
    );
  };

  const Header = () => {
    const[isLoggedIn ,setIsLogged]=useState(false);
    return (
      <div className="Nav-list">
        <Title />
        <div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Food List</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn ?(<button onClick={()=>setIsLogged(false)}>Logout</button>):(<button onClick={()=>setIsLogged(true)}>Login</button>)}
      </div>
    );
  };

  export default Header;