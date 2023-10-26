import  * as Yup  from "yup";

export function initailValues(){
    return {
        name: "",
        address: "",
        email: "",
        description: "",
        location: null,
       
    }
}

export function validationSchema(){
    return Yup.object({
        name: Yup.string().required("campo obligatorio"),
        address: Yup.string().required("campo obligatorio"),
        email: Yup.string()
        .email("No es un email valido")
        .required("Campo obligatorio"),
        description: Yup.string().required("campo obligatorio"),
        location: Yup.object().required("La localización es requerida"),
        

    });

}
