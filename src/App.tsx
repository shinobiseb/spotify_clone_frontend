import { useState } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import SignUpBanner from "./components/SignUpBanner"
import "./index.css"

function App() {

  const [signedIn, setSignedIn] = useState(false)

  return (
    <div id="master-cont" className="flex h-screen flex-col w-screen">
      <div id="main-content-cont" className={`flex flex-row ${signedIn ? 'flex-grow' : 'h-full'}`}>
        <Nav/>
        <Main state={signedIn} setLogIn={setSignedIn}/>
      </div>
        {!signedIn && <SignUpBanner/>}
    </div>
  )
}

export default App
