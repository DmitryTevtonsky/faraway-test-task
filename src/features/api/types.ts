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
	wikipedia: string;
	presskit: string;
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

export type LaunchRequest = {
	query: LaunchQuery;
	options: LaunchOptions;
}

export type LaunchQuery = {
	text?: string,
	success?: boolean,
	upcoming?: boolean,
	datesRange?: [string, string],

}

export type LaunchOptions = {
	page: number;
	limit: number;
}
