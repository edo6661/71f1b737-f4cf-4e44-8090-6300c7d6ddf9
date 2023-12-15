/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { editProduct } from "@/api";
import useProduct from "@/hooks/useProduct";
import { useContextProvider } from "@/providers/ContextProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import FormProduct from "../FormProduct";
import NewProduct from "../NewProduct";

const EditProduct = ({ id }: { id: string }) => {

    const [newProducts, setNewProducts] = useState<Product | null>(null);
    const { image, setImage } = useContextProvider()
    const { data, isLoading, isError, error } = useProduct(id)

    useEffect(() => {
        if (data?.thumbnail) setImage(data.thumbnail)
    }, [data?.thumbnail])

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
            queryClient.invalidateQueries({ queryKey: ['Product', id] });
            queryClient.invalidateQueries({ queryKey: ['Products'] });
        }
    })


    const onSubmitFormik = async (values: Product, { resetForm }: FormikHelpers<Product>) => {
        resetForm()
        try {
            const result = await mutation.mutateAsync({ ...values, thumbnail: URL.createObjectURL(image) });
            console.log(result)
            setNewProducts(result);
        } catch (error) {
            console.error("Terjadi kesalahan saat melakukan mutasi:", error);
        }
    };



    if (isLoading) return <p>loading...</p>


    return (
        <article>
            <div>
                <div  >
                    {!newProducts ? <FormProduct initialValues={initialValues} onSubmitFormik={onSubmitFormik} /> : <NewProduct {...newProducts} />}
                </div>
            </div>
        </article>
    )
}

export default EditProduct