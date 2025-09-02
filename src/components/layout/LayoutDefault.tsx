import Header from './Header';
import Footer from './Footer';

type LayoutDefaultProps = {
	children?: React.ReactNode;
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
