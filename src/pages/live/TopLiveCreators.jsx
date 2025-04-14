import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Star,
  Calendar,
  Download,
} from "lucide-react";
import "./LiveSearch.css";

export const TopLiveCreators = () => {
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
        "http://127.0.0.1:8000/api/Tiktok_Live_Creators/"
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
        <div></div>
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
            <Calendar className="icon-small" />
          </button>
          <button className="export-button">
            <Download className="icon-small" />
            <span>Data Export</span>
          </button>
        </div>
      </div>

      {/* Table with creator columns */}
      <div className="table-container">
        {/* Table Header */}
        <div className="table-header">
          <div className="col-1 text-left">Creator</div>
          <div className="col-1 text-left header-with-icon">
            Number of Fans <ChevronDown className="icon-tiny" />
          </div>
          <div className="col-1 text-right header-with-icon">
            LIVE Units Sold <ChevronDown className="icon-tiny" />
          </div>
          <div className="col-1 text-right header-with-icon">
            LIVE GMV <ChevronDown className="icon-tiny" />
          </div>
          <div className="col-1 text-right header-with-icon">
            No. of Products Sold <ChevronDown className="icon-tiny" />
          </div>
          <div className="col-2 text-left">Top GMV LIVE Streaming</div>
          <div className="col-1 text-right">Action</div>
        </div>

        {/* Table Body */}
        {getPaginatedData().map((row, index) => (
          <div key={index} className="table-row">
            <div className="col-1">
              <div className="creator-container">
                <div className="creator-avatar">
                  <img
                    src={
                      row.imageadd ||
                      "https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp"
                    }
                    alt="Creator Avatar"
                    className="avatar-img"
                  />
                </div>
                <div className="creator-info">
                  <div className="creator-name">
                    {row.Creator || "TheBeachwaver"}
                  </div>
                  <div className="creator-id">
                    ID: {row.CreatorID || "thebeachwaver"}
                  </div>
                  <div className="creator-category">
                    {row.Category || "Shopping & Retail"}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1 text-left">
              {row["Number of Fans"] || "1.2m"}
            </div>

            <div className="col-1 text-right">
              {row["LIVE Units Sold"] || "1.7k"}
            </div>

            <div className="col-1 text-right">
              ${row["LIVE GMV"] || "17.1k"}
            </div>

            <div className="col-1 text-right">
              {row["No. of Products Sold"] || "41"}
            </div>

            <div className="col-2">
              <div className="top-streams">
                <div className="stream-row">
                  <span>GMV:</span>
                  <span className="stream-value">
                    ${row["Top Stream 1 GMV"] || "334.72"}
                  </span>
                </div>
                <div className="stream-row">
                  <span>GMV:</span>
                  <span className="stream-value">
                    ${row["Top Stream 2 GMV"] || "174.81"}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-1 text-center">
              <button className="star-button">
                <Star
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
              <ChevronLeft className="icon-tiny" />
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
              <ChevronRight className="icon-tiny" />
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
