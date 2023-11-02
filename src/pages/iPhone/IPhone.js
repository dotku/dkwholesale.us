import { useEffect, useState } from "react";
import axios from "axios";

export default function IPhone() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // [error, setError
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          "https://raw.githubusercontent.com/dotku/ecom-iphone/main/dataset.json"
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>iPhone</h1>
      {isLoading && (
        <div className="text-center">
          <div className="spinner-border m-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      {!isLoading && !error && data && (
        <table className="table">
          <>
            <thead>
              <tr>
                <th>Name</th>
                <th>Generation</th>
                <th>Suffix</th>
                <th>Storage</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ name, generation, suffix, storage, price }, idx) => (
                <tr key={idx}>
                  <td>{name}</td>
                  <td>{generation}</td>
                  <td>{suffix}</td>
                  <td>{storage}</td>
                  <td>{(price * 1.1).toFixed(0)}</td>
                </tr>
              ))}
            </tbody>
          </>
        </table>
      )}
    </div>
  );
}
