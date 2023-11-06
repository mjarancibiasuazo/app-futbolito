import  * as Yup  from "yup";

export function initailValues(){
    return {
        name: "",
        address: "",
        phone: "",
        email: "",
        //dateOfTorneo: "",
        description: "",
        location: null,
        images: [],
       
    }
}

export function validationSchema(){
    return Yup.object({
        name: Yup.string().required("campo obligatorio"),
        address: Yup.string().required("campo obligatorio"),
        phone: Yup.string().required("campo Obligatorio"),
        email: Yup.string()
        .email("No es un email valido")
        .required("Campo obligatorio"),
        description: Yup.string().required("campo obligatorio"),
        //dateOfTorneo: Yup.string().required("Campo obligatorio"),
        location: Yup.object().required("La localización es requerida"),
        images: Yup.array()
        .min(1, "Se requiere una imagen como minimo")
        .required("La imagen del logo del torneo es requerida"),

        

    });

}
