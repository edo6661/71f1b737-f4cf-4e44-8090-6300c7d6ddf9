/* eslint-disable react-hooks/exhaustive-deps */
import { useContextProvider } from "@/providers/ContextProvider";
import { FormikErrors } from "formik";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface IUploadFile {
    data: { images?: File };
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<{ images?: File }>> | Promise<void>;
    errors: FormikErrors<{ images?: File }>;
}

const UploadFile = ({ data, setFieldValue, errors }: IUploadFile) => {

    const { setImage, image } = useContextProvider()
    const pathName = usePathname()

    const editPathname = pathName.includes('edit')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0];
        setFieldValue('images', file);
    };

    useEffect(() => {
        if (data.images) setImage(data.images)
    }, [data.images])

    return (
        <div>
            <input
                type="file"
                name="images"
                id="images"
                accept="image/png, .svg"
                onChange={handleChange}
                className={` ${editPathname && 'hidden'}`}
            />
            {errors.images && <span id="error">{errors.images}</span>}
            
            {!data.images && image && editPathname && <label htmlFor="images"><Image width={500} height={500} src={image} alt="Preview" /></label>}

            {data.images && <Image width={500} height={500} src={URL.createObjectURL(data.images)} alt="Preview" />}
        </div>
    );
};

export default UploadFile;
