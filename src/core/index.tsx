import React, { FC } from "react";

import css from "./index.module.css";
import { Footer, Header, Main, Sidebar } from "./layouts";

const Core: FC = () => {
	return (
		<section className={css.layout}>
			<header className={css.header}>
				<Header />
			</header>
			<main className={css.main}>
				<Main />
			</main>
			<footer className={css.footer}>
				<Footer />
			</footer>
			<Sidebar />
		</section>
	);
};

export default Core;
