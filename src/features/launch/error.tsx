import { Button, Result } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

type LaunchErrorProps = {
	retry: () => Promise<unknown>;
}
const LaunchError: FC<LaunchErrorProps> = ({ retry }: LaunchErrorProps) => {
	const navigate = useNavigate();

	const handleRetry = () => {
		void retry();
	};

	const handleGoHome = () => {
		navigate("/");
	};

	return (
		<Result
			status="warning"
			title="Something went wrong."
			extra={[
				<Button
					key="console"
					type="primary"
					onClick={handleRetry}
				>
					Retry last operation
				</Button>,
				<Button
					key="home"
					onClick={handleGoHome}
				>
					Go home
				</Button>,
			]}
		/>
	);
};

export default LaunchError;
