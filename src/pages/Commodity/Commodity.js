import "fad-react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { nanoid } from "nanoid";
import BootstrapTable from "fad-react-bootstrap-table-next";
import CommodityDataMobileView from "./components/CommodityDataMobileView";
import ReactMarkdown from "react-markdown";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  notation: "compact",
});

const usdNumberSelector = (number) =>
  isNaN(number) ? "n/a" : formatter.format(number);

const products = [
  {
    id: nanoid(),
    category: "Food",
    product: "白糖",
    origin: "巴西",
    buy: "deal",
    sell: "deal",
    msrp: 1000,
    updatedAt: "2024-08-20",
  },
  { id: nanoid(), category: "Food", product: "玉米" },
  { id: nanoid(), category: "Food", product: "豬肉", sell: 2688 },
  {
    id: nanoid(),
    category: "Food",
    product: "雞爪",
    origin: "巴西",
    msrp: 6155,
    updatedAt: "2023-10-26",
  },
  { id: nanoid(), category: "Mine", product: "稀土", sell: 60000000 },
  { id: nanoid(), category: "Mine", product: "鈾矿", origin: "加拿大" },
  { id: nanoid(), category: "Mine", product: "煤", origin: "印尼" },
  { id: nanoid(), category: "Cash Crop", product: "棉花" },
];

const productsSelector = (products) =>
  products.map((p) => ({
    ...p,
    msrp: usdNumberSelector(p.msrp),
    buy: isNaN(p.buy) ? p.buy : usdNumberSelector(p.buy),
    sell: isNaN(p.sell) ? p.sell : usdNumberSelector(p.sell),
  }));

export default function Commodity() {
  const columns = [
    {
      dataField: "category",
      text: "Category",
    },
    {
      dataField: "product",
      text: "Product",
    },
    {
      dataField: "origin",
      text: "Origin",
    },
    {
      dataField: "buy",
      text: "Buy",
    },
    {
      dataField: "sell",
      text: "Sell",
    },
    {
      dataField: "msrp",
      text: "MSRP",
    },
    {
      dataField: "updatedAt",
      text: "Updated At",
    },
  ];

  return (
    <section>
      <h3>大宗貿易</h3>
      <ReactMarkdown
        children={`**DK Wholesale 大宗業務簡介**

DK Wholesale 是一家致力於提供優質產品的領先批發商。我們專注於全球市場，為客戶提供一站式的大宗商品採購和銷售服務。無論是食品、消費品、工業原料還是其他產品，我們擁有豐富的供應鏈資源和專業的物流網絡，確保客戶能夠快速、安全地獲得所需商品。

**我們的服務**
- 全球各類大宗商品的採購：我們幫助客戶從全球不同地區購買優質的產品，確保產品的穩定供應。
- 大宗商品銷售：我們也提供大宗商品的銷售服務，協助客戶拓展市場，滿足多樣化需求。
- 定制物流與配送方案：憑藉我們專業的物流團隊，確保產品高效、安全地運輸到指定地點。

無論您是想要大規模採購還是拓展銷售渠道，我們都將竭誠為您提供量身定制的解決方案，助您輕鬆應對市場挑戰。

`}
      />
      <div className="text-center my-3">
        <a
          href="https://kdhciddmbip.typeform.com/to/r5cZtQFi"
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark"
        >
          採購
        </a>
      </div>
      <div className="d-none d-md-block">
        <BootstrapTable
          keyField="id"
          data={productsSelector(products)}
          columns={columns}
        />
      </div>
      <div className="d-md-none">
        <CommodityDataMobileView products={productsSelector(products)} />
      </div>
    </section>
  );
}
