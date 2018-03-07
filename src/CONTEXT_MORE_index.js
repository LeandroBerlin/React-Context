import React from 'react';
import {render} from 'react-dom';

/*
Typically, data in a React application is passed top-down (parent to child) via props. 

But sometimes it’s useful to pass values through multiple levels of abstraction 
without involving each intermediate. Examples include a locale, or a UI theme.

Context in React provides a mechanism for a child component to access a value in an ancestor component. 
From now on we’ll refer to the ancestor as the provider and the child as the consumer.

The example is based on an example by Kent C. Dodds.
*/


// 0. Define some theme's styles we are going to use

const styles = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
};

// 1. Create a context
const ThemeContext = React.createContext();

// 2. Our app contains a provider for ThemeContext.
// Anything we store into the ThemeContext will be accessible to the Consumers
class App extends React.Component {

  state = {
    theme: 'light'
  };

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <button onClick={this.toggleTheme}>toggle theme</button>
        <Theming />
        <AnotherTheming />
      </ThemeContext.Provider>
    );
  }
}

// 3. A Consumer with access to the data contained in ThemeContext - it uses a PureComponennt RTFM :P
class Theming extends React.PureComponent {
  render() {
    return(
      <ThemeContext.Consumer>
        {context => <div style={styles[context.theme]}>{context.theme}</div>}
      </ThemeContext.Consumer>
    );
  }
}

// 4. Another Consumer
class AnotherTheming extends React.Component {
  render() {
    return(
      <div>
      <p>Late for the party?</p>
      <ThemeContext.Consumer>
        {context => <div style={styles[context.theme]}>{context.theme}</div>}
      </ThemeContext.Consumer>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));