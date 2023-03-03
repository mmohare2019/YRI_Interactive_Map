import TestRenderer from "react-test-renderer";
import Footer from "./Footer";
import React from "react";

describe("Footer render tests", () => {
    test("render smoke test", () => {
        const testRenderer = TestRenderer.create(<Footer/>)
    })
})
