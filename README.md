# MagnetoChallenge

#### PASOS A SEGUIR PARA EJECUTAR ESTA APP DE MANERA LOCAL

- Primero debera clonar este repositorio a su computadora.
- Luego abra el proyecto en visual studio code o el IDE de su preferencia.
- Abra una consola como powershell o git bash, y ejecute el comando npm i desde la carpeta raiz.
- Debe tener en cuenta que necesita tener instalado pgadmin para crear la base de dato de posgres y conectarnos a ella.
- Asegurese de crear un archivo .env en la carpeta raiz de este repositorio e inserte ahi, los valores correspondientes.
- Estos valores seran usado en el archivo db.js que se encuentra en src.
- una ves tenga todo listo, puede ejecutar el comando npm start en la consola y podra empezar hacer pruebas.
- puede usar postman para enviar peticiones POST a la ruta /mutant/ o un get a /stats/.
- Tambien puede usar los endpoint desde la app que esta desplegada
- Para el post puede usar, 'https://magnetochallenge-c0afa370a865.herokuapp.com/api/mutant/'
- Para el get puede usar la siguiente dirección https://magnetochallenge-c0afa370a865.herokuapp.com/api/stats/
