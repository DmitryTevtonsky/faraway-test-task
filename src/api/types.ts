export type Launch = {
	id: string;
	name: string;
	details?: string;
	date_utc?: string;
	links?: LaunchLinks;
	success?: boolean;
	upcoming?: boolean;
}

export type LaunchLinks = {
	article: string;
	webcast: string;
	youtube_id: string;
	wikipedia: string;
	presskit: string;
	flickr: {
		original: string[];
		small: string[];
	},
	patch: {
		small: string;
		large: string;
	}
}

export type LaunchesResponse = {
	docs: Launch[],
	totalDocs: number,
	offset: number,
	limit: number,
	totalPages: number,
	page: number,
	pagingCounter: number,
	hasPrevPage: boolean,
	hasNextPage: boolean,
	prevPage: null,
	nextPage: null
}

export type LaunchesRequest = {
	query: LaunchesQuery;
	options: LaunchesOptions;
}

export type LaunchesQuery = {
	text?: string,
	success?: boolean,
	upcoming?: boolean,
	datesRange?: [string, string],
}

export type LaunchesOptions = {
	page: number;
	limit: number;
}

export type LaunchResponse = Launch;
