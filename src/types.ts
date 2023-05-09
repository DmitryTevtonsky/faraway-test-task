export type Pagination = {
	page: number;
	pageSize: number;
	total?: number;
}

export type Filters = {
	text?: string;
	datesRange?: [string, string],
	upcoming?: boolean;
	success?: boolean;
}
