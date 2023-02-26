const dbcon = require('./dbConnection');
const dao = require('./messageDao');

beforeAll(function() {
    dbcon.connect(); 
});

test('Create new message', async function () {
    let newMessage = {
        title: "Address update",
        description: "I think this location needs to be updated"
    };

    let created = await dao.create(newMessage);
    expect(created.title).toBe(newMessage.title);
    expect(created.description).toBe(newMessage.description);
});

test('Inbox of all messages', async function () {
    let newMessage = {
        title: "Address update",
        description: "I think this location needs to be updated"
    };

    let created = await dao.create(newMessage);
    let inbox = await dao.inbox();
    expect(inbox).not.toBe(null);
})