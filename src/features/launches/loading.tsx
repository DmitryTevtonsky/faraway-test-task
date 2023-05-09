import { BookOutlined, RocketOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Card, Skeleton } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";

import css from "./index.module.css";

const LaunchesLoading: FC = () => {

	return (
		<div className={css.launches}>
			{Array.from({ length: 5 }, (_, index) => (
				<Card
					loading
					className={css.card}
					key={index}
					title={"..."}
					cover={
						<img
							loading="lazy"
						/>
					}
					actions={[
						<Link
							className={css.disabledLink}
							key="spacex"
							to="#"
						>
							<RocketOutlined />
						</Link>,
						<Link
							className={css.disabledLink}
							key="reddit"
							to="#"
						>
							<BookOutlined />
						</Link>,
						<Link
							className={css.disabledLink}
							key="youtube"
							to="#"
						>
							<YoutubeOutlined />
						</Link>,

					]}
				>
					<Card.Meta
						title={" "}
						description={"Second time a booster will be reused: Second flight of B1029 after the Iridium mission of January 2017. The satellite will be the first commercial Bulgarian-owned communications satellite and it will provide television broadcasts and other communications services over southeast Europe.						"}
					/>
				</Card>
			))}
		</div>
	);
};

export default LaunchesLoading;
