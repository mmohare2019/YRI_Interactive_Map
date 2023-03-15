const dbcon = require('./dbConnection');
const dao = require('./partnerDao');

beforeAll(function() {
    dbcon.connect(); 
});

test('Create new partner', async function () {
    const newPartner  = {
        name: "Library",
        address: "123 Green Street",
        description: "This is a library"
    };

    let created = await dao.create(newPartner);
    expect(created.name).toBe(newPartner.name);
    expect(created.address).toBe(newPartner.address);
    expect(created.description).toBe(newPartner.description);
});


test('Fetch all partners', async function() {
    const newPartner  = {
        name: "Library",
        address: "123 Green Street",
        description: "This is a library"
    };

    await dao.create(newPartner);
    let partners = await dao.partners();
    expect(partners).not.toBe(null);
});

test('Delete partner', async function () {
    const newPartner  = {
        name: "Library",
        address: "123 Green Street",
        description: "This is a library"
    };

    let created = await dao.create(newPartner);

    await dao.deletePartner(created._id);
    let partner = await dao.findPartner(created._id);
    expect(partner).toBe(null);
});