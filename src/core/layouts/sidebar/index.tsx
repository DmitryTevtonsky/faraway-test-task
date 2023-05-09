import { Button, DatePicker, Drawer, Form, Input, Switch } from "antd";
import React, { FC, useMemo } from "react";
import { Dayjs } from "dayjs";

import { selectFilters, selectSidebarVisibility } from "core/redux/selectors";
import { resetFilters, setFilters, toggleSidebarVisibility } from "core/redux/slice";
import { useAppDispatch, useAppSelector } from "store";

import css from "./index.module.css";

const { RangePicker } = DatePicker;

type FiltersFormValues = {
	text: string;
	datesRange: [Dayjs, Dayjs];
	success: boolean;
	upcoming: boolean;
}

const Sidebar: FC = () => {
	const dispatch = useAppDispatch();

	const sidebarVisibility = useAppSelector(selectSidebarVisibility);

	const filters = useAppSelector(selectFilters);

	const handleFinish = ({ text, datesRange, success, upcoming }: FiltersFormValues) => {
		dispatch(setFilters({
			text,
			success,
			upcoming,
			datesRange: datesRange
				? [datesRange[0].toISOString(), datesRange[1].toISOString()]
				: undefined,
		}));

		dispatch(toggleSidebarVisibility());
	};

	const handleReset = () => {
		dispatch(resetFilters());

		dispatch(toggleSidebarVisibility());
	};

	const handleClose = () => {
		dispatch(toggleSidebarVisibility());
	};

	const fields = useMemo(() => filters ? [
		{ name: ["text"], value: filters.text },
		{ name: ["datesRange"], value: filters.datesRange },
		{ name: ["success"], value: filters.success },
		{ name: ["upcoming"], value: filters.upcoming },
	] : undefined, [filters]);

	return (
		<Drawer
			title="Filters"
			onClose={handleClose}
			open={sidebarVisibility}
			rootClassName={css.drawerRoot}
			extra={
				<>
					<Button className={css.button} onClick={handleClose}>
						Cancel
					</Button>
					<Button className={css.button} form="filters" type="primary" htmlType="submit">
						Submit
					</Button>
				</>
			}
		>
			<Form
				id="filters"
				layout="vertical"
				onFinish={handleFinish}
				fields={fields}
			>
				<Form.Item label="Search" name="text">
					<Input />
				</Form.Item>
				<Form.Item label="Date range" name="datesRange">
					<RangePicker allowEmpty={[true, true]} className={css.rangePicker} />
				</Form.Item>
				<Form.Item label="Successful" name="success" valuePropName="checked">
					<Switch />
				</Form.Item>
				<Form.Item label="Upcoming" name="upcoming" valuePropName="checked">
					<Switch />
				</Form.Item>
				<Form.Item>
					<Button
						className={css.button}
						form="filters"
						type="primary"
						htmlType="submit"
					>
						Submit
					</Button>
					<Button
						className={css.button}
						htmlType="button"
						onClick={handleReset}
					>
						Reset
					</Button>
				</Form.Item>
			</Form>
		</Drawer>
	);
};

export default Sidebar;
