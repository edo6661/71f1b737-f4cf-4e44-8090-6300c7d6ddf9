'use client'
import { addProduct } from '@/api';
import { useContextProvider } from '@/providers/ContextProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormikHelpers } from 'formik';
import { useState } from 'react';
import FormProduct from '../FormProduct';
import NewProduct from '../NewProduct';

const AddProduct = () => {

    const [newProducts, setNewProducts] = useState<Product | null>(null);

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
        console.log(result)
            setNewProducts(result);
        } catch (error) {
            console.error("Terjadi kesalahan saat melakukan mutasi:", error);
        }
        resetForm()
    };

    return (
        <section>
            {!newProducts ? <FormProduct initialValues={initialValues} onSubmitFormik={onSubmitFormik} /> : <NewProduct {...newProducts} />}
        </section>
    )
}

export default AddProduct