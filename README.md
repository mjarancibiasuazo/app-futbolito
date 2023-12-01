# Proyecto de Titulo Aplicación Móvil Futbolito

Aplicación móvil para organizar torneos de futbolito (baby futbol) en comunidades vulnerables.

# Características

* Registrar nuevo organizador
* Inicio de sesión organizador
* Crear torneos de futbolito
* Visualizar lista de torneos creados
* Registrar equipo de futbolito
* Visualizar resultados y estadísticas

# Beneficios

El proyecto se centra en proporcionar a niños y jóvenes en comunidades vulnerables oportunidades más accesibles y rápidas para participar en actividades físicas y deportivas. Esta iniciativa tiene como objetivo mejorar significativamente su bienestar general al facilitar el acceso y la participación activa en eventos recreativos, contribuyendo así a la calidad de vida de estos grupos.

# UI/UX

<img src="https://github.com/mjarancibiasuazo/app-futbolito/assets/74749393/1848d541-573a-4721-b955-de2c44e1dc21" width="200" height="300">
<img src="https://github.com/mjarancibiasuazo/app-futbolito/assets/74749393/4eac8a7b-4121-49f8-b72f-f722920336cf" width="200" height="300"> 
<img src="https://github.com/mjarancibiasuazo/app-futbolito/assets/74749393/b5e2caa6-e075-4fab-b0c0-704997ac6a97" width="200" height="300">

# Documentación

* [React Native](https://reactnative.dev/) : cree aplicaciones para Android e iOS usando React

* [JavaScript](https://devdocs.io/javascript/) : Lenguaje de programación JavaScript o ECMAScript.

* [Expo](https://docs.expo.dev/) : Expo es una herramienta y plataforma que simplifica el desarrollo de aplicaciones móviles utilizando React Native. 

* [Firebase](https://firebase.google.com/docs?hl=es-419) : Firestore para obtener datos en la nube en tiempo real.

  # Firebase 

* Cree un proyecto de Firebase en la consola de Firebase.

* Agregar. aplicación web y (IOS y Android), guarde todos los archivos en la ubicación respectiva.

* Copie la configuración web de firebase y agréguela. en el archivo firebase.js. Ejemplo:

```
  const firebaseConfig = {
  apiKey: '<apiKey>',
  authDomain: '<authDomain>',
  projectId: '<projectId>',
  storageBucket: '<storageBucket>',
  messagingSenderId: '<messagingSenderId>',
  appId: '<appId>',
};

```

# Firestone Database

Ejemplo base de datos con estructura JSON llamado documento y colección a un conjunto de documentos.

```
{
  "torneo_id": 1,
  "nombre_torneo": "Torneo de Futbolito",
  "direccion": "San Isidro 154",
  "email": "torneo@gmail.com",
  "telefono": +569961202247,
  "descripcion": "Torneo Juvenil",
  "imagen": "url_imagen"
}
```


# Instalación 

Para instalar dependencias en un proyecto de React Native utilizando Yarn, puedes seguir estos pasos:

1-Abre una terminal en el directorio de tu proyecto de React Native.

2-Ejecuta el siguiente comando para inicializar un nuevo proyecto de React Native (si aún no lo has hecho):

```
npx react-native init app-futbolito

```

3-Ahora, para instalar las dependencias, utiliza el siguiente comando con Yarn:

```
yarn install

```
Este comando instalará todas las dependencias necesarias para tu proyecto de React Native basándose en el archivo package.json en el directorio del proyecto.

1-Para Usar el emulador de Android Studio con Android

```
yarn android
```

## Autor

- [@MariajoseArancibia](https://github.com/mjarancibiasuazo)




