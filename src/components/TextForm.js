import React ,{useState} from "react";
export default function TextForm(props) {
    const handleuc=()=>{
        setText(text.toUpperCase())
        props.showalert("converteed to uppercase string","success")        
    }
    const handlelc=()=>{
        setText(text.toLowerCase())
        props.showalert("lowered  the string","success")        
    }        
    const handlecc=(event)=>{
        let text1=text.split(" ")
        console.log(text1)
        let count=0
        text1.forEach(i => {
            i=i.charAt(0).toUpperCase()+i.slice(1)
            console.log(i)
            text1[count]=i
            count++
        }); 
        setText(text1.join(" "))
        props.showalert("Capitalized the string","success")          
    } 
    const handleclear=()=>{
        setText('')
        props.showalert("Cleared Everything","danger")        
    }     
    const handlespeak=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("System is speaking","warning")
    }           
    const handleonc=(event)=>{
        console.log("changed");
        setText(event.target.value)
    }    
    const [text,setText]=useState(' ')
  return (
    <>

    <div>
        <h2 style={{backgroundColor:props.mode ==='dark'?'white':'white'}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className={`form-control  style={{Color:props.mode ==='dark'?'grey':'white'}}`}
          value={text}
          onChange={handleonc}
          // style={{backgroundColor:props.mode ==='dark'?'grey':'white'}}
          id="mytext"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleuc}>convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handlelc}>convert to lowercase</button> 
      <button className="btn btn-primary mx-1" onClick={handlecc}>capitalize</button> 
      <button className="btn btn-primary mx-1 my-1" onClick={handleclear}>clear</button>           
      <button className="btn btn-primary mx-1 my-1" onClick={handlespeak}>speak</button>                    
    </div>
    <div className="my-2" style={{backgroundColor:props.mode ==='dark'?'white':'white'}}>
      <h2 >Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} charecters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <p>preview</p>
      <p>{text.length>0?text:"Enter Something to Preview here"}</p>
    </div>
    </>
  );
}
