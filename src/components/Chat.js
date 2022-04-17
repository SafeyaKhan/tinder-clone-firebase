import React, { useState } from "react";
import  db  from "../firebase";
import './chat.css'
import { useHistory } from "react-router-dom";

const Chat = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (name === "" || url === "") {
      alert("All the fields are mandatory!");
      return;
  }

    db.collection("people")
      .add({
        name: name,
        url: url
       
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setUrl("");
  };
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <>
    <div className="chat">
  
    <form className="form" onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{width: 150}}
      />
      <br/>
      <label>Image url: </label>
      <input
        placeholder="Image url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{width: 150,marginTop: 10}}
      />
      <br />
      
       <button
        type="button"
        onClick={handleClick}
        style={{ background:"#fc6600",marginTop: 10,marginLeft:'-50px'}}
        className="button"
      >
        Back
      </button>
    
      <button
        type="submit"
        style={{ background: loader ? "#ccc" :"#fc6600" ,marginTop: 10,
        alignItems:'center',justifyContent: 'right',marginLeft:'60px'}}
        className="button"
      >
        Submit
      </button>
    
    </form>
   </div>
    </>
  );
};

export default Chat;



