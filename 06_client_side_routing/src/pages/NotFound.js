import {useNavigate} from "react-router-dom"
function NotFound(){
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }
    return(
        <div>
            <h2>Page Not Found!</h2>
            <button onClick={handleClick}>Home</button>
        </div>
    )
}

export default NotFound;