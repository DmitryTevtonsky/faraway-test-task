import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LaunchesResponse, LaunchRequest } from "./types";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v5" }),
	endpoints: builder => ({
		getLaunches: builder.query<LaunchesResponse, LaunchRequest>({
			query: ({
				query: { text, success, upcoming, datesRange },
				options,
			}) => ({
				url: "/launches/query",
				method: "POST",
				body: {
					query: {
						$text: text && {
							$search: text,
						},
						success: success,
						upcoming: upcoming,
						date_utc: datesRange && {
							$gte: datesRange && datesRange[0],
							$lte: datesRange && datesRange[1],
						},
					},
					options,
				},
			}),

		}),
	}),

});

export const { useGetLaunchesQuery } = apiSlice;
