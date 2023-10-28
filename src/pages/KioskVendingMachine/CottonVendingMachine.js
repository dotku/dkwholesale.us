import { Button } from "bootstrap";

export default function CottonVendingMachine() {
  return (
    <>
      <h3>Cotton Vending Machine</h3>
      <p>Come and get your contton vending machine!</p>
      <div className="row my-3">
        <div className="col-md-6 col-12">
          <img
            src="https://github.com/dotku/dkwholesale.us/assets/1519232/d7cfd605-bc79-4074-8a50-5ae7304710a1"
            alt="Cotton Vending Machine"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 col-12 text-center">
          <video
            poster="https://github.com/dotku/dkwholesale.us/assets/1519232/9ca1eef6-d6d9-4144-9093-03ea01487b8d"
            src="https://github.com/dotku/dkwholesale.us/assets/1519232/3860d8f9-a882-4183-b870-4a2fe6452837"
            controls
            className="img-fluid rounded"
            style={{ height: "896px" }}
          ></video>
        </div>
      </div>
      <div>
        <div>我們提供多種合作方案，包括租用、購買或者共享分潤合作。</div>
        <ul className="row">
          <li className="col-12 col-sm-6 col-lg-3">
            <h5>Low cost and high profit</h5>
            低成本，高利潤
          </li>
          <li className="col-12 col-sm-6 col-lg-3">
            <h5>24hr Automatic Operation</h5>
            24 小時自動運營
          </li>
          <li className="col-12 col-sm-6 col-lg-3">
            <h5>Large touch screen</h5>
            大面積觸摸屏 <br />
          </li>
          <li className="col-12 col-ms-6 col-lg-3">
            <h5>No condensation outdoors in winter</h5>
            冬季不凍結 <br />
          </li>
        </ul>
      </div>
    </>
  );
}
