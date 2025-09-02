import React from "react";

type AlertProps = {
	message: string;
};

const Alert: React.FC<AlertProps> = ({ message }) => {
	return <div className="alert">{message}</div>;
};

export default Alert;
