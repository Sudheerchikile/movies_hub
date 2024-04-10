import React from 'react'
import "./index.css"

const Pagination = ({page,setPage,numOfPages,data}) => {
  return (
    <div>
        <div className="pagination">
        <span onClick={() => setPage(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(Math.ceil(5))].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => setPage(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => setPage(page + 1)} className={page < numOfPages ? "" : "pagination__disable"}>▶</span>
      </div>
    </div>
  )
}

export default Pagination
