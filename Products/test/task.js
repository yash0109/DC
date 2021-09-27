//Load chai, chai-http and the file you want to test
const chai = require('chai');
const server = require("../products");
let chaiHttp = require('chai-http');

//Assertion Style
chai.should();

//Call API using HTTP Protocol
chai.use(chaiHttp);

describe('Testing routes', ()=>{
    //Test the GET method
    describe("GET /products", ()=>{
        it("It should get all the products", (done)=>{
            chai.request(server)
            .get("/products")
            .end((err,response)=>{
                response.body.should.be.a('array');
                response.body.length.should.be.eq(5);
            done();
            })
        }).timeout(10000);
        it("It should NOT GET all the products", (done)=>{
            chai.request(server)
            .get("/prod")
            .end((err,response)=>{
                response.should.have.status(404);
            done();
            })
        })
        it("It should GET product by ID", (done)=>{
            const ID = "614ed26a3fe13f9f2a0b94e1"
            chai.request(server)
            .get("/product"+ID)
            .end((err,response)=>{
                response.should.be.a('object');
            done();
            })
        })
        it("It should not GET product by ID", (done)=>{
            const ID = "333"
            chai.request(server)
            .get("/product"+ID)
            .end((err,response)=>{
                response.should.have.status(404);
            done();
            })
        })
        
    })
})