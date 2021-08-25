//Step 1 - import React
import React from "react"
import Tweet from "./Tweet"

// Step 2 - Create a component
function App() {
	return (
		<div className="app">
			<Tweet name="EmmaohmaGod" message="somebody say oh my God" />{" "}
			{/*to place the exported tweet app after importing it */}
			<Tweet name="Gordon Ramsey" message="IT'S RAWW!! " />
			<Tweet name="Limoblaze" message="God's favourite baby" />
		</div>
	)
}
// Step 2-Export it
export default App // to export this entire file
