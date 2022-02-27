import {useState} from "react";
import {useIPData} from "../../context/IPDataContext/IPDataContext";
import InfoModal from "./InfoModal/InfoModal";
import axios from "axios";
import {SERVERLESS_URL} from "../../config";

const Header = ({setError}) => {
  const [ipAddress,setIPAddress] = useState('')
  const {data, setData} = useIPData()
  const handleSubmit = async function (e) {
    try{
      e.preventDefault()
      setData(null)
      const res = await axios(`${SERVERLESS_URL}/api?ipAddress=${ipAddress}`)
      setData(res.data)
    }catch (error){setError(error)}
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
