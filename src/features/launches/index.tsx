import { Card, Typography } from "antd";
import { BookOutlined, RocketOutlined, YoutubeOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import dayjs from "dayjs";

import { useAppSelector } from "store";
import { useGetLaunchesQuery } from "features/api";
import { selectFilters, selectPagination } from "core/redux/selectors";

import css from "./index.module.css";
import LaunchesLoading from "./loading";

const { Text } = Typography;

const renderStatus = (upcoming: boolean | undefined, success: boolean | undefined) => {
	if (upcoming) return <Text type="secondary">Upcoming</Text>;
	if (success) return <Text type="success">Success</Text>;
	return <Text type="danger">Failure</Text>;
};

const Launches: FC = () => {
	const { page, pageSize } = useAppSelector(selectPagination);
	const { text, datesRange, success, upcoming } = useAppSelector(selectFilters);

	const { data, isLoading, isFetching } = useGetLaunchesQuery({
		options: {
			page,
			limit: pageSize,
		},
		query: {
			text,
			success,
			upcoming,
			datesRange,
		},
	});

	if (isLoading || isFetching) {
		return <LaunchesLoading />;
	}

	console.log(data);

	return (
		<div className={css.launches}>
			{data?.docs.map(({ id, name, details, links, date_utc, success, upcoming }) => (
				<Card
					key={id}
					title={name}
					className={css.card}
					hoverable
					cover={
						links?.patch.small ? <img
							loading="lazy"
							alt={`Patch of ${name} mission`}
							src={links?.patch.small}
						/> : <div />
					}
					actions={[
						<Link
							className={clsx(!links?.article && css.disabledLink)}
							key="spacex"
							target={links?.article ? "_blank" : "_self"}
							to={links?.article || "/"}
						>
							<RocketOutlined />
						</Link>,
						<Link
							className={clsx(!links?.presskit && css.disabledLink)}
							key="reddit"
							target={links?.presskit ? "_blank" : "_self"}
							to={links?.presskit || "/"}
						>
							<BookOutlined />
						</Link>,
						<Link
							className={clsx(!links?.webcast && css.disabledLink)}
							key="youtube"
							target={links?.webcast ? "_blank" : "_self"}
							to={links?.webcast || "/"}
						>
							<YoutubeOutlined />
						</Link>,

					]}
				>
					<article className={css.article}>
						<div className={css.heading}>
							<Text type="secondary">
								{dayjs(date_utc).format("YYYY.MM.DD HH:mm:ss [UTC]")}
							</Text>
							{renderStatus(upcoming, success)}
						</div>
						<p className={css.details}>
							{details}
						</p>
					</article>
				</Card>
			))}
		</div>
	);
};

export default Launches;
