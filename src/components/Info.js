import React, { useState } from 'react';

function Info() {
  const [myStyle1, SetStyle1] = useState({
    backgroundColor: '#90a955',
    color: 'white',
  });
  const [myStyle4, SetStyle4] = useState({
    backgroundColor: '#31572c',
    color: 'White',
  });
  const [btnText, btnTextChange] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle4.backgroundColor === '#31572c') {
      SetStyle4({
        backgroundColor: 'black',
        color: 'white',
      });

      SetStyle1({
        backgroundColor: 'grey',
      });
      btnTextChange("Enable Light Mode");
    } else {
      SetStyle4({
        backgroundColor: '#31572c',
        color: 'white',
      });
      SetStyle1({
        backgroundColor: '#90a955',
        color: 'white',
      });
      btnTextChange("Enable Dark Mode");
    }
  };

  return (
    <div className="container my-2" style={myStyle4}>
      <h1>How To Use Textify</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle1}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. Input Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Enter or paste your text into the text area provided at the top of the page.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle1}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Choose a Text Operation
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Convert Case, Remove Extra Spaces, Word and Character Count, Clear Text
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle1}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. Dark Mode/Light Mode
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Toggle the mode at the top right corner to switch between dark mode and
                light mode for better visibility and comfort.
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <button
          type="button"
          className="btn btn-secondary"
          style={{
            marginBottom: '1rem',
            backgroundColor: '#f0f3bd',
            color: 'black',
          }}
          onClick={toggleStyle}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Info;
