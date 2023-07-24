import { useState } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import SignUpBanner from "./components/SignUpBanner"
import "./index.css"

function App() {

  const [signedIn, setSignedIn] = useState(false)

  return (
    <div id="master-cont" className="flex h-screen flex-col max-h-screen w-screen">
      <div className='flex flex-row'>
        <Nav/>
        <Main state={signedIn} setLogIn={setSignedIn}/>
      </div>
      {
        signedIn ?  null :  <SignUpBanner/>
      }
    </div>
  )
}

export default App
