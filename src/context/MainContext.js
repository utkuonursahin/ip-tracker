import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {SERVERLESS_URL} from "../config";

const MainContext = createContext()

const MainProvider = ({ children }) => {
  const [data,setData] = useState()
  const [error,setError] = useState()
  const [isLoaded,setIsLoaded] = useState(false)

  useEffect(() => {
    async function init(){
      try{
        const ip = await axios(`https://api.bigdatacloud.net/data/client-ip`)
        if(ip.status !== 200) throw new Error('Failed to reach your IP address')
        const ipData = await axios(`${SERVERLESS_URL}/api?ipAddress=${ip.data.ipString}`)
        setData(ipData.data)
        setIsLoaded(prev => !prev)
      }catch (error){
        setError(error)
        setIsLoaded(prev => !prev)
      }
    }
    init()
  },[])

  const values = {data, setData, error,setError, isLoaded,setIsLoaded}
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>
}
const useMain = () => useContext(MainContext)
export { MainProvider, useMain }