import React, { useReducer, useEffect, useState, useRef } from 'react';

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

const DEFAULT_WORK_TIME_MS = 25 * 60 * 1000
const DEFAULT_BREAK_TIME_MS = 5 * 60 * 1000
const playerInitialState = {
  type: 'WORK',
  status: 'STOPPED',
  remainingTimeMs: DEFAULT_WORK_TIME_MS,
  lastStatusChangedAt: null,
}
const playerReducer = (state = playerInitialState, action) => {
  if (action.type === 'START' && (state.status === 'PAUSED' || state.status === 'STOPPED')) {
    if (state.type === 'WORK') {
      return { ...state, status: 'WORKING', lastStatusChangedAt: action.payload }
    } else if (state.type === 'BREAK') {
      return { ...state, status: 'BREAKING', lastStatusChangedAt: action.payload }
    }
  }
  if (action.type === 'PAUSE' && /^[WORKING|BREAKING]+$/.test(state.status)) {
    const period = Math.min(action.payload - state.lastStatusChangedAt, 1000)
    return {
      ...state,
      status: 'PAUSED',
      remainingTimeMs: state.remainingTimeMs - period,
      lastStatusChangedAt: action.payload
    }
  }
  if (action.type === 'STOP' && /^[WORKING|BREAKING|PAUSED]+$/.test(state.status)) {
    return playerInitialState
  }
  if (action.type === 'COUNT_DOWN_TICK') {
    const period = Math.min(action.payload - state.lastStatusChangedAt, 1000)
    return {
      ...state,
      remainingTimeMs: state.remainingTimeMs - period,
      lastStatusChangedAt: action.payload
    }
  }
  if (action.type === 'WORK_PERIOD_COMPLETE') {
    return {
      type: 'BREAK',
      status: 'STOPPED',
      remainingTimeMs: DEFAULT_BREAK_TIME_MS,
      lastStatusChangedAt: action.payload,
    }
  }
  if (action.type === 'BREAK_PERIOD_COMPLETE') {
    return playerInitialState
  }
  return state
}

const rootReducer = (state = {}, action) => {
  return {
    todos: todosRecuder(state.todos, action),
    player: playerReducer(state.player, action),
  }
}
const initialState = rootReducer({}, {})

export const withGlobalState = WrappedComponent => {
  return props => {
    const [timer, setTimer] = useState(null)
    const timerRef = useRef(timer)
    timerRef.current = timer
    const [context, coreDispatch] = useReducer(rootReducer, initialState)
    const playerRef = useRef(context.player)
    playerRef.current = context.player

    const logMiddleware = () => next => action => {
      console.log('action: ', action)
      return next(action)
    }
    const dispatch = process.env.NODE_ENV === 'production' ? coreDispatch : logMiddleware()(coreDispatch)

    useEffect(
      function handleTimerStatus() {
        const status = context.player.status
        const currentType = context.player.type
        if ((status === 'WORKING' && currentType === 'WORK') ||
            (status === 'BREAKING' && currentType === 'BREAK')) {
          const handleWorkingTick = () => {
            const hasNextTick = playerRef.current.remainingTimeMs > 0
            const completeActionType = playerRef.current.type === 'WORK'
              ? 'WORK_PERIOD_COMPLETE'
              : 'BREAK_PERIOD_COMPLETE'
            dispatch({
              type : hasNextTick ? 'COUNT_DOWN_TICK' : completeActionType,
              payload: new Date()
            })
            if (hasNextTick) {
              const id = setTimeout(handleWorkingTick, playerRef.current.remainingTimeMs % 1000 || 1000)
              setTimer(id)
            }
          }
          const id = setTimeout(handleWorkingTick, playerRef.current.remainingTimeMs % 1000 || 1000)
          setTimer(id)
        } else if ((status === 'STOPPED' || status === 'PAUSED') && timerRef.current) {
          clearInterval(timerRef.current)
          setTimer(null)
        }

        return () => timerRef.current && clearTimeout(timerRef.current)
      },
      [context.player.status]
    )

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
