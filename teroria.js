// const express = require('express')
// const port = 3000
// const app = express()
// app.use(express.json())

    // QUERY PARAMS
// app.get('/users', (request, response) => {
//     const {name, age} = request.query

//     console.log(name,age)
    
//     return response.json({name: name, age: age})
// })

/*
app.get('/users', (request, response) => {
    const name = request.query.name    
    const age = request.query.age

    console.log(name,age)
    
    return response.json({name: name, age: age})
}) */

    // ROUTE PARAMS
// app.get('/users/:id', (request, response) => {
    
//     const { id } = request.params
//     console.log(id)
    
//     return response.json({id})
// })

    //BODY PARAMS
// app.get('/users', (request, response) => {
    
//     const {name, age} = request.body
    
//     return response.json({name, age})
// })

// app.listen(port, () => {
//     console.log(`🚀 Server started on port ${port})`)
// })