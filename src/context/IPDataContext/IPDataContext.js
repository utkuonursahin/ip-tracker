import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {SERVERLESS_URL} from "../../config";

const IPData = createContext()

const IPDataProvider = ({ children,setError }) => {
  const [data,setData] = useState()

  useEffect(() => {
    async function init(){
      try{
        const ip = await axios(`https://api.bigdatacloud.net/data/client-ip`)
        if(ip.status !== 200) throw new Error('Failed to reach your IP address')
        const ipData = await axios(`${SERVERLESS_URL}/api?ipAddress=${ip.data.ipString}`)
        setData(ipData.data)
      }catch (error){setError(error)}
    }
    init()
  },[])

  const values = {data, setData}
  return <IPData.Provider value={values}>{children}</IPData.Provider>
}
const useIPData = () => useContext(IPData)
export { IPDataProvider, useIPData }