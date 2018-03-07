import React from 'react'
import {render} from 'react-dom'

/*
In this example, we’ve created two components with React.createContext. 
The resulting Provider component makes any value it is given, 
accessible to any and all instances of the associated Consumer component.  
There’s no direct parent–child relationship between them for the sake of supplying the data.
*/

const { Consumer, Provider } = React.createContext();

render(
  <Provider value="Hello, world!">
    <Consumer>{value => <p>{value}</p>}</Consumer>
  </Provider>,
  document.getElementById('root'),
);