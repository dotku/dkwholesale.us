import clx from "classnames";

export default function MagonioProduct() {
  const data = [
    {
      img: "/assets/images/maganio/1461729308965_.pic.jpg",
      alt: "labtory",
    },
    {
      img: "/assets/images/maganio/1471729309149_.pic.jpg",
      alt: "factory",
    },
    {
      img: "/assets/images/maganio/1481729310129_.pic.jpg",
      alt: "product colors",
    },
    {
      img: "/assets/images/maganio/1491729310139_.pic.jpg",
      alt: "product introduction",
    },
    {
      img: "/assets/images/maganio/1501729310151_.pic.jpg",
      alt: "product gray color recovery",
    },
  ];
  return (
    <>
      <h3>Maganio</h3>
      <div className="mb-3">
        <div
          id="carouselExampleControls"
          className="carousel slide max-height"
          data-bs-ride="carousel"
        >
          <div
            className="carousel-inner bg-dark"
            style={{ maxHeight: 300, overflow: "hidden" }}
          >
            {data.map((item, idx) => (
              <div className={clx("carousel-item", { active: idx === 0 })}>
                <center>
                  <img
                    src={item.img}
                    className="d-block"
                    alt={item.alt}
                    style={{
                      height: 250,
                      overflowY: "hidden",
                      textAlign: "center",
                    }}
                  />
                </center>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p>
        MAGANIO沙龙品牌系列美发产品在全球展出，覆盖全球代理商和线下线上贸易商，近年来在北美和
        中东市场迅速扩张。
      </p>
      <p>
        工厂孵化了多个品牌的美发产品，销往63多个国家，累计产值已超过10亿美元。工厂占地面积8000
        多平方米，工厂现有员工150人，以专业的团队，严格高效的管理，先进的设备，打造美发行业的优
        秀产品。MAGANIO系列产品主要有一洗染、染发膏、造型发蜡、护发精油、洗发水、护发素、角蛋
        白护发产品。
      </p>
      <p>
        我们的车间完全按照国际GMPC标准设计和建造。在生产线方面，我们有8条全自动生产线，其中2
        条全自动生产线，所有机器都是自动的，包括真空搅拌机，自动灌装机，自动贴标机，自动覆膜
        机。公司拥有熟练的生产工人和技术人员，成熟完善的质量管理体系。
      </p>
    </>
  );
}
