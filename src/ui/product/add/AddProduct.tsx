'use client'
import { addProduct } from '@/api';
import { useContextProvider } from '@/providers/ContextProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormikHelpers } from 'formik';
import { useState } from 'react';
import FormProduct from '../FormProduct';
import SingleProduct from '../SingleProduct';

const AddProduct = () => {

    const [newProducts, setNewProducts] = useState<Product | null>(null);
    const [imgErr, setImgErr] = useState(false)

    const { image } = useContextProvider()

    const initialValues = {
        title: '',
        category: '',
        description: '',
        price: 0,
        rating: 0,
        stock: 0,
        brand: '',
    };


    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (newProduct: Product) => addProduct(newProduct),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['Products'] }),
    })

    const onSubmitFormik = async (values: Product, { resetForm }: FormikHelpers<Product>) => {
        try {
            const result = await mutation.mutateAsync({ ...values, thumbnail: URL.createObjectURL(image) });
            setNewProducts(result);
            setImgErr(false)
            resetForm()
        } catch (error) {
            setImgErr(true)
            console.error("Terjadi kesalahan saat melakukan mutasi:", error);
        }
    };

    return (
        <section className='baseContainer'>
            {!newProducts ? <FormProduct initialValues={initialValues} onSubmitFormik={onSubmitFormik} /> : <SingleProduct {...newProducts} />}
            {imgErr && <p className='text-red-500 text-4xl  '>CLICK THE IMAGE (⩺_⩹)</p>}
        </section>
    )
}

export default AddProduct