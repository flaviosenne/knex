const database = require('./database')
const { update } = require('./database')

// insert

// const dados = [
//     {
//         nome: 'Wolverine',
//         preco: 90.00
//     },{
//         nome: 'Capitão América',
//         preco: 100.00
//     },{
//         nome: 'Besta',
//         preco: 50.00
//     }
// ]
// database.insert(dados).into('games').then(data => {
//     console.log(data)
// }).catch(err => console.log(err))


// select

// database.select().table('games').then(data => {
//     console.log(data)
// }).catch(err => {console.log(err)})


// nested query
// database.insert({ nome: 'exemplo', preco: 130 }).into('games').then(data => {
//     database.select().table('games').then(data => {
//         console.log(data)
//     }).catch(err => { console.log(err) })

// }).catch(err => console.log(err))

// Where
//  database.select()
//     // .where({nome: 'exemplo'})
//     .whereRaw('nome = "Superman" OR preco > 100')
//     // .orWhere({id: '2'})
//     .table('games').then(data =>{
//         console.log(data)
//     }).catch(err => console.log(err))

// database.raw('select * from games').then(data => {
//     console.log(data)
// })



// delete
// database.where({id: 3}).delete().table('games').then(data => {
//     console.log(data)
// }).catch(console.log)


// update

// database.where({id: 1}).update({preco: 40}).table('games').then(data => {
//     console.log(data)
// }).catch(err => console.log(err))

database.select().table('games').orderBy('nome', 'desc').then(data => {
    console.log(data)
}).catch(err => console.log(err))