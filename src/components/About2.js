import React  from 'react'

export default function About2(props) {
   

    
   
   
      
    return (
        <div className='container my-2' style = {props.myStyle}  >
            <h1> About Us- Textify</h1>
          <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button"  style={props.myStyle2} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          What is Textify?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>TextUtils is a powerful and user-friendly online tool designed to simplify text manipulation. Whether you're a writer, student, or developer, TextUtils helps you enhance productivity by performing quick text-related tasks.</strong> It is shown by default, until the collapse plugin adds the appropriate classnamees that we use to style each element. These classnamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button"  style={props.myStyle2} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Our Mission
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>To provide a seamless platform for managing, analyzing, and transforming text, making everyday tasks more efficient and accessible for everyone.</strong> It is hidden by default, until the collapse plugin adds the appropriate classnamees that we use to style each element. These classnamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button"  style={props.myStyle2} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Key Features
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Here are the key feature of Textify</strong> 
            <div ><ul>
        <li>Text Formatting</li>
        <li>Word and Character Count</li>
        <li>Whitespace Removal</li>
        <li>Copy Text</li>
    </ul></div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button"  style={props.myStyle2} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Why Choose TextUtils?
          </button>
        </h2>
 <div id="collapsFour" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div ><ul>
        <li>Simple and intuitive interface.</li>
        <li>Fast and reliable processing of text.</li>
        <li>Compatible with dark and light modes for user convenience.</li>
        <li>Works across all devices and browsers, ensuring accessibility anywhere</li>
    </ul></div>
          </div>
        </div>
      </div>
    </div>
 
    
        </div>
      )
        
     }
