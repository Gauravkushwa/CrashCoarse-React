import { useContext } from "react"
import '../App.css'
import { ThemeContext } from "../context/ThemeContext"
import { userContext } from "../context/UserContext";

const HomePage = ()=> {
    const {theme, ToggleTheme} = useContext(ThemeContext);
    const {user, ToggleUser} = useContext(userContext);

    return (
        <>
         <div
          style={{
            backgroundColor : theme == "light" ? 'mediumaquamarine' : "yellow",
            padding: "20px",
            color: theme == "light" ? 'black' : "blue"
          }}
         >
            <h1>These is Theme Context</h1>
            <button onClick={ToggleTheme}>Toggle Theme</button>

         </div>
         <div
           style={{
            backgroundColor : user === "LogOut" ? "red" : "green",
            padding: "20px",
            color: user === "LogOut" ? "white" : "black",
          }}
         >
            <h1>These is User Context</h1>
            {user === "LogIn" && <h2>Welcome, <b>Gaurav !</b></h2>}
            <button onClick={ToggleUser} className="user"
             style={{backgroundColor:user === "LogOut" ? "green" : "red",
                height: "30px", width: "90px",borderRadius: "5px",
                cursor: "pointer"
             }}
            >{user === "LogOut" ? "LogIn" : "LogOut"}</button>
            
            <h2>Status: {user}</h2>
         </div>
        </>
    )
}

export default HomePage;