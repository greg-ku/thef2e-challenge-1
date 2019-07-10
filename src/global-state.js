import React, { useReducer, useEffect } from 'react';

export const GlobalState = React.createContext({})

const todosInitialState = []
const todosRecuder = (state = todosInitialState, action) => {
  if (action.type === 'ADD_TODO') {
    if (action.payload) {
      return [...state, { title: action.payload, pomodoro: 0, done: false }]
    } else {
      return state
    }
  }
  return state
}

const playStatusInitialState = 'STOPPED'
const playStatusReducer = (state = playStatusInitialState, action) => {
  return state
}

const rootReducer = (state = {}, action) => {
  return {
    todos: todosRecuder(state.todos, action),
    playStatus: playStatusReducer(state.playStatus, action),
  }
}
const initialState = rootReducer({}, {})

export const withGlobalState = WrappedComponent => {
  return props => {
    const [context, dispatch] = useReducer(rootReducer, initialState)

    return (
      <GlobalState.Provider value={{
        context,
        dispatch,
      }}>
        <WrappedComponent {...props}/>
      </GlobalState.Provider>
    )
  }
}
