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
                <th tile="Name">产品</th>
                <th tile="Generation">代数</th>
                <th tile="Storage">容量</th>
                <th tile="Price">价格</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ name, generation, storage, price }, idx) => (
                <tr key={idx}>
                  <td>{name}</td>
                  <td>{generation}</td>
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
