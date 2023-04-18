import React from "react"
import PartnerForm from "./PartnerForm"
import { fireEvent, screen, render} from "@testing-library/react"

test("partner form render smoke test", () => {
    render(<PartnerForm/>)  
    
    const nameInput = screen.getByPlaceholderText("Enter name");
    fireEvent.change(nameInput, {target: {value: "test name"}});

    const addressInput = screen.getByPlaceholderText("Address");
    fireEvent.change(addressInput, {target: {value: "test address"}});

    const descriptionInput = screen.getByPlaceholderText("Description");
    fireEvent.change(descriptionInput, {target: {value: "test description"}});
    
    const linkInput = screen.getByTestId("link");
    fireEvent.change(linkInput, {target: {value: "test url"}});

    const submitInput = screen.getByTestId("submit")
    fireEvent.click(submitInput)
});

