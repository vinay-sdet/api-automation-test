import supertest from 'supertest';
const req = supertest('https://gorest.co.in/public-api/');
const TOKEN = '251860d7f41f06fb617f0b8dcaa87b4c214d3c940bef90af54676d4eab2127d5';
import { expect } from "chai";

// describe('Users', ()=> {

//     // it.skip('GET/users', (done)=>{
//     //     req.get(`users?access-token=${TOKEN}`).end((err, res) => {
//     //             console.log("Status Code " + res.statusCode);
//     //             console.log('Error - '+err);
//     //             console.log("---------------Response---------------");
//     //             console.log(res.body);
//     //             console.log("-----------------------");
//     //             console.log(res.body);
//     //             expect(res.body).to.be.empty;
//     //             done(); 
//     //         });
//     // }); 

//     // it.skip('GET/users', ()=>{
//     //     return req.get(`users?access-token=${TOKEN}`).then((res) => {
//     //             // console.log("Status Code " + res.statusCode);
//     //             // console.log("---------------Response---------------");
//     //             // console.log(res.body);
                
//     //             expect(res.body.data).to.not.be.empty;
               
//     //         });
//     // });


//     // it('GET/users:id', ()=>{
//     //     return req.get(`users/1?access-token=${TOKEN}`).then((res) => {
//     //             // console.log("Status Code " + res.statusCode);
//     //             // console.log("---------------Response---------------");
//     //             // console.log(res.body);
                
//     //             expect(res.body.data.id).to.be.eq(1);
               
//     //         });
//     // });


// });    