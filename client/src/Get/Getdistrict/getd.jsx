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
          }}  alt="Region2" />
          <area shape="circle" coords="421,659,46" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getds'); // Navigate to another route
          }}  alt="Region3" />
          <area shape="poly" coords="180,860,180,846,188,833,200,828,213,828,221,837,229,845,231,836,247,836,258,833,267,829,281,829,284,838,290,844,287,856,284,864,284,875,288,880,288,887,290,899,292,909,299,917,305,920,305,928,289,930,281,937,275,945,190,878,268,945" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettiru'); // Navigate to another route
          }}  alt="Region4" />
          </map>
            
      </>
    )
  }
  
  export default Getd