import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Launches from "../../../features/launches";

import css from "./index.module.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Launches />,
	},
	{
		path: "/:launchId",
		element: <div>Hello world 123!</div>,
	},
]);

const Main: FC = () => {
	return (
		<div className={css.content}>
			<RouterProvider router={router} />
		</div>
	);
};

export default Main;
