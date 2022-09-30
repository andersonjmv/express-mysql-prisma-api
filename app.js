const express = require('express')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a la rest-api con PRISMA')
})

//Crear un registro
app.post('/empleado', async(req, res) => {
    const {nombre, apellido, email} = req.body
    const result = await prisma.empleado.create({
        data: {
            nombre, apellido, email
        }
    })
    res.json(result)
})

//Mostrar todos los registos
app.get('/empleados', async(req, res)=>{
    const empleados = await prisma.empleado.findMany()
    res.json(empleados)
})

//Actualizar un registro
app.put('/empleado/:id', async(req, res)=>{
    const {id} = req.params
    const {nombre, apellido, email} = req.body
    const empleado = await prisma.empleado.update({
        where: {id: Number(id)},
        data: {nombre, apellido, email}
    })
    res.json(empleado)
})

//Eliminar un registro
app.delete('/empleado/:id', async(req, res)=>{
    const {id} = req.params
    const empleado = await prisma.empleado.delete({
        where: {id: Number(id)}
    })
    res.json('El empleado ha sido eliminado correctamente')
})

app.listen(3000, () => console.log("Server corriendo"));
