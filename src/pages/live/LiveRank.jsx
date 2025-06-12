import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Star,
  Calendar,
  Download,
} from "lucide-react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DownloadIcon from "@mui/icons-material/Download";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

import "./LiveSearch.css";
import theme from "../../utils/theme";
import { CategoryRevenueChart, KpiCard } from "../../components";

export const LiveRank = () => {
  const [data, setData] = useState([]);
  const [KPIsData, setKPIsData] = useState([]);
  console.log("🚀 ~ LiveRank ~ KPIsData:", KPIsData[0]);
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
        "http://127.0.0.1:8000/api/Tiktok_Live_Rank/"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result.data);
      setKPIsData(result.kpis_by_category);
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

  // const KPIData = [
  //   {
  //     id: "1",
  //     percent: "2.5%",
  //     amount: "Gaming",
  //     color: theme.palette.secondary.main,
  //     title: "Category",
  //     icon: <CategoryOutlinedIcon />,
  //     bgColor: theme.palette.primary.main,
  //     fcolor: "#fff",
  //     graphData: false,
  //   },
  //   {
  //     id: "2",
  //     percent: "-5%",
  //     amount: "8,570",
  //     color: "#d50000",
  //     title: "Total GMV",
  //     icon: <CategoryOutlinedIcon />,
  //     bgColor: "#fff",
  //     graphData: true,
  //   },
  //   {
  //     id: "3",
  //     percent: "6%",
  //     amount: "2,370",
  //     color: "#00c853",
  //     title: "UV Value",
  //     icon: <CategoryOutlinedIcon />,
  //     bgColor: "#fff",
  //     graphData: true,
  //   },
  //   {
  //     id: "4",
  //     percent: "-2.5%",
  //     amount: "92,160",
  //     color: "#d50000",
  //     title: "Unit Sold",
  //     icon: <CategoryOutlinedIcon />,
  //     bgColor: "#fff",
  //     graphData: true,
  //   },
  // ];

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
          Live Rank
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
          justifyContent: "center",
          gap: "15px",
          alignItems: "center",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {KPIsData && (
          <>
            <KpiCard
              key={KPIsData[0].id || 0}
              percent={KPIsData[0].percent || "0%"}
              amount={KPIsData[0].Category || "N/A"}
              category={"Category"}
              icon={<CategoryOutlinedIcon />}
              strokeColor={theme.palette.secondary.main}
              id={KPIsData[0].id || "0"}
              bgColor={theme.palette.primary.main}
              fcolor={"#fff"}
              graphData={false}
            />
            <KpiCard
              key={KPIsData[0].id || 0}
              percent={KPIsData[0].percent || "0%"}
              amount={KPIsData[0].Category || "N/A"}
              category={"Category"}
              icon={<CategoryOutlinedIcon />}
              strokeColor={theme.palette.secondary.main}
              id={KPIsData[0].id || "0"}
              bgColor={theme.palette.background.default}
              fcolor={"#000"}
              graphData={false}
            />
          </>
        )}
      </div>

      <div style={{ marginBottom: "20px", width: "100%" }}>
        <CategoryRevenueChart />
      </div>

      {/* Table with updated columns */}
      <div className="table-container">
        {/* Table Header */}
        <div className="table-header">
          <div className="col-1 text-left tableTitle">Live Session</div>
          <div className="col-1 text-left tableTitle">Creator Info</div>
          {/* <div className="col-1 text-left header-with-icon tableTitle">
            Start Time <KeyboardArrowDownIcon className="icon-tiny" />
          </div> */}
          <div className="col-1 text-left tableTitle">LIVE Duration</div>
          {/* <div className="col-1 text-right header-with-icon tableTitle">
            Total Viewers{" "}
            <KeyboardArrowDownIcon className="icon-tiny tableTitle" />
          </div> */}
          <div className="col-1 text-left header-with-icon tableTitle">
            Peak Viewers{" "}
            <KeyboardArrowDownIcon className="icon-tiny tableTitle" />
          </div>
          <div className="col-1 text-left header-with-icon tableTitle">
            Total Units Sold{" "}
            <KeyboardArrowDownIcon className="icon-tiny tableTitle" />
          </div>
          <div className="col-1 text-left tableTitle">Total GMV</div>
          {/* <div className="col-1 text-center tableTitle">Action</div> */}
        </div>

        {/* Table Body */}
        {getPaginatedData().map((row, index) => (
          <div key={index} className="table-row">
            <div className="col-1 flex-align-center thumbnail-container">
              <div className="thumbnail">
                <img
                  src={
                    row.imageurl ||
                    "https://play-lh.googleusercontent.com/5vcrZX1-Rx6NpuOASKSUWqMpQqbFTiLOZ-IV8CehAP3XycsmaKJvp36BJOxaKhq8TWc"
                  }
                  alt={row.Shop || "Shop Thumbnail"}
                  className="thumbnail-img"
                />
              </div>
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
                <div className="creator-avatar">
                  <img
                    src="https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp"
                    alt=""
                    className="avatar-img"
                  />
                </div>
                <div className="creator-info">
                  <div className="creator-name">
                    {row["Creator Name"] || row.Channel || "Unknown Creator"}
                  </div>
                  <div className="creator-followers">
                    Followers: {row.Followers || "0"}
                  </div>
                  <div className="creator-country">
                    <span className="country-flag"></span>
                    <span>{row.Location || "United States"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-1">
              <div className="time-info">
                <div>Start Time: {row["Start Time"] || "N/A"}</div>
                <div>End Time: {row["End Time"] || "N/A"}</div>
              </div>
            </div> */}

            <div className="col-1">{row["Live Duration"] || "N/A"}</div>

            {/* <div className="col-1 text-left">{row["Total Viewers"] || "0"}</div> */}

            <div className="col-1 text-left">{row["Peak Viewers"] || "0"}</div>

            <div className="col-1 text-left">
              {row["Total Units Sold"] || "0"}
            </div>

            <div className="col-1 text-left">{row["Total GMV"] || "$0"}</div>

            {/* <div className="col-1 text-center">
              <button className="star-button">
                <Star
                  className="icon"
                  fill={row.starred ? "#FFD700" : "none"}
                />
              </button>
            </div> */}
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
