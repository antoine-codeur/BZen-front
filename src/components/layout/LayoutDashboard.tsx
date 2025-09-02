type LayoutDashboardProps = {
	children?: React.ReactNode;
};

function LayoutDashboard({ children }: LayoutDashboardProps) {
	return <div className="layout-dashboard">{children}</div>;
}

export default LayoutDashboard;
