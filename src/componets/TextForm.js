import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case!", "success")
    }
    const handleLoClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case!", "success")

    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared!", "success")

    }

//     const handleCapitalClick = ()=>{
//         let words = text.split(" ");
//         for(let i = 0; i < words.length; i++){
//             words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();   
//         };
//         setText(words.join(" ")); 
//         props.showAlert("Converted first alphabet to capital!", "success")


//     } 
   
    const handleCopy = ()=>{
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to clipboard!", "success")

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!!", "success")

    }


    const handleOnChange = (e)=>{
        // console.log("on change")
        setText(e.target.value)
    }
    const [text, setText] = useState("");

    
  return (
    <>
    <div className='container' style={{color: props.mode==='light'? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='light'? 'white' : 'grey', color: props.mode==='light'? 'black' : 'white'}} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>  
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>  
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>  
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>  
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>  
    </div>
    <div className='container my-3' style={{color: props.mode==='light'? 'black' : 'white'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text :"Enter some text above to preview it here"}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "set heading here"
}
