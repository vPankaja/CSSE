import supertest from 'supertest'
import server from '../server.js'
//use the supertest object as our API
const api = supertest(server)


import Routes from '../models/RoutesModel.js'
import TimeTable from '../models/Timetable.js'

//Shenal tests
test('GET route call', async () => {
    
    await api
        .get('/api/manager/getAllRoutes')
        .expect(200)
        .expect('Content-Type', /application\/json/)
},70000)

test('POST route call', async () => {
    //build a new item
    const newItem = {
        routeId:'sent from Jest!',
        route:'111',
        trafficType:'normal'
    }
    //we send the item object to the DB through the API
    //we expect a successful result
    await api
        .post('/api/manager/postRoutes')
        .send(newItem)
        .expect(200)

        const items = await Routes.find({})
    //let's check that the last item added was indeed newItem object
    //it should contain the description "sent from Jest!"
    expect(items[items.length-1].routeId).toBe("sent from Jest!")

    },20000)

    test('POST route fail call', async () => {
        //build a new item
        const newItem = {
            route:'111',
            trafficType:'normal'
        }
        //we send the item object to the DB through the API
        //we expect a successful result
        await api
            .post('/api/manager/postRoutes')
            .send(newItem)
            .expect(400)
    
        },20000)


    
    


   

    
