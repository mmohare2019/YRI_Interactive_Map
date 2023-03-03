import TestRenderer from "react-test-renderer";
import Footer from "./Footer";
import React from "react";
import renderer from 'react-test-renderer';

describe("Footer render tests", () => {
    test("render smoke test", () => {
        const testRenderer = TestRenderer.create(<Footer/>)
    })
});

test("header test", function () {
    const component = renderer.create(<Footer/>).toJSON();
    expect(component).toMatchSnapshot(); 
});