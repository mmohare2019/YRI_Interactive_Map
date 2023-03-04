import {render} from "@testing-library/react"
import AdminSignUp from "./AdminSignUp"
import React from "react"

describe("AdminSignUp render tests", () => {
    test("render smoke test", () => {
        render(<AdminSignUp/>)
    })
})
