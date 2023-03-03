import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p
        onMouseEnter={() => dispatch({ type: 'INCREMENT' })}
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Hover me to increase count, click me to decrease count.
      </p>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <p>Count: {state.count}</p>
    </div>
  );
}