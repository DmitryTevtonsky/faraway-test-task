import { Button } from "antd";
import { toggleSidebarVisibility } from "core/redux/slice";
import React, { FC } from "react";

import { useAppDispatch } from "store";

import css from "./index.module.css";

const Header: FC = () => {
	const dispatch = useAppDispatch();

	const showFiltersSidebar = () => {
		dispatch(toggleSidebarVisibility());
	};

	return (
		<div className={css.content}>
			<h1>SpaceX launches</h1>
			<Button type="primary" onClick={showFiltersSidebar}>
				Filters
			</Button>
		</div>
	);
};

export default Header;
