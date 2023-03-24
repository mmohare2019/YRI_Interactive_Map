const app = require("../app")
const supertest = require("supertest")
const request = supertest(app)

test("success case", async () => {   
    var message = {
        title: "success-case-t", 
        description: "success-case-d"
    }
        
    const res = await request
        .post("/message")
        .set('Content-type', "application/json")
        .send(message)
        
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('post');
});


