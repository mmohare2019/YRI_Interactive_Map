const dbcon = require('./dbConnection');
const dao = require('./partnerDao');

beforeAll(function() {
    dbcon.connect(); 
});

test('Create new partner', async function () {
    const newPartner  = {
        name: "My house",
        address: "1131 Armacost Road, Parkton, MD, 21120",
        description: "This is my house",
        links: "http://google.com"
    };

    let created = await dao.create(newPartner);
    expect(created.name).toBe(newPartner.name);
    expect(created.address).toBe(newPartner.address);
    expect(created.description).toBe(newPartner.description);
    expect(created.links).toBe(newPartner.links);
    dao.deletePartner(created._id)
});


test('Fetch all partners', async function() {
    const newPartner  = {
        name: "My house",
        address: "1131 Armacost Road, Parkton, MD, 21120",
        description: "This is my house"
    };

    let created = await dao.create(newPartner);
    let partners = await dao.partners();
    expect(partners).not.toBe(null);
    dao.deletePartner(created._id)
});

test('Delete partner', async function () {
    const newPartner  = {
        name: "My house",
        address: "1131 Armacost Road, Parkton, MD, 21120",
        description: "This is my house"
    };

    let created = await dao.create(newPartner);

    await dao.deletePartner(created._id);
    let partner = await dao.findPartner(created._id);
    expect(partner).toBe(null);
});

describe("tests for editing/updating a partner", () => {
    test("success case", async() => {
        const newPartner = {
            name: "My house",
            address: "1131 Armacost Road, Parkton, Maryland, 21120"
        }

        const created = await dao.create(newPartner)
        const id = created._id

        const toUpdate = {
            _id: created._id,
            name: created.name,
            address: "252 Rodgers Forge Road, Towson MD, 21212" // new address
        }
        const address = toUpdate.address

        const updated = await dao.update(toUpdate)

        expect(updated._id).toStrictEqual(created._id) // make sure id has not changed
        expect(updated.address).toBe(toUpdate.address) // make sure address has been updated

        await updated.deleteOne()
    })

    test("document doesn't actually exist", async() => {
        const fakeID = "643854555b6251c97273e33a"
        const toUpdate = {
            _id: fakeID,
            name: "Place",
            address: "1131 Armacost Road, Parkton, MD"
        }

        const updated = await dao.update(toUpdate)
        expect(updated).toBe(null)
    })
})