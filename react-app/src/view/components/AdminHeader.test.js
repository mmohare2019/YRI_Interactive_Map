import TestRenderer from "react-test-renderer";
import AdminHeader from "./AdminHeader";
import React from "react";
import renderer from 'react-test-renderer';

describe("admin header tests", () => {
    test("render smoke test", () => {
        TestRenderer.create(<AdminHeader/>)
    })
});

test("admin header test", function () {
    const component = renderer.create(<AdminHeader/>).toJSON();
    expect(component).toMatchSnapshot(); 
});