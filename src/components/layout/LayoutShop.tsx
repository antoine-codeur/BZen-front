type LayoutShopProps = {
	children?: React.ReactNode;
};

function LayoutShop({ children }: LayoutShopProps) {
	return <div className="layout-shop">{children}</div>;
}

export default LayoutShop;
