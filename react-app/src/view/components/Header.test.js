import TestRenderer from "react-test-renderer";
import Header from "./Header";
import React from "react";
import renderer from 'react-test-renderer';

describe("Header render tests", () => {
    test("render smoke test", () => {
        const testRenderer = TestRenderer.create(<Header/>)
    })
    
});

test("header test", function () {
    const component = renderer.create(<Header/>).toJSON();
    expect(component).toMatchSnapshot(); 
});