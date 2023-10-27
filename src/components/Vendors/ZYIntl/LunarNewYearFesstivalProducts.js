export default function LunarNewYearFestivalProducts() {
  const products = [
    { filename: "WX20231026-211914@2x.png" },
    { filename: "WX20231026-212331@2x.png" },
    { filename: "WX20231026-212603@2x.png" },
    { filename: "WX20231026-212840@2x.png" },
    { filename: "WX20231026-211944@2x.png" },
    { filename: "WX20231026-212342@2x.png" },
    { filename: "WX20231026-212612@2x.png" },
    { filename: "WX20231026-212852@2x.png" },
    { filename: "WX20231026-212005@2x.png" },
    { filename: "WX20231026-212354@2x.png" },
    { filename: "WX20231026-212622@2x.png" },
    { filename: "WX20231026-212901@2x.png" },
    { filename: "WX20231026-212019@2x.png" },
    { filename: "WX20231026-212404@2x.png" },
    { filename: "WX20231026-212632@2x.png" },
    { filename: "WX20231026-212915@2x.png" },
    { filename: "WX20231026-212029@2x.png" },
    { filename: "WX20231026-212412@2x.png" },
    { filename: "WX20231026-212643@2x.png" },
    { filename: "WX20231026-212924@2x.png" },
    { filename: "WX20231026-212041@2x.png" },
    { filename: "WX20231026-212421@2x.png" },
    { filename: "WX20231026-212658@2x.png" },
    { filename: "WX20231026-212932@2x.png" },
    { filename: "WX20231026-212055@2x.png" },
    { filename: "WX20231026-212432@2x.png" },
    { filename: "WX20231026-212709@2x.png" },
    { filename: "WX20231026-212947@2x.png" },
    { filename: "WX20231026-212138@2x.png" },
    { filename: "WX20231026-212441@2x.png" },
    { filename: "WX20231026-212720@2x.png" },
    { filename: "WX20231026-213002@2x.png" },
    { filename: "WX20231026-212159@2x.png" },
    { filename: "WX20231026-212453@2x.png" },
    { filename: "WX20231026-212732@2x.png" },
    { filename: "WX20231026-213014@2x.png" },
    { filename: "WX20231026-212213@2x.png" },
    { filename: "WX20231026-212503@2x.png" },
    { filename: "WX20231026-212742@2x.png" },
    { filename: "WX20231026-213025@2x.png" },
    { filename: "WX20231026-212226@2x.png" },
    { filename: "WX20231026-212524@2x.png" },
    { filename: "WX20231026-212759@2x.png" },
    { filename: "WX20231026-213042@2x.png" },
    { filename: "WX20231026-212238@2x.png" },
    { filename: "WX20231026-212533@2x.png" },
    { filename: "WX20231026-212810@2x.png" },
    { filename: "WX20231026-213054@2x.png" },
    { filename: "WX20231026-212253@2x.png" },
    { filename: "WX20231026-212544@2x.png" },
    { filename: "WX20231026-212818@2x.png" },
    { filename: "WX20231026-212304@2x.png" },
    { filename: "WX20231026-212554@2x.png" },
    { filename: "WX20231026-212830@2x.png" },
  ];
  const basepath = "/assets/images/lunar-new-year-festival-products";
  return (
    <>
      <h3>Lunar New Year Festerval Products</h3>
      {products.map((p, idx) => (
        <img
          key={idx}
          src={`${basepath}/${p.filename}`}
          className="img-fluid col-3"
          alt={`${p.filename}`}
        />
      ))}
    </>
  );
}
