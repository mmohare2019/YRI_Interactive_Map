import TestRenderer from "react-test-renderer"
import AdminSignUp from "./AdminSignUp"

describe("AdminSignUp render tests", () => {
    test("render smoke test", () => {
        const testRenderer = TestRenderer.create(<AdminSignUp/>)
    })
})
