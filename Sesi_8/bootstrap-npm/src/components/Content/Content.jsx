import React from "react";

const Content = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">First Paragraf in Jumbotron</h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            impedit ex incidunt adipisci, amet commodi asperiores eius aperiam,
            unde aut maxime dolor quis itaque distinctio doloremque molestiae
            expedita illo excepturi!
          </p>
          <button
            className="btn btn-primary btn-lg"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Example button
          </button>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">This is my first modal box</div>
            <div>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
