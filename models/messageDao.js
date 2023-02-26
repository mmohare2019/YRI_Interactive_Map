const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title : {type: String, required: true, maxLength:100},
    description : {type: String, required: true}
});

const messageModel = mongoose.model("Message", MessageSchema);

// Create a new message 
exports.create = async function(newMessage) {
    const message = new messageModel(newMessage);
    const createdMessage = await message.save();
    return createdMessage;
}

// Fetch all messages 
exports.inbox = async function() {
    let inbox = await messageModel.find();
    return inbox;
}

// Delete message by id from inbox 


// Delete all messages in an inbox 
exports.deleteAll = async function() {
    await messageModel.deleteMany();
}