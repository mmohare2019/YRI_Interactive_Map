import React from "react"
import { fireEvent, render, screen} from "@testing-library/react"
import MessageForm from "./MessageForm"
const messageHandler = require("../../event-handler/messageHandler")

test("message form render smoke test", () => {
    render(<MessageForm/>);

    expect(screen.getByRole("heading", {name: "Submit a Request"})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Submit"})).toBeInTheDocument();

    //const titleInput = result.container.querySelector("#title");
    const titleInput = screen.getByPlaceholderText("Enter title");
    fireEvent.change(titleInput, {target: {value: "test title"}});

    //const descriptionInput = result.container.querySelector("#description");
    const descriptionInput = screen.getByPlaceholderText("Description");
    fireEvent.change(descriptionInput, {target: {value: "test description"}});

    //const submitInput = result.container.querySelector("#submit")
    const submitInput = screen.getByTestId("submit")

    messageHandler.submitMessage = async(title, description) => {
        return {
            status: 200
        }
    } 
        
    fireEvent.click(submitInput)

});
