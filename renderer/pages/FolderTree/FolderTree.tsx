import * as React from 'react'
import * as ReactDOM from 'react-dom'


const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

render(() => <div>Folder Tree Form</div>)
