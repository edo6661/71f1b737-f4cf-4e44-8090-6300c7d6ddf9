'use client'
import { deleteProduct } from "@/api";
import useProduct from "@/hooks/useProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from 'next/link';
import { useState } from "react";
import Modal from "react-responsive-modal";

const Product = ({ id }: { id: string }) => {

    const { data } = useProduct(id)

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (id: string) => deleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['Product', id] });
            queryClient.invalidateQueries({ queryKey: ['Products'] });
        }
    })

    const handleDelete = async (id: string) => {
        try {
            const result = await mutation.mutateAsync(id)
            console.log(result)
        } catch (err) {
            console.error(err)
        }
    }

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    return (
        <article>
            <div>
                <p>{data?.title}</p>
                <button onClick={onOpenModal}>delete</button>
                <Modal open={open} onClose={onCloseModal} center >
                    <button onClick={onCloseModal} className="bg-blue-500">Cancel</button>
                    <button onClick={() => handleDelete(id)} className="bg-red-500">Detele</button>
                </Modal>
                <Link href={`edit/${id}`}>Edit</Link>
            </div>
        </article>
    )
}

export default Product