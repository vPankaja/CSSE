import supertest from 'supertest'
import server from '../server.js'
//use the supertest object as our API
const api = supertest(server)


import Routes from '../models/RoutesModel.js'
import TimeTable from '../models/Timetable.js'
import UserModel from '../models/UserModel.js'

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

test('GET user call', async () => {
    
            await api
                .get('/api/user/allusers')
                .expect(200)
                .expect('Content-Type', /application\/json/)
        },20000)

test('POST vehicle call', async () => {
            //build a new item
            const newItem = {
                vehicleNo: 'test1',
                driverName:'test2',
                vehicleType: 'test3',
                cost:'test4'
            }
            //we send the item object to the DB through the API
            //we expect a successful result
            await api
                .post('/api/trMnger/postVehicle')
                .send(newItem)
                .expect(200)
        
        
            },20000)


test('POST vehicle fail call', async () => {
                //build a new item
                const newItem = {
                    vehicleNo: 'test1',
                    driverName:'test2',
                    vehicleType: 'test3',
                }
                //we send the item object to the DB through the API
                //we expect a successful result
                await api
                    .post('/api/trMnger/postVehicle')
                    .send(newItem)
                    .expect(400)
            
                },20000)  
                

test('GET driver call', async () => {
    
                    await api
                        .get('/api/driver/getTimeforDriver')
                        .expect(200)
                        .expect('Content-Type', /application\/json/)
                },20000)


            
test('GET timetable call', async () => {
    
                    await api
                        .get('/api/trMnger/getTimetables')
                        .expect(200)
                        .expect('Content-Type', /application\/json/)
                },20000)

    
    


   

    
