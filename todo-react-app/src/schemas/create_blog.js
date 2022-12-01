import * as Yup from "yup";

export const createBlogSchema = Yup.object({
    title: Yup.string().min(2).max(20).required("Title is a required field."),
    description: Yup.string().required("Description is a required field."),
    author: Yup.string().required("Author is a required field.")
    // confirm_password: Yup.string()
    //     .required()
    //     .oneOf([Yup.ref("password"), null], "Password must match"),
});