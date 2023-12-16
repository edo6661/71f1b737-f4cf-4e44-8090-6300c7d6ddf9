import { deleteProduct } from '@/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Button from '../styles/Button';
import DeleteConfirmationModal from './ModalDelete';
import DeletedDetailsModal from './ModalDeletedDetails';

interface ProductActionsProps {
    productPath?: boolean;
    id: string
}

const ProductActions: React.FC<ProductActionsProps> = ({ productPath, id }) => {

    const [result, setResult] = useState<ProductWithDeletion>()
    const router = useRouter()


    const handleEdit = () => {
        router.push(`/product/edit/${id}`)
    }

    const handleDelete = async (id: string) => {
        try {
            const result = await mutation.mutateAsync(id)
            setOpen(false)
            setOpenSecond(true)
            setResult(result)
        } catch (err) {
            console.error(err)
        }
    }

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (id: string) => deleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['Product', id] });
            queryClient.invalidateQueries({ queryKey: ['Products'] });
        }
    })

    const [open, setOpen] = useState(false);
    const [openSecond, setOpenSecond] = useState(false)

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const onCloseSecondModal = () => setOpenSecond(false);

    const formattedDate = result?.deletedOn ? new Date(result?.deletedOn.split("T")[0]).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No date from api'

    return (
        <>
            {productPath && (
                <>
                    <div>
                        <Button onClick={handleEdit} intent="secondary" className="w-full">Edit</Button>
                    </div>
                    <div>
                        <Button className="w-full rounded-r-xl" onClick={onOpenModal}>Delete</Button>
                    </div>
                </>
            )}
            <div className="col-span-2">
                <DeleteConfirmationModal
                    open={open}
                    onCloseModal={onCloseModal}
                    handleDelete={handleDelete}
                    id={id}
                />
                {result && <DeletedDetailsModal
                    openSecond={openSecond}
                    onCloseSecondModal={onCloseSecondModal}
                    formattedDate={formattedDate}
                    result={result}
                />}
            </div>
        </>
    );
};

export default ProductActions;
