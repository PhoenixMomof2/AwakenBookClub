import React from 'react'
import CommentsImage from '../images/CommentsImage.jpg'

const BookGroupsDisplay = () => {
  
  return (
    <div className="container-flex my-4">
        <div className="text-center bg-dark">
          <h2 className="text-dark bg-success fw-bolder pt-3">Book Groups</h2>
          <p className="lead text-dark bg-success fw-bold pe-3 ps-3 pb-3">
            Qui anim sunt labore esse aliquip eu commodo irure laboris laborum
            adipisicing sunt ex. Consequat elit proident culpa occaecat velit
            ad. Ea mollit irure in non. Adipisicing dolore reprehenderit laborum
            cillum ullamco laboris magna anim esse consequat deserunt proident
            consectetur qui. Nostrud ut Lorem est esse ex est et ut est officia
            excepteur sunt. Occaecat in reprehenderit dolor sit. Esse ad aliquip
            nostrud nisi excepteur est in ad.
          </p>
        </div>

        <div className="row my-5 g-5 justify-content-around align-items-center">
          <div className="col-6 col-lg-4">
            <img src={CommentsImage} className="img-fluid" alt="placeholder" />
          </div>

          <div className="col-lg-6">
            <div className="accordion" id="group-names">
              <div className="accordion-item">
                <h2 className="accordion-item-header" id="heading-1">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#group-1"
                    aria-expanded="true"
                    aria-controls="group-1"
                  >
                    Group 1 - Anti-Racism
                  </button>
                </h2>
                <div
                  id="group-1"
                  className="accordion-collapse collapse-show"
                  aria-labelledby="heading-1"
                  data-bs-parent="#groups"
                >
                  <div className="accordion-body">
                    <p>
                      Mollit sit culpa irure qui officia eu adipisicing
                      reprehenderit. Cillum ullamco aliquip laborum adipisicing
                      incididunt non. Ea id quis aliqua nulla tempor. Veniam sit
                      qui aliquip officia eiusmod eiusmod ullamco. Deserunt
                      laboris anim culpa ad nostrud eu cupidatat anim.
                    </p>
                    <p>
                      Consequat ut nostrud tempor incididunt eiusmod Lorem
                      occaecat voluptate sunt esse officia. Sit aute qui
                      pariatur sit adipisicing fugiat occaecat ex. Cupidatat
                      incididunt officia culpa ad eiusmod elit mollit occaecat
                      minim adipisicing sint aliquip ullamco. Cupidatat sint non
                      aliqua pariatur. Enim anim reprehenderit velit culpa elit
                      ullamco exercitation. Duis esse esse qui occaecat ipsum
                      exercitation adipisicing sit cupidatat reprehenderit
                      mollit culpa. Lorem ad excepteur eiusmod ipsum qui dolore
                      id deserunt laborum est minim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-item-header" id="heading-2">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#group-2"
                    aria-expanded="true"
                    aria-controls="group-2"
                  >
                    Group 2 - Justice Reform
                  </button>
                </h2>
                <div
                  id="group-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-2"
                  data-bs-parent="#groups"
                >
                  <div className="accordion-body">
                    <p>
                      Mollit sit culpa irure qui officia eu adipisicing
                      reprehenderit. Cillum ullamco aliquip laborum adipisicing
                      incididunt non. Ea id quis aliqua nulla tempor. Veniam sit
                      qui aliquip officia eiusmod eiusmod ullamco. Deserunt
                      laboris anim culpa ad nostrud eu cupidatat anim.
                    </p>
                    <p>
                      Consequat ut nostrud tempor incididunt eiusmod Lorem
                      occaecat voluptate sunt esse officia. Sit aute qui
                      pariatur sit adipisicing fugiat occaecat ex. Cupidatat
                      incididunt officia culpa ad eiusmod elit mollit occaecat
                      minim adipisicing sint aliquip ullamco. Cupidatat sint non
                      aliqua pariatur. Enim anim reprehenderit velit culpa elit
                      ullamco exercitation. Duis esse esse qui occaecat ipsum
                      exercitation adipisicing sit cupidatat reprehenderit
                      mollit culpa. Lorem ad excepteur eiusmod ipsum qui dolore
                      id deserunt laborum est minim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-item-header" id="heading-3">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#group-3"
                    aria-expanded="true"
                    aria-controls="group-3"
                  >
                    Group 3 - Education Reform
                  </button>
                </h2>
                <div
                  id="group-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-3"
                  data-bs-parent="#groups"
                >
                  <div className="accordion-body">
                    <p>
                      Mollit sit culpa irure qui officia eu adipisicing
                      reprehenderit. Cillum ullamco aliquip laborum adipisicing
                      incididunt non. Ea id quis aliqua nulla tempor. Veniam sit
                      qui aliquip officia eiusmod eiusmod ullamco. Deserunt
                      laboris anim culpa ad nostrud eu cupidatat anim.
                    </p>
                    <p>
                      Consequat ut nostrud tempor incididunt eiusmod Lorem
                      occaecat voluptate sunt esse officia. Sit aute qui
                      pariatur sit adipisicing fugiat occaecat ex. Cupidatat
                      incididunt officia culpa ad eiusmod elit mollit occaecat
                      minim adipisicing sint aliquip ullamco. Cupidatat sint non
                      aliqua pariatur. Enim anim reprehenderit velit culpa elit
                      ullamco exercitation. Duis esse esse qui occaecat ipsum
                      exercitation adipisicing sit cupidatat reprehenderit
                      mollit culpa. Lorem ad excepteur eiusmod ipsum qui dolore
                      id deserunt laborum est minim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BookGroupsDisplay