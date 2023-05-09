import { Pagination } from "antd";
import React, { FC } from "react";

import { selectPagination } from "core/redux/selectors";

import { setPagination } from "core/redux/slice";

import { useAppDispatch, useAppSelector } from "store";

import css from "./index.module.css";
import { useGetLaunchesQuery } from "features/api";

const Footer: FC = () => {
	const dispatch = useAppDispatch();

	const { page, pageSize, total } = useAppSelector(selectPagination);

	const handleChange = (page: number, pageSize: number) => {
		console.log({ page, pageSize });
		dispatch(setPagination({ page, pageSize }));
	};

	console.log("!!!", { page, pageSize, total });
	return (
		<div className={css.сontent}>
			<Pagination
				className={css.pagination}
				current={page}
				pageSize={pageSize}
				defaultCurrent={1}
				defaultPageSize={10}
				total={total}
				showSizeChanger
				pageSizeOptions={[10, 25, 50]}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Footer;
