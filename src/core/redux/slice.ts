import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "api";
import { Filters, Pagination } from "types";

export type CoreState = {
	sidebarVisibility: boolean;
	pagination: Pagination;
	filters: Filters;
}

const initialState: CoreState = {
	sidebarVisibility: false,
	pagination: {
		page: 1,
		pageSize: 10,
		total: 0,
	},
	filters: {},
};

export const coreSlice = createSlice({
	name: "core",
	initialState,
	reducers: {
		toggleSidebarVisibility: (state) => {
			state.sidebarVisibility = !state.sidebarVisibility;
		},
		setPagination: (state, action: PayloadAction<Pagination>) => {
			state.pagination = Object.assign(state.pagination, action.payload);
		},
		setFilters: (state, action: PayloadAction<Filters>) => {
			state.filters = Object.assign(state.filters, action.payload);
		},
		resetFilters: (state) => {
			state.filters = {};
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				apiSlice.endpoints.getLaunches.matchFulfilled,
				(state, { payload }) => {
					state.pagination = Object.assign(state.pagination, {
						total: payload.totalDocs,
					});
				}
			);
	},
});

export const { toggleSidebarVisibility, setPagination, setFilters, resetFilters } = coreSlice.actions;
export default coreSlice.reducer;
