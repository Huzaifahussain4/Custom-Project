import React, { useState, useEffect } from "react";
// import {
//   ChevronRight,
//   ChevronLeft,
//   ChevronDown,
//   Star,
//   Calendar,
//   Download,
// } from "lucide-react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DownloadIcon from "@mui/icons-material/Download";
import "./LiveSearch.css";
import theme from "../../utils/theme";
import { KpiCard } from "../../components";

export const LiveSearch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const dateOptions = [
    "Last 7 days",
    "Last 28 days",
    "Last 90 days",
    "2025-03-29",
    "2025-04-05",
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://127.0.0.1:8000/api/Tiktok_Live_Search/"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result.data);
      setTotalPages(Math.ceil(result.data.length / itemsPerPage));
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
      setLoading(false);
      console.error("Error fetching data:", err);
    }
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleGoToPage = (event) => {
    if (event.key === "Enter") {
      const page = parseInt(event.target.value);
      if (!isNaN(page) && page > 0 && page <= totalPages) {
        setCurrentPage(page);
        event.target.value = "";
      }
    }
  };

  if (loading) return <div className="loading">Loading data...</div>;
  if (error) return <div className="error">{error}</div>;

  const KPIData = [
    {
      id: "1",
      percent: "2.5%",
      amount: "Gaming",
      color: "#00c853",
      title: "Category",
    },
    {
      id: "2",
      percent: "-5%",
      amount: "8,570",
      color: "#d50000",
      title: "Total GMV",
    },
    {
      id: "3",
      percent: "6%",
      amount: "2,370",
      color: "#00c853",
      title: "UV Value",
    },
    {
      id: "4",
      percent: "-2.5%",
      amount: "92,160",
      color: "#d50000",
      title: "Unit Sold",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}

      <div className="dashboard-header">
        <div
          style={{
            fontSize: "25px",
            fontWeight: "500",
            color: theme.palette.text.main,
          }}
        >
          Live Search
        </div>
        <div className="date-filters">
          {dateOptions.map((option, index) => (
            <button
              key={index}
              className={`date-option ${option === "Last 7 days" ? "active" : ""}`}
            >
              {option}
            </button>
          ))}
          <button className="icon-button">
            <CalendarMonthIcon className="icon-small" />
          </button>
          <button className="export-button">
            <DownloadIcon className="icon-small" />
            <span>Data Export</span>
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {KPIData.map((item) => (
          <KpiCard
            key={item.id}
            percent={item.percent}
            amount={item.amount}
            strokeColor={item.color}
            id={item.id}
            title={item.title}
          />
        ))}
      </div>

      {/* Table */}
      <div className="table-container">
        {/* Table Header */}
        <div className="table-header">
          <div className="col-1 text-left">Live</div>
          <div className="col-1 text-left">Creator Info</div>
          <div className="col-1 text-left header-with-icon">
            Start Time <KeyboardArrowDownIcon className="icon-tiny" />
          </div>
          <div className="col-1 text-left header-with-icon">
            Total Viewers <KeyboardArrowDownIcon className="icon-tiny" />
          </div>
          <div className="col-1 text-center">Products</div>
          <div className="col-1 text-left header-with-icon">
            Total Units Sold <KeyboardArrowDownIcon className="icon-tiny" />
          </div>
          <div className="col-1 text-left header-with-icon">
            Total GMV <KeyboardArrowDownIcon className="icon-tiny" />
          </div>
          <div className="col-1 text-left">UV Value</div>
          <div className="col-1 text-center">Action</div>
        </div>

        {/* Table Body */}
        {getPaginatedData().map((row, index) => (
          <div key={index} className="table-row">
            <div className="col-1 flex-align-center">
              <div className="thumbnail"></div>
              <div className="stream-info">
                <div className="stream-title">
                  {row.Title || "Untitled Stream"}
                </div>
                <div className="stream-status">Playback recorded</div>
                <div className="stream-category">
                  {row.Category || "Beauty & Personal Care"}
                </div>
              </div>
            </div>

            <div className="col-1">
              <div className="creator-container">
                <div className="creator-avatar"></div>
                <div className="creator-info">
                  <div className="creator-name">
                    {row["Creator Name"] || row.Channel || "Unknown Creator"}
                  </div>
                  <div className="creator-followers">
                    Followers: {row.Followers || "0"}
                  </div>
                  <div className="creator-country">
                    <span className="country-flag"></span>
                    <span>{row.Country || "United States"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1  ">
              <div className="time-info">
                <div>Start Time: {row["Start Time"] || "N/A"}</div>
                <div>End Time: {row["End Time"] || "N/A"}</div>
                <div>LIVE Duration: {row["Live Duration"] || "N/A"}</div>
              </div>
            </div>

            <div className="col-1 text-left">{row["Total Viewers"] || "0"}</div>

            <div className="col-1 text-center">{row["Products"] || "0"}</div>

            <div className="col-1 text-left">
              {row["Total Units Sold"] || "0"}
            </div>

            <div className="col-1 text-left">{row["Total GMV"] || "$0"}</div>

            <div className="col-1 text-left">{row["UV Value"] || "$0"}</div>

            <div className="col-1 text-center">
              <button className="star-button">
                <StarBorderIcon
                  className="icon"
                  fill={row.starred ? "#FFD700" : "none"}
                />
              </button>
            </div>
          </div>
        ))}

        {/* Free Plan Message */}
        {data.length === 0 && (
          <div className="free-plan-message">
            <div className="crown-icon"></div>
            <p>
              You are currently on the{" "}
              <span className="highlight">Free Plan</span>, upgrade to paid
              membership
            </p>
            <p>to unlock more features!</p>
            <button className="upgrade-button">Upgrade</button>
          </div>
        )}

        {/* Pagination */}
        <div className="pagination-container">
          <div></div>
          <div className="pagination">
            <button
              className="page-button"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="icon-tiny" />
            </button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum =
                currentPage > 3
                  ? i + currentPage - 2 <= totalPages
                    ? i + currentPage - 2
                    : totalPages - 4 + i
                  : i + 1;

              return pageNum > 0 && pageNum <= totalPages ? (
                <button
                  key={i}
                  className={`page-button ${pageNum === currentPage ? "active" : ""}`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              ) : null;
            })}

            {totalPages > 5 && <span className="ellipsis">...</span>}

            {totalPages > 5 && (
              <button
                className="page-button"
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            )}

            <button
              className="page-button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon className="icon-tiny" />
            </button>

            <div className="go-to-page">
              <span>Go to</span>
              <input
                className="page-input"
                type="text"
                onKeyDown={handleGoToPage}
              />
              <span>page</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
