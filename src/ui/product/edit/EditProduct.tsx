'use client'
import { editProduct } from "@/api";
import useProduct from "@/hooks/useProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikHelpers } from "formik";
import { useState } from "react";
import CommonFormComponent from "../FormProduct";
import NewProduct from "../NewProduct";

const EditProduct = ({ id }: { id: string }) => {

    const [newProducts, setNewProducts] = useState<Product | null>(null);
    const { data, isLoading, isSuccess } = useProduct(id)

    const initialValues = {
        title: data?.title ?? '',
        category: data?.category ?? '',
        description: data?.description ?? '',
        price: data?.price ?? 0,
        rating: data?.rating ?? 0,
        stock: data?.stock ?? 0,
        brand: data?.brand ?? '',
    };


    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (newProduct: Product) => editProduct({ id, newProduct }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['Product', id] })
        },
    })


    const onSubmitFormik = async (values: Product, { resetForm }: FormikHelpers<Product>) => {
        try {
            const result = await mutation.mutateAsync({ ...values });
            setNewProducts(result);
        } catch (error) {
            console.error("Terjadi kesalahan saat melakukan mutasi:", error);
        }
    };



    if (isLoading) return <p>loading...</p>


    return (
        <article>
            <div>
                <div className='mt-40' >
                    <CommonFormComponent initialValues={initialValues} onSubmitFormik={onSubmitFormik} />
                    {newProducts && <NewProduct cover={data?.thumbnail} {...newProducts} />}
                </div>
            </div>
        </article>
    )
}

export default EditProduct