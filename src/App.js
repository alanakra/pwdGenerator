import Generator from "./components/generator";
import { useState } from "react";

function App() {
  const generatePassword = (e) => {
    e.preventDefault()

    const bigString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}()*;/,_-"

    let pwd = ""

    for (let i = 0; i < pwdLength; i++){
      pwd += bigString.charAt(Math.random() * bigString.length)
    }

    console.log(pwd) 
  }

  const [pwdLength, setPwdLength] = useState(8)

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-gray-700">Password Generator</h1>
        <form className="text-center text-xl mt-8" onSubmit={generatePassword}>
          <h2>Please enter the length of your password:</h2>
          <input type="number" className="border-2 border-gray-700 mt-2" value={pwdLength} onChange={e => setPwdLength(e.target.value)}></input>
          <button type="submit" className="ml-4 bg-green-400 p-2 rounded">Generate</button>
        </form>
      <Generator/>
    </div>
  );
}

export default App;
