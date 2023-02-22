import React from 'react'

const CommentsDisplay = () => {

  return (
    <div>
      <section>
        <div className="row g-5 p-3 justify-content-center">
          <div className="col-lg-8">
            <div className="list-group mt-3 p-3 bg-dark">
              <div className="list-group-item py-3">
                <div className="pb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5 className="mb-1">Member Comment</h5>
                <p className="mb-1">
                  In sit officia esse Lorem voluptate aliquip laborum ea
                  eiusmod. Dolor officia pariatur consequat sit eu officia
                  aute. Aliquip ad velit esse dolore dolor sint nostrud.
                </p>
                <small>Member: username</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommentsDisplay