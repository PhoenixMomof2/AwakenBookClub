import React from 'react'

const BookCommentsList = () => {
  return (
  <section id="reviews" className="bg-light">
    <div className="container-flex bg-dark pt-3">
      <div className="text-center">
        <h2 className="text-light fw-bolder"><i class="bi bi-wechat"></i> Book Group Comments</h2>
        <p className="lead text-light fw-bolder">What members have to say about (insert book title)...</p>
      </div>
          <div className="row g-5 p-3 justify-content-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="list-group mt-3 p-3 bg-dark">
                  <div className="list-group-item py-3">
                    <div className="pb-2">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    </div>
                    <h5 className="mb-1">Member Comment</h5>
                    <p className="mb-1">In sit officia esse Lorem voluptate aliquip laborum ea eiusmod. Dolor officia pariatur consequat sit eu officia aute. Aliquip ad velit esse dolore dolor sint nostrud.</p>
                    <small>Member: username</small>
                  </div>
                  <div className="list-group-item py-3">
                  <div className="pb-2">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    </div>
                    <h5 className="mb-1">Member Comment</h5>
                    <p className="mb-1">In sit officia esse Lorem voluptate aliquip laborum ea eiusmod. Dolor officia pariatur consequat sit eu officia aute. Aliquip ad velit esse dolore dolor sint nostrud.</p>
                    <small>Member: username</small>
                  </div>
                  <div className="list-group-item py-3">
                  <div className="pb-2">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    </div>
                    <h5 className="mb-1">Member Comment</h5>
                    <p className="mb-1">In sit officia esse Lorem voluptate aliquip laborum ea eiusmod. Dolor officia pariatur consequat sit eu officia aute. Aliquip ad velit esse dolore dolor sint nostrud.</p>
                    <small>Member: username</small>
                  </div>
                  <div className="list-group-item py-3">
                  <div className="pb-2">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    </div>
                    <h5 className="mb-1">Member Comment</h5>
                    <p className="mb-1">In sit officia esse Lorem voluptate aliquip laborum ea eiusmod. Dolor officia pariatur consequat sit eu officia aute. Aliquip ad velit esse dolore dolor sint nostrud.</p>
                    <small>Member: username</small>
                  </div>
                  <div className="list-group-item py-3">
                  <div className="pb-2">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    </div>
                    <h5 className="mb-1">Member Comment</h5>
                    <p className="mb-1">In sit officia esse Lorem voluptate aliquip laborum ea eiusmod. Dolor officia pariatur consequat sit eu officia aute. Aliquip ad velit esse dolore dolor sint nostrud.</p>
                    <small>Member: username</small>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default BookCommentsList;