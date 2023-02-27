import React from 'react'

const OffCanvas = () => {
  return (
    <div className="offcanvas offcanvas-start bg-light" id="sidebar" aria-labelledby="sidebar-label">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-light fw-bold" id="sidebar-label">
          User Settings
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
      </div>  
    </div>
  )
}

export default OffCanvas