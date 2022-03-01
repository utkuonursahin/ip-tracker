import axios from "axios";
import {useState} from "react";
import {useMain} from "../../context/MainContext";
import InfoModal from "./InfoModal/InfoModal";
import {SERVERLESS_URL} from "../../config";

const Header = () => {
  const [ipAddress,setIPAddress] = useState('')
  const {data, setData, setError, setIsLoaded} = useMain()
  const handleSubmit = async function (e) {
    try{
      e.preventDefault()
      setData(null)
      setIsLoaded(prev => !prev)
      const res = await axios(`${SERVERLESS_URL}/api?ipAddress=${ipAddress}`)
      setIsLoaded(prev => !prev)
      setIPAddress('')
      setData(res.data)
    }catch (error){
      setError(error)
      setIsLoaded(prev => !prev)
      setIPAddress('')
    }
  }
  return (
      <header className="header">
        <h1 className="header__heading">IP Address Tracker</h1>
        <form action="#" className="header__form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search for any IP address or domain"
                 value={ipAddress} onChange={e => setIPAddress(e.target.value)}/>
          <button className="btn-submit">
            <img src="./icon-arrow.svg" alt="Icon arrow"/>
          </button>
        </form>
        {data && <InfoModal/>}
      </header>
  );
};

export default Header;
