// CommonFormComponent.tsx
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import TextFieldComponent from './edit/EditTextField';

interface Props {
    initialValues: Product;
    onSubmitFormik: (values: Product, { resetForm }: FormikHelpers<Product>) => void;
}

const FormProduct = ({ initialValues, onSubmitFormik }: Props) => (
    <Formik initialValues={initialValues} enableReinitialize onSubmit={onSubmitFormik}>
        {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
                {Object.keys(initialValues).map((fieldName) => (
                    <Field key={fieldName} name={fieldName}>
                        {({ field }: FieldProps<string>) => (
                            <TextFieldComponent placeholder={`Enter ${fieldName}...`} {...field} />
                        )}
                    </Field>
                ))}
                <button type="submit">submit</button>
            </Form>
        )}
    </Formik>
);

export default FormProduct;
