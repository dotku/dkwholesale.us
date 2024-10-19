import React, { useState } from "react";
import { cities } from "./data"; // Import the city data

function LogisticsPage() {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("asc");

  // Function to filter cities based on search input
  const filteredCities = cities.filter((city) =>
    city.city.toLowerCase().includes(search.toLowerCase())
  );

  // Sort cities by rate (ascending or descending)
  const sortedCities = filteredCities.sort((a, b) =>
    sortType === "asc" ? a.rate - b.rate : b.rate - a.rate
  );

  return (
    <div>
      <h1>LD 湾区贸易货运物流</h1>
      <p>
        我们是位于旧金山湾区的物流企业，多年服务于奥克兰（Oakland）海港，在行业中遥遥领先。
      </p>
      <p>如果您需要任何物流支持，欢迎联系微信: shawn0904</p>

      {/* Search Input */}
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search City..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Sort Button */}
        <button
          onClick={() => setSortType(sortType === "asc" ? "desc" : "asc")}
          className="btn btn-outline-secondary"
        >
          {sortType === "asc" ? (
            <i className="bi bi-sort-down-alt"></i>
          ) : (
            <i className="bi bi-sort-up-alt"></i>
          )}
        </button>
      </div>

      {/* Table to display the city and rates */}
      <table className="table" style={{ maxWidth: 300 }}>
        <thead>
          <tr>
            <th className="text-center">City</th>
            <th className="text-center">Rate</th>
          </tr>
        </thead>
        <tbody>
          {sortedCities
            .filter((_item, idx) => idx < 10)
            .map((city) => (
              <tr key={city.city}>
                <td className="text-start px-3">{city.city}</td>
                <td>${(city.rate * 1.5).toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <p className="small">** 以上价格仅供参考，最终价格根据情况来调整。</p>
      </div>
      <div>
        <h2>案例: 从奥克兰到旧金山的货物运输费用</h2>
        <p>
          从奥克兰到旧金山的货物运输费用取决于你使用的卡车类型、货物数量以及选择的运输服务。以下是一些常见的运输方式和大致费用：
        </p>
        <p>
          <strong>1. LTL货运（零担运输）：</strong>{" "}
          如果你的货物不是整车，而是托盘或箱子，零担运输是经济的选择。费用根据货物重量和体积变化，但对于奥克兰到旧金山这种短途运输，每个托盘的费用大约在{" "}
          <strong>100至300美元</strong> 之间。通常当天或1-2个工作日内送达。
        </p>
        <p>
          <strong>2. FTL货运（整车运输）：</strong>{" "}
          如果需要整车运输，费用取决于卡车大小（例如26英尺货车或更大）。从奥克兰到旧金山的一次单程运输，整车费用大约在{" "}
          <strong>500至800美元</strong>{" "}
          之间。费用通常包括燃油、人工（装卸货）以及可能的额外费用（如易碎品或需要温控的货物）。
        </p>
        <p>
          <strong>3. 快递/加急送货服务：</strong>{" "}
          如果你的货物较小（如箱子或小件商品），可以考虑使用快递或同城加急送货服务。例如，像FedEx同日送达或本地专门的快递公司，费用大约在{" "}
          <strong>100至250美元</strong> ，具体取决于货物的大小和重量。
        </p>
        <p>
          如果你有特定的货物类型（如易腐商品、大件物品）或需要帮助寻找具体的运输公司，可以进一步提供帮助。
        </p>
      </div>
    </div>
  );
}

export default LogisticsPage;
