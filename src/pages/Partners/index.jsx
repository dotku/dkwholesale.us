export const merchandices = [
  {
    name: "ZY International Trade",
    url: "https://zyintltrade.com/",
    business: "nitrile gloves",
  },
  {
    name: "Ultra Stretch",
    url: "https://usproglove.com/",
    business: "nitrile gloves",
  },
  {
    name: "Qiutai",
    url: "https://qiutaisweater.en.alibaba.com/",
    business: "sweater and fabric fashion products",
  },
  {
    name: "Ingrem Gaming",
    url: "https://ingrem.com/",
    business: "game workstation chair",
  },
  {
    name: "Harotech",
    url: "https://herotech.dkwholesale.us",
    business: "3C digital products, mainly iPhones",
  },
  {
    name: "Carku",
    url: "http://car-ku.com",
    business: "auto car jump start",
  },
  {
    name: "Betavee",
    url: "http://betavee.com",
    business: "Battery bank",
  },
  {
    name: "Kogado",
    url: "http://jp-kagado.com",
    business: "perfume",
  },
  {
    name: "Yusheng",
    url: "https://dotku.us/dongguan-houjie-yusheng-shoes/",
    business: "shoes",
  },
  {
    name: "Ouxi",
    url: "https://ouxi.us",
    business: "electrinic bike",
  },
];

export const professionals = [
  {
    name: "JYTech",
    url: "https://jytech.us",
    business: "IT consultant",
  },
  {
    name: "负负得正",
    business: null,
  },
  {
    name: "稻草人影业",
    business: null,
  },

  {
    name: "Intelligenic",
    url: "https://intelligenic.ai/",
    business: "project management AI",
  },
  {
    name: "Movie Hub",
    url: "https://moviebol.com",
    business: "entertainment social network",
  },
  {
    name: "Aluma Advisors",
    url: "https://alumadvisors.com/",
    business: "international student service",
  },
  {
    name: "Tipi Travel",
    url: "https://tipitravel.com/",
    business: "affortable global travel program",
  },
  {
    name: "Qixing AuPair",
    url: "https://qixing-au-pair.mailchimpsites.com/",
    business: "International student aupair",
  },
  {
    name: "TSOai",
    url: "https://tsoai.com",
    business: "AI technology education institution",
  },
];

export const medias = [
  {
    name: "Nation X",
    business: null,
  },
  {
    name: "赤兔华盟",
    business: null,
  },
  {
    name: "YEA Media",
    business: null,
  },
  {
    name: "News for Chinese",
    name_cn: "老中新闻网",
    url: "https://newsforchinese.com/",
    business: null,
  },
  {
    name: "Chinese In LA",
    name_cn: "洛杉矶资讯网",
    url: "https://www.chineseinla.com/",
    business: null,
  },
  {
    name: "The Legdends Media",
    name_cn: "加拿大传奇文化",
    url: "https://thelegendsmedia.com/",
    business: null,
  },
  {
    name: "Singtao USA",
    name_cn: "星岛日报",
    url: "https://www.singtaousa.com/",
    business: null,
  },
];

export function PartnerItem({ data }) {
  return (
    <li>
      {data.url ? (
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.name}
        </a>
      ) : (
        <>{data.name}</>
      )}{" "}
      <span>{data.business}</span>
    </li>
  );
}

export default function Partners() {
  return (
    <>
      <h2 className="d-flex align-items-center">
        Partners{" "}
        <span className="badge rounded-pill text-bg-light fs-6">
          ({merchandices.length + professionals.length + medias.length})
        </span>
      </h2>
      <div className="row">
        <div className="col">
          <h3 className="d-flex align-items-center">
            <span>merchandise</span>
            <span className="badge rounded-pill text-bg-light fs-6">
              ({merchandices.length})
            </span>
          </h3>
          <ul>
            {merchandices.map((m) => (
              <PartnerItem data={m} key={m.name} />
            ))}
          </ul>
        </div>
        <div className="col">
          <h3 className="d-flex align-items-center">
            <span>professional</span>
            <span className="badge rounded-pill text-bg-light fs-6">
              ({professionals.length})
            </span>
          </h3>
          <ul>
            {professionals.map((p) => (
              <PartnerItem data={p} key={p.name} />
            ))}
          </ul>
        </div>
        <div className="col">
          <h3 className="d-flex align-items-center">
            <span>medias</span>
            <span className="badge rounded-pill text-bg-light fs-6">
              ({medias.length})
            </span>
          </h3>
          <ul>
            {medias.map((p) => (
              <PartnerItem data={p} key={p.name} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
