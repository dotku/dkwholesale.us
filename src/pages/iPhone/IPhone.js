import { useEffect, useState } from "react";
import axios from "axios";

export default function IPhone() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // [error, setError
  const [data, setData] = useState([]);
  const [profitRate, setProfitRate] = useState(1.1);
  const [coupon, setCoupon] = useState("");

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

  const handleCouponInputSubmit = (e) => {
    console.log("handleCouponInputSubmit");
    if (["dk", "zhao", "kobe"].includes(coupon.toLocaleLowerCase())) {
      alert("恭喜你，获得 5% 优惠券");
      setProfitRate(1.05);
    }
  };

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
        <>
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
                    <td>{(price * profitRate).toFixed(0)}</td>
                  </tr>
                ))}
              </tbody>
            </>
          </table>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Coupon 优惠券"
              aria-label="Coupon 优惠券"
              aria-describedby="button-addon2"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleCouponInputSubmit}
            >
              提交
            </button>
          </div>
        </>
      )}
    </div>
  );
}
