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

    const src = typeof image === 'undefined' ? 'https://i.pinimg.com/564x/c6/65/c5/c665c53e8bdbcfebb1bb4b9536e6f630.jpg' : typeof image === 'object' ? URL.createObjectURL(image) : image

    return (
        <div>
            <div className="relative">
                <label htmlFor="images">
                    {<Image width={500} className="addImg" height={500} src={src} alt="Preview" />}
                    {!image && <p className="warn">Click Me (╰ ‿ ╯)</p>}
                </label>
                <input
                    type="file"
                    name="images"
                    id="images"
                    accept="image/png, .svg"
                    onChange={handleChange}
                    className={`hidden`}
                />
            </div>
            {errors.images && <span id="error">{errors.images}</span>}
        </div>
    );
};

export default UploadFile;
