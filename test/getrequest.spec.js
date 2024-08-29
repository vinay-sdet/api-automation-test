//import supertest and chai libraries in your test file

import supertest from "supertest";
import { expect } from "chai";

//we are creating a Supertest agent that is configured to send HTTP requests with the specified base URL
const request=supertest('https://reqres.in');

// As you know we write tests in mocha using describe and it blocks
//we create a test suite
describe('first api test suite', () => {
//test case which performs a get request
    it('get request', (done) => {
         //using the request object we call the get request with the endpoint.
         //end is callback function used to handle the response and perform any necessary assertions.
        request.get('/api/users?page=2').end((err,response)=>{
            if (err) {
                return done(err);
            }
            //printing the response body
            console.log(response.body.data[0])
            //apply assertions to the status code
            expect(response.statusCode).to.be.equal(200);
            
            done();
        })
    });
});