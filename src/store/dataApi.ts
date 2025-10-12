import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProjectTypes } from "../constants/types/projects.dt";
import type { ServiceTypes } from "../constants/types/services.dt";
import type { BlogTypes } from "../constants/types/blogs.dt";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectTypes[], void>({
      query: () => "projects.json",
    }),
    getServices: builder.query<ServiceTypes[], void>({
      query: () => "services.json",
    }),
    getBlogs: builder.query<BlogTypes[], void>({
      query: () => "blogs.json",
    }),
  }),
});

export const { useGetProjectsQuery, useGetServicesQuery, useGetBlogsQuery } =
  dataApi;
