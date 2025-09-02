type LayoutDefaultProps = {
	children?: React.ReactNode;
};

function LayoutDefault({ children }: LayoutDefaultProps) {
	return <div className="layout-default">{children}</div>;
}

export default LayoutDefault;
