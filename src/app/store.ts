import { configureStore } from '@reduxjs/toolkit'

// Reducers
import usersReducer from '../features/users/usersSlice'
import clientsReducer from '../features/clients/clientsSlice'
import servicesReducer from '../features/services/servicesSlice'
import appointmentsReducer from '../features/appointments/appointmentsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    clients: clientsReducer,
    services: servicesReducer,
    appointments: appointmentsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
