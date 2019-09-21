import * as React from "react"
import * as ReactDOM from "react-dom"
import "../../../shared"
import ServiceDialog from "../../../components/forms/dialogs/ServiceDialog"

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById("root")
  )
}

// render(ServiceDialog)
render(() => <div>test</div>)
