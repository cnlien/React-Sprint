# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI Library developed by Facebook to solve complex state issues. In the end, the app is pieced together using small reusable UI pieces called components to create an application that is dynamic and larger in scale updating the state of the components using state modifiers like “useState”.

1. What does it mean to think in react?

Thinking in React is a mindset that helps drill down to most basic concepts of layout and then building the app based those concepts. First your going to mock up the app, next you’re going to break down the mock up in to components and hierarchy. The next step is to build a version of the app with no functionality… get it looking right. Once the app is built it’s time to identify where you’re going to need to set state attempting to maintain the ‘DRY’ concept. Lastly you’re going to add your data.


1. Describe state.

State is at the core of every React Component. It’s an object used in React that determines how the component behaves.

1. Describe props.

Props are properties that can be passed through a component and rendered in the app with JSX. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side Effects are anything the effect something outside of the scope of the function. The effect hook is (useEffect) and must be imported to the React App. They are synced with an empty array or called by passing data through an array at the end of the function. 
`useEffect(() => {
    axios
    .get('https://api.fakeapi.com’)
    .then (res => {
      setDisplayRender(res.data.name);

    })
    .catch(err => console.log(err));
  },[ ]);
`
