

import supertest from "supertest";
import { expect } from "chai";


const request=supertest('https://reqres.in');


describe('first api test suite', () => {

    it('get request', (done) => {
        
        request.get('/api/users?page=2').end((err,response)=>{
            if (err) {
                return done(err);
            }
          
            console.log(response.body.data[0])
            
            expect(response.statusCode).to.be.equal(200);
            
            done();
        })
    });
});