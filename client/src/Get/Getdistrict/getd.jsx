import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from "lucide-react";
import { Link } from 'react-router-dom';
function Getd() {
    // const [count, setCount] = useState(0)
  const navigate=useNavigate();
    return (
      <>
         <Link to="/getstate" className="custom-button back-button" aria-label="Go back" type="button"><ArrowLeftIcon className="back-button-icon" /></Link>
        <h1>Select the district</h1>
        <img src="\TamilNadu.png" usemap="#roamMap" alt="Roamio Map" />
        <map name="roamMap">
 
           <area shape="circle" coords="203,933,34" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getkk'); // Navigate to another route
          }}  alt="Region1" />
          <area shape="rect" coords="250,689,351,633" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getm'); // Navigate to another route
          }}  alt="Region1" />
          </map>
            
      </>
    )
  }
  
  export default Getd