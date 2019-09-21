import * as React from "react"
import * as ReactDOM from "react-dom"
import "../../shared"

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById("root")
  )
}

render(() => <div>Home Page</div>)
