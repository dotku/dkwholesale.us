export default function CommodityDataMobileView({ products }) {
  const categories = [...new Set(products.map((p) => p.category))].sort(
    (a, b) => a.localeCompare(b)
  );
  return (
    <div className="container">
      {categories.map((c, k) => (
        <CategoryItems
          key={k}
          products={products.filter((p) => p.category === c)}
        />
      ))}
    </div>
  );
}

function CategoryItems({ products }) {
  return (
    <>
      <h3>{products[0].category}</h3>
      {products.map((p, idx) => (
        <div className="card my-3" key={idx}>
          <div className="card-body">
            <div className="row">
              <p className="col-6">product</p>
              <p className="col-6">{p.product}</p>
            </div>
            <div className="row">
              <p className="col-6">origin</p>
              <p className="col-6">{p.origin}</p>
            </div>
            <div className="row">
              <p className="col-6">msrp</p>
              <p className="col-6">{p.msrp}</p>
            </div>
            <div className="row">
              <p className="col-6">buy</p>
              <p className="col-6">{p.buy}</p>
            </div>
            <div className="row">
              <p className="col-6">sell</p>
              <p className="col-6">{p.sell}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
