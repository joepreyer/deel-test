1. What is the difference between Component and PureComponent? give an example where it might break my app.

The main difference between Component and PureComponent is that PureComponent handles the shouldComponentUpdate method for you, and by default does a shallow comparison of props and state. This means that if you mutate an object in state, and then update the state, the component will not re-render by default as it is only comparing the reference of the object with the previous reference, which will not have changed. This can cause breaking behaviour if you are mutating objects in state and expecting the component to re-render, but it does not due to the shallow comparison.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

It could be dangerous using context + ShouldComponentUpdate, because your component may not re-render when the context changes if you do not account for context changes in the ShouldComponentUpdate method - whereas usually components that are subscribed to a certain context would always re-render when that context is updated.

3. Describe 3 ways to pass information from a component to its PARENT.
- You can pass a callback function from the parent to the child component - the child can then call the function and pass information into that function and back to the parent component.
- You can use a state management library such as Redux, and dispatch an action in the child component that will update the state in the parent component.
- You can create a customEvent, and get the parent component to listen for the event, and then dispatch the event from the child component.

4. Give 2 ways to prevent components from re-rendering.
- For a functional component, you can wrap the component in memo() to prevent it from re-rendering when the props passed to it are unchanged.
- For a class component, you can use ShouldComponentUpdate to define exactly when you want a component to re-render, or extend PureComponent.

5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a React element that you can use to wrap multiple elements together in a component, without adding any extra nodes to the DOM. It's useful in cases where you need to wrap 2 or more adjacent elements together in a component, but you do not want to use a div or any other DOM element as it may break the styling of the component. 

An example where it might break an app would be if you need props or styling to be passed into the wrapper of a component, but the wrapper is a fragment and you can't pass props into a fragment. Another issue could be if you need to pass a 'key' prop into a component that's wrapped in a fragment, as the shorthand <></> for fragment can't receive props. In this case you can use React.Fragment.

6. Give 3 examples of the HOC pattern.
- React.memo to memoise a component
- withErrorBoundary to add error handling to a component with a fallback UI
- withRouter to give a component access to the React Router props

7. what's the difference in handling exceptions in promises, callbacks and async...await.

In promises, we handle errors with a catch block such as 
```
.catch(error => console.log(error))
```

 In async...await, we also handle errors in a catch block with slightly different syntax (no dot), such as 

```
try {something()}
catch (error) {
    console.error(error)
}
```

In callbacks, we handle errors by passing a callback function as the second argument to the function, such as 
```
.then(response => console.log(response), error => console.error(error))
```

8. How many arguments does setState take and why is it async.

setState takes two arguments - an object of the new state, or a function that returns an object of the new state, and a callback function that will be called once the state has been updated. It is async so that React can group state updates together to increase performance, and keep a smooth user experience without pausing interaction.

9. List the steps needed to migrate a Class to Function Component.
- Change the class to a function
- Remove the constructor
- Remove any references to 'this'
- Change all methods to functions
- Remove the render method
- Remove event handler bindings
- Replace this.setState with the useState hook
- Replace any state update callback functions and lifecycle methods with useEffect
- Replace any createRef() with useRef()
- Replace contextType or <context.Consumer> with useContext()

10. List a few ways styles can be used with components.
- Plain CSS
- Styling libraries such as Styled Components or Tailwind
- Inline styles using the style{} object
- CSS modules
- SASS /SCSS

11. How to render an HTML string coming from the server.

Use dangerouslySetInnerHTML prop to render an HTML string. It may be necessary to check that the HTML is safe before rendering it - this can be done using third party libraries.