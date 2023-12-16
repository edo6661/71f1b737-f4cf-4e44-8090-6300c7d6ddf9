import Modal from "react-responsive-modal";

interface DeletedDetailsModalProps {
    openSecond: boolean;
    onCloseSecondModal: () => void;
    formattedDate: string;
    result: ProductWithDeletion
}

const DeletedDetailsModal = ({ openSecond, onCloseSecondModal, formattedDate, result }: DeletedDetailsModalProps) => {
    return (
        <Modal open={openSecond} onClose={onCloseSecondModal} center classNames={{ modal: 'modal' }}>
            <div className='text-black p-5'>
                <p>deletedOn:</p>
                <span className='text-uniqueWord'>
                    {formattedDate}
                </span>
                <p>isDeleted: </p>
                <span className='text-uniqueWord'>{result?.isDeleted.toString()}</span>
            </div>
        </Modal>
    );
};

export default DeletedDetailsModal;
