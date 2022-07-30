# api-sofka
Para la configuración del proyecto en local se deben tener en cuenta los siguientes aspectos.
1- debe crear un archivo en la raíz del programa llamado .env, el cual es para configurar las variables de entorno.
2- en el archivo example.env encontrara las dos variables que se están utilizando actualmente. En la variable PORT puede utilizar en puerto que desee, un ejemplo el 8080.
Para la persistencia de datos se utiliza una base de datos no-relacional(mongoDB) por lo cual necesita una cadena de conexión para esta, si no cuenta con una puede utilizar la mia.

MONGODB_CNN= mongodb+srv://servicios:vqRJzSZPenj2fzQy@cluster0.vgpk1.mongodb.net/naves

