import axios from "axios";
import React, { useState, useEffect } from "react";

function Crypto() {
  // Creacion de hooks
  const [search, setsearch] = useState("");
  const [crypto, setcrypto] = useState([]);
  // Fetch de datos
    const endpoint  = "https://api.coingecko.com/api/v3/coins"

    const showData = () =>{
        axios.get(endpoint).then((res)=>{
            setcrypto(res.data)
            console.log(res.data)
        })
    }
    
    useEffect(() => {
      showData()
    },[])
  // Funcion de busqueda

  // Filtrar datos
  return <div>Crypto</div>;
}

export default Crypto;
