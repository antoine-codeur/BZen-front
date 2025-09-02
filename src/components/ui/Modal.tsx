type ModalProps = {
	children?: React.ReactNode;
};

function Modal({ children }: ModalProps) {
	return <div className="modal">{children}</div>;
}

export default Modal;
