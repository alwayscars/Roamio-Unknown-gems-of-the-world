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
          <area shape="poly" coords="335,746,347,746,354,754,360,760,365,764,368,772,368,779,372,785,376,797,368,801,364,806,355,815,349,828,346,841,349,846,348,853,341,863,341,878,339,897,331,907,327,916,319,920,310,923,295,921,295,912,292,905,291,894,286,887,283,881,290,860,290,848,288,835,279,826,270,820,269,812,268,799,273,791,264,788,272,776,302,774" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettoothu'); // Navigate to another route
          }}  alt="Region5" />
          <area shape="poly" coords="204,737,213,738,221,739,224,745,234,747,246,751,256,754,268,758,279,763,292,764,289,773,274,775,262,781,265,789,265,796,266,804,264,816,255,816,245,816,248,823,249,830,246,834,233,834,226,839,216,831,205,826,189,827,181,815,173,805" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getten'); // Navigate to another route
          }}  alt="Region6" />
          <area shape="rect" coords="216,740,366,706" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getvirudu'); // Navigate to another route
          }}  alt="Region7" />
          <area shape="rect" coords="380,755,544,718" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getram'); // Navigate to another route
          }}  alt="Region8" />
          <area shape="poly" coords="186,611,194,612,204,611,219,611,231,610,244,608,252,607,265,607,265,614,267,620,270,629,267,635,266,648,256,660,249,682,238,692,233,706,225,712,217,714,206,702,189,647,182,701,202,704,206,702" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettheni'); // Navigate to another route
          }}  alt="Region9" />
          </map>
            
      </>
    )
  }
  
  export default Getd