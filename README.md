# React’s new Context API


Typically, data in a React application is passed top-down (parent to child) via props. 


But sometimes it’s useful to pass values through multiple levels of abstraction 
without involving each intermediate. Examples include a locale, or a UI theme.


Context in React provides a mechanism for a child component to access a value in an ancestor component. 
From now on we’ll refer to the ancestor as the provider and the child as the consumer.


The example is using React 16.3 alpha - check the package.json for details

