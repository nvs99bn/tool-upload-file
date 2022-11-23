import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");
  const FileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const TextHandler = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("File", selectedFile);
    formData.append("Text", text);
    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((result) => {
        console.log("success", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <h1>Tool Upload File</h1>
      <input type="text" onChange={TextHandler} value={text}></input>
      <input type="file" onChange={FileHandler}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
