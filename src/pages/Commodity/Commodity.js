import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { nanoid } from "nanoid";
import BootstrapTable from "react-bootstrap-table-next";
import CommodityDataMobileView from "./components/CommodityDataMobileView";

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
    buy: 300,
    sell: 600,
    msrp: 1000,
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
  { id: nanoid(), category: "Mine", product: "鈾Mine", origin: "加拿大" },
  { id: nanoid(), category: "Mine", product: "煤", origin: "印尼" },
  { id: nanoid(), category: "Cash Crop", product: "棉花" },
];

const productsSelector = (products) =>
  products.map((p) => ({
    ...p,
    msrp: usdNumberSelector(p.msrp),
    buy: usdNumberSelector(p.buy),
    sell: usdNumberSelector(p.sell),
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
      <h3>Commodity</h3>
      <p>我們同時提供全球各類大宗產品的採購和出售服務。</p>
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
