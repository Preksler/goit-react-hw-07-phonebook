import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62fd23396e617f88dea58465.mockapi.io/api/v1' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        getAllContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),
    }),
})

export const { useGetAllContactsQuery } = contactsApi;