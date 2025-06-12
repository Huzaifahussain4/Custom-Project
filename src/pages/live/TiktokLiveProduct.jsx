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
import "./LiveSearch.css";
import theme from "../../utils/theme";

export const TiktokLiveProduct = () => {
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
        "http://127.0.0.1:8000/api/Tiktok_Live_Product/"
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
          TikTok Live Product
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

      {/* Table with product columns */}
      <div className="table-container">
        {/* Table Header */}
        <div className="table-header">
          <div className="col-1 text-left">Products</div>
          <div className="col-1 text-left">Shop</div>
          <div className="col-1 text-left header-with-icon">
            LIVE Units Sold <KeyboardArrowDownIcon className="icon-tiny" />
          </div>
          <div className="col-1 text-left header-with-icon">
            LIVE GMV <KeyboardArrowDownIcon className="icon-tiny" />
          </div>
          <div className="col-1 text-left header-with-icon">
            LIVE Sessions <KeyboardArrowDownIcon className="icon-tiny" />
          </div>
          <div className="col-1 text-left">Top GMV LIVE Streams</div>
          {/* <div className="col-1 text-center">Action</div> */}
        </div>

        {/* Table Body */}
        {getPaginatedData().map((row, index) => (
          <div key={index} className="table-row">
            <div className="col-1 flex-align-center ">
              <div className="creator-avatar">
                <img
                  src="https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp"
                  alt="Creator Avatar"
                  className="avatar-img"
                />
              </div>

              <div className="product-info">
                <div className="product-title">
                  {row.Product ||
                    "Women's Solid Color Zipper Corset Shapewear Romper"}
                </div>
                <div className="product-price">
                  Price: ${row.Price || "20.04"}
                </div>
                <div className="product-category">
                  {row.Category || "Womenswear & Underwear"}
                </div>
              </div>
            </div>
            {/* </div> */}

            <div className="col-1">
              <div className="thumbnail-container">
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
                <div className="shop-avatar"></div>
                <div className="shop-info">
                  <div className="shop-name">
                    {row.Shop || "DreamyFajaNest"}
                  </div>
                  <div className="shop-location">
                    {row.Location || "United States"}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1 text-left">
              {row["LIVE Units Sold"] || "2.7k"}
            </div>

            <div className="col-1 text-left">${row["LIVE GMV"] || "54.7k"}</div>

            <div className="col-1 text-left">
              {row["LIVE Sessions"] || "35"}
            </div>

            <div className="col-1">
              <div className="top-streams">
                <div className="stream-row">
                  <span>Units Sold:</span>
                  <span className="stream-value">
                    {row["Top Stream 1 Units"] || "593"}
                  </span>
                </div>
                <div className="stream-row">
                  <span>Units Sold:</span>
                  <span className="stream-value">
                    {row["Top Stream 2 Units"] || "485"}
                  </span>
                </div>
              </div>
            </div>
{/* 
            <div className="col-1 text-center">
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
