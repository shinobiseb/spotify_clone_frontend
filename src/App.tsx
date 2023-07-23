import { useState } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import SignUpBanner from "./components/SignUpBanner"
import "./index.css"

function App() {

  const [signedIn, setSignedIn] = useState(false)

  return (
    <div className="flex flex-col h-screen max-h-screen w-screen">
      <div className='flex flex-row'>
        <Nav/>
        <Main/>
      </div>
      
      {
        signedIn ?  null :  <SignUpBanner/>
      }
    </div>
  )
}

export default App
