import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

export default function Commodity() {
  const products = [
    {
      category: "糧食",
      product: "白糖",
      origin: "巴西",
      buy: 300,
      sell: 600,
      msrp: 1000,
      updatedAt: "2023-10-26",
    },
    { category: "糧食", product: "玉米" },
    { category: "糧食", product: "豬肉", sell: 2688 },
    { category: "糧食", product: "雞爪", origin: "巴西", msrp: 6155 },
    { category: "礦", product: "稀土", sell: 60000000 },
    { category: "礦", product: "鈾礦", origin: "加拿大" },
    { category: "礦", product: "煤", origin: "印尼" },
    { category: "作物", product: "棉花" },
  ];
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
      dataField: "buy",
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
      <BootstrapTable keyField="id" data={products} columns={columns} />
    </section>
  );
}
