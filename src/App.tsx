import {useEffect, useState} from "react";
import {getPeople, type PeopleList} from "./server";

function App() {

  const [people, setPeople] = useState<PeopleList | null>(null)

  useEffect(() => {
    setPeople(getPeople())
  }, [])

  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      { people && <h1>You are ready for the technical test</h1> }
    </div>
  )
}

export default App
