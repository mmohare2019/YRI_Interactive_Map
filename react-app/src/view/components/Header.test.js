import TestRenderer from "react-test-renderer";
import Header from "./Header";
import React from "react";

describe("Footer render tests", () => {
    test("render smoke test", () => {
        const testRenderer = TestRenderer.create(<Header/>)
    })
})