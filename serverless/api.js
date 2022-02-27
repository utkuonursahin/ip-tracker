const axios = require("axios");
exports.handler = async function (event,context) {
  const {ipAddress} = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;
  try{
    const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`)
    if(response.status !== 200) throw new Error("Something went wrong with IP location API")
    return {
      statusCode:200,
      body: JSON.stringify(response.data)
    }
  }
  catch (error){
    return {statusCode: 422, body: error.stack}
  }
}