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
      <h1>小赤湾区货运物流</h1>
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
      <table>
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
                <td>${(city.rate * 1.3).toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default LogisticsPage;
