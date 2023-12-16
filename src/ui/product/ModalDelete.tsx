import Modal from "react-responsive-modal";
import Button from "../styles/Button";

interface DeleteConfirmationModalProps {
    open: boolean;
    onCloseModal: () => void;
    handleDelete: (id: string) => void;
    id?: string;
}

const DeleteConfirmationModal = ({ open, onCloseModal, handleDelete, id }: DeleteConfirmationModalProps) => {
    return (
        <Modal open={open} onClose={onCloseModal} center classNames={{ modal: 'modal' }}>
            <div className='p-5'>
                <Button onClick={onCloseModal} className="bg-blue-500">Cancel</Button>
                <Button onClick={() => handleDelete(id?.toString() ?? '')} className="bg-red-500">Delete</Button>
            </div>
        </Modal>
    );
};

export default DeleteConfirmationModal;
