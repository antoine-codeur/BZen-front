type AlertProps = {
	message: string;
};

function Alert({ message }: AlertProps) {
	return <div className="alert">{message}</div>;
}

export default Alert;
