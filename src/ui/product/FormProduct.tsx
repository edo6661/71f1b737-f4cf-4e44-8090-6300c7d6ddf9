// CommonFormComponent.tsx
import UploadFile from '@/utils/UploadFile';
import { Field, FieldProps, Form, Formik, FormikHelpers, useFormik } from 'formik';
import Button from '../styles/Button';
import ProductTextField from './edit/ProductTextField';

interface Props {
    initialValues: Product;
    onSubmitFormik: (values: Product, { resetForm }: FormikHelpers<Product>) => void;
}

const FormProduct = ({ initialValues, onSubmitFormik }: Props) => {
    

    // ! 5 EMBE
    const MAX_SIZE = 5000000;
    const validateImage = (values: { images?: File }) => {
        if (values.images && values.images.size > MAX_SIZE) {
            return { images: "Max file size exceeded." };
        }
    };

    const formik = useFormik<{ images?: File }>({
        initialValues: {},
        onSubmit: (values) => console.log(values),
        validate: validateImage
    })

    return (
        <Formik initialValues={initialValues} enableReinitialize onSubmit={onSubmitFormik}>
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div className=' grid md:grid-cols-2 grid-cols-1'>
                        <div>
                            <UploadFile data={formik.values} errors={formik.errors} setFieldValue={formik.setFieldValue} />
                        </div>
                        <div>
                            {Object.keys(initialValues).map((fieldName) => (
                                <Field key={fieldName} name={fieldName}>
                                    {({ field }: FieldProps<string>) => (
                                        <ProductTextField placeholder={`Enter ${fieldName}...`} {...field} />
                                    )}
                                </Field>
                            ))}
                        </div>
                    </div>
                    <Button className='w-full' type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    )


}

export default FormProduct;
