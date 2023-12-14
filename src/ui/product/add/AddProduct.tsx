'use client'
import { addProduct } from '@/api';
import useTitle from '@/hooks/useTitle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormikHelpers } from 'formik';
import { useState } from 'react';
import CommonFormComponent from '../FormProduct';
import NewProduct from '../NewProduct';

const AddProduct = () => {

    const [newProducts, setNewProducts] = useState<Product | null>(null)!;

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
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['Products'] })
        },
    })

    const onSubmitFormik = async (values: Product, { resetForm }: FormikHelpers<Product>) => {
        try {
            const result = await mutation.mutateAsync({ ...values });
            console.log(result)
            setNewProducts(result ?? null);
        } catch (error) {
            console.error("Terjadi kesalahan saat melakukan mutasi:", error);
        }
    };

    useTitle('test')

    return (
        <section>
            <CommonFormComponent initialValues={initialValues} onSubmitFormik={onSubmitFormik} />
            {newProducts && <NewProduct {...newProducts} />}
        </section>
    )
}

export default AddProduct