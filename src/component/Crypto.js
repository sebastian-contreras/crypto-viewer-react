import axios from "axios";
import React, { useState, useEffect } from "react";

function Crypto() {
  // Creacion de hooks
  const [search, setsearch] = useState("");
  const [crypto, setcrypto] = useState([]);
  // Fetch de datos
  const endpoint = "https://api.coingecko.com/api/v3/coins";

  const showData = () => {
    axios.get(endpoint).then((res) => {
      setcrypto(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    showData();
  }, []);

  // Funcion de busqueda
  const searcher = (e) => {
    setsearch(e.target.value);
  };
  // Filtrar datos

  const result = !search
    ? crypto
    : crypto.filter((crypto) =>
        crypto.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="search..."
        className="form-control"
      />
      <table className="table table-dark mt-3 table-hover">
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Prices</th>
            <th>Price 24hs</th>
          </tr>
        </thead>
        <tbody>
          {result.map((data) => (
            <tr key={data.id}>
              <td>{data.market_data.market_cap_rank}</td>
              <td>
                <small>
                  <img src={data.image.small}></img>
                  {data.name}
                </small>
              </td>
              <td>{data.symbol.toUpperCase()}</td>
              <td>{data.market_data.current_price.bmd.toFixed(2)}</td>
              <td>
                {data.market_data.price_change_percentage_24h < 0 ? (
                  <span className="badge bg-danger">
                    {data.market_data.price_change_percentage_24h}
                  </span>
                ) : (
                  <span className="badge bg-success">
                    {data.market_data.price_change_percentage_24h}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Crypto;
