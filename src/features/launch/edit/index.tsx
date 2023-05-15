import { Button, Empty, Form, Input } from "antd";
import { apiSlice, useGetLaunchQuery } from "api";
import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "store";
import { RouterParams } from "types";

import css from "./index.module.css";

type FormValues = {
	name: string;
}

const LaunchEdit: FC = () => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();
	const { launchId } = useParams<RouterParams>();

	if (!launchId) return null;

	const { data, isLoading, isFetching, isError } = useGetLaunchQuery(launchId);

	if (isLoading || isFetching) return <>kek</>;

	if (isError) return <>lol</>;

	if (!data) return <Empty />;

	const { name } = data;

	const handleFinish = ({ name }: FormValues) => {
		dispatch(
			apiSlice.util.updateQueryData("getLaunch", launchId, (draft) => {
				Object.assign(draft, { name });
			})
		);

		navigate(`/${launchId}`);
	};

	return (
		<div className={css.launchEdit}>
			<Form
				initialValues={{ name }}
				layout="vertical"
				onFinish={handleFinish}
				autoComplete="off"
			>
				<Form.Item
					label="Name"
					name="name"
					rules={[{ required: true, message: "Please input name!" }]}
				>
					<Input data-cy="edit-launch-name-input" />
				</Form.Item>

				<Form.Item >
					<Button type="primary" htmlType="submit" data-cy="edit-launch-name-submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LaunchEdit;
