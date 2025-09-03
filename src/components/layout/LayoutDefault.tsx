import Header from './Header';
import Footer from './Footer';

import type { ReactNode } from 'react';

type LayoutDefaultProps = {
	children?: ReactNode;
};

function LayoutDefault({ children }: LayoutDefaultProps) {
	return (
		<div className="layout-default">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default LayoutDefault;
