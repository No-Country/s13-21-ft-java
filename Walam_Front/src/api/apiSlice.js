import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice } from '@reduxjs/toolkit'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://s13-21-ft-java.onrender.com/'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users']
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: 'auth/register',
        method: 'POST',
        body: newUser
      }),
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation({
      query: ({ id, userData }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: userData
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    }),
    authenticateUser: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/login', // Endpoint para autenticar al usuario
        method: 'POST',
        body: { email, password }
      })
    }),
    getLoggedInUser: builder.query({
      query: (id) => `/users/${id}` // Endpoint para obtener la información del usuario logueado por ID
    })
  })
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedInUser: null
  },
  reducers: {
    setUser: (state, action) => {
      state.loggedInUser = action.payload
    },
    clearUser: (state) => {
      state.loggedInUser = null
    }
  }
})
export const { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation, useUpdateUserMutation, useAuthenticateUserMutation, useGetLoggedInUserQuery } = apiSlice
export const { reducer: userReducer, actions: { setLoggedInUser } } = userSlice
export const { setUser, clearUser } = userSlice.actions
export const selectLoggedInUser = (state) => state.user.loggedInUser

export default userSlice.reducer

export const { reducer: apiReducer } = apiSlice
