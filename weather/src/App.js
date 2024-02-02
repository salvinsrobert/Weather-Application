import axios from "axios"
import { useState } from "react";

function App()
{

  const [deg,setdeg]=useState("0")
  const [city, setcity] = useState("France");
  const [desc, setdesc] = useState("Raining");
  const [enteredvalue,setentervalue]=useState("")
  function getdata()
  {
    var weather = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=1309375f30eba61acb7caa9b4ee78fce`);
    
 
    
    weather.then(function(dalta)
    {

     console.log(dalta.data); 
     setdeg(dalta.data.main.temp)
     setdesc(dalta.data.weather[0].main)
     setcity(dalta.data.name)
    }).catch(function(){
      console.log("country invalid")
    })
  
  }
     function handleinput(event) {
       console.log(event.target.value);
       setentervalue(event.target.value);
     }
    return (
      <div className="flex flex-row justify-center h-[100vh] items-center">
        <div
          style={{
            backgroundImage:
              "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
          }}
          className="p-2 rounded-md shadow"
        >
          <h2 className="font-medium">Hey!</h2>
          <p className="text-xs">DO you want to know the weather report :)🌤️</p>
          <input
            type="text"
            onChange={handleinput}
            className="rounded-md h-6 text-sm mt-2 p-1"
            placeholder="Cityname?"
          ></input>
          <br></br>
          <button onClick={getdata}
            className="bg-black text-white rounded-lg p-2
          text-xs"
          >
            Get Report⚡
          </button>
          <p>Degree: {deg} | City: {city} | Weather: {desc}</p>
        </div>
      </div>
    );
}
export default App