//Step 1 - import React
import React, { useState } from "react"
import Tweet from "./Tweet"

// Step 2 - Create a component
function App() {
	const [users, setUsers] = useState([
		{ name: "EmmaohmaGod", message: "somebody say oh my God" },
		{ name: "Gordon Ramsey", message: "IT'S RAWW!!" },
		{ name: "Limoblaze", message: "God's favourite baby" },
	])

	return (
		<div className="app">
			{users.map((info) => (
				<Tweet name={users.name} message={users.message} />
			))}
		</div>
	)
}
// Step 2-Export it
export default App // to export this entire file
