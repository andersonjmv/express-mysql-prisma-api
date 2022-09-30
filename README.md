# RestApi

rest api construida con Expressjs, mySQL y prisma ORM

# Instrucciones de uso

1. Descargue o clone el repoitorio
2. ubicado en la carpeta raiz ejecute el comando 

´´´
npm install

´´´

3. cree una base de datos en mySQL
4. configure la conexion a su base de datos en el archivo ´´´.env´´´

5. realice las migraciones
6. ejecute el comando
´´´
npm run dev
´´´
7. abra en un navegador la siguiente direccion
´´´
localhost:3000
´´´

8. para realizar cualquiera de las operaciones crud appoyese en un cliente rest como postman o thunder client(extension de visual studio)

# GET
´´´
http://localhost:3000/empleados
´´´
# POST
´´´
http://localhost:3000/empleado
´´´
# PUT
´´´
http://localhost:3000/empleado/:id
´´´
# DELETE
´´´
http://localhost:3000/empleado/:id
´´´
