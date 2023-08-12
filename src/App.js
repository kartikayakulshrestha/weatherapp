import { useState } from 'react';
import './App.css';
//"http://api.weatherapi.com/v1/current.json?key=797cb12a84bf4eaab8f140648230808&q=kanpur&aqi=no" 
//"https://api.ipify.org/?format=json"
function App() {
  
  //ipaddress 
  const [ip,setip]=useState(null)
  const adIpAd="https://api.ipify.org/?format=json"
  fetch(adIpAd).then((valueip)=>{return valueip.json()}).then((valueip2)=>{ setip(valueip2.ip)})
  
  
  
  //now weather of the ip address
  const lang="en"
  const wAdrress=`http://api.weatherapi.com/v1/current.json?key=797cb12a84bf4eaab8f140648230808&q=kanpur&aqi=no&lang=${lang}`

  const [tempc,settempc]=useState(null)
  const [location,setlocation]=useState(null)
  const [humidity,sethumidity]=useState(null)
  const [icon,seticon]=useState(null)
  const [text,settext]=useState(null)
  const [region,setregion]=useState(null)
  const [country,setcountry]=useState(null)
  if (ip != null){
    fetch(wAdrress).then((valueW)=>{
      return valueW.json()
    }).then((valueW2)=>{
        setlocation(valueW2.location.name)
        setregion(valueW2.location.region)
        setcountry(valueW2.location.country)
        settempc(valueW2.current.temp_c)
        settext(valueW2.current.condition.text)
        seticon(valueW2.current.condition.icon)
        sethumidity(valueW2.current.humidity)
    })
  }
  

  return (
    <>
    <h1 className='weather'>Weather APP</h1>
    <div className='container'>
      <div className="card">
          <span className='image'><img src={icon} className="card-img-top" alt="..." /></span>
          <div className="card-body">
          <h5 className="card-title">{location}<sup id="superr">{lang}</sup>
          </h5>
          <p className="card-text">{region},{country}</p>
     </div>
      <ul className="list-group list-group-flush">
      <li className="list-group-item"><h5>{tempc}<sup>o</sup>C</h5></li>
        <li className="list-group-item"><h6>{text}</h6></li>
        <li className="list-group-item"><h6>Humidity:{humidity}</h6></li>
        
      </ul>
  </div>
</div>
    
    </>
  );
}

export default App;
