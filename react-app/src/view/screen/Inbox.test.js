import React from "react"
import Inbox from "./Inbox"
import { fireEvent, screen, render} from "@testing-library/react"


test("inbox render smoke test", () => {
    render(<Inbox/>)  

    const submitInput = screen.getByTestId("submit")
    fireEvent.click(submitInput)

});

