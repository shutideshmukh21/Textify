import React, {useState} from 'react'

export default function Textbox(props) {

  const myStyle3 ={
    marginTop:  '0.5rem',
    marginLeft : '0.5Srem',
    backgroundColor : props.mode ==='dark'?'black':'#90a955',
    color : props.mode ==='dark'?'white':'black' 

    

  }

    const [Text, SetText ] = useState("");
    const SetTextfn = ()=>{
        console.log("Uppercase button was clicked")
        let newText = Text.toUpperCase();

        SetText(newText);
       props.showAlert("Converted to uppper case","success");
    }

    const SetTextfn2 = ()=>{
        console.log("LowerCase button was clicked")
        let newText2 = Text.toLocaleLowerCase();
    
        SetText(newText2);
        props.showAlert("Converted to lower case","success");

    }
    const onchangehandler =(event)=>{
        console.log("On change");
        SetText(event.target.value);

    }

    const handleClrClick =() =>
    {
     let newText3 = '';
    SetText(newText3);
    props.showAlert("Text has been cleared","success");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Text has been copied to clipboard","success");

    
  }
  const SpeakClick = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg);
   };

   const handlereverseclick = () =>
    {
      let newtext =Text.split(" ").reverse().join(" ");;
      SetText(newtext);
      props.showAlert("REversed the string","success");

    }
    const handleExtraSpace = () => {
      let newText = Text.split(/\s+/); // Split text into words by one or more whitespace characters
      SetText(newText.join(" ")); // Join the words with a single space
      props.showAlert("Removed all the extra Spaces","success");

  };
  


  return (
    <>
<div className = "container my-1" style = {{color : props.mode ==='dark'?'white':'black' }}>
   <h1>{props.heading}</h1>
<div className="Textbox">
  <label htmlFor="Mybox" className="form-label my-2" ></label>
  <textarea className="form-control"value ={Text}  style = {{backgroundColor : props.mode ==='dark'?'white':'#90a955' }}
  onChange={onchangehandler} id="Mybox" rows="8"></textarea>
</div>
<button className= "btn btn-success mx-2 my-1" disabled={Text.length ===0} style={myStyle3}  onClick={SetTextfn}>Convert to Uppercase</button>  
<button className= "btn btn-success mx-2 my-1" disabled={Text.length ===0} style={myStyle3}  onClick={SetTextfn2}>Convert to Lowercase</button>  
<button className= "btn btn-success mx-2 my-1"  disabled={Text.length ===0} style={myStyle3}  onClick={handleClrClick}>Clear Text</button> 
<button className= "btn btn-success mx-2 my-1" disabled={Text.length ===0}  style={myStyle3}  onClick={handleCopy}>Copy Text</button>  
<button className= "btn btn-success mx-2 my-1" disabled={Text.length ===0} style={myStyle3}  onClick={SpeakClick}>Read This</button>  
<button className= "btn btn-success mx-2 my-1" disabled={Text.length ===0}  style={myStyle3}  onClick={handlereverseclick}>Reverse text</button>  
<button className= "btn btn-success mx-2 my-1" disabled={Text.length ===0} style={myStyle3}  onClick={handleExtraSpace}>Remove extra Space</button>  






</div>
<div className = "container my-2" style = {{color : props.mode ==='dark'?'white':'black' }}>
        <h2> Preview</h2>
    <p> {Text}</p>

    </div>
<div className = "container my-2" style = {{color : props.mode ==='dark'?'white':'black' }}>
    <h2> Your Text Summary</h2>
    
    <p> Number of words are : {Text.split(" ").filter((element)=>{return(element.length !== 0)}).length}<br/> Its characters are {Text.length} </p>
    <p> Time required to read this context : {0.008 * Text.split(" ").filter((element)=>{return(element.length !== 0)}).length} minutes </p>
</div>


</>
  );
}


