import TestRenderer from "react-test-renderer";
import AddCategoryForm from "./AddCategoryForm";
import React from "react";
import renderer from 'react-test-renderer';

describe("add category form tests", () => {
    test("render smoke test", () => {
        TestRenderer.create(<AddCategoryForm/>)
    })
});

test("add category form test", function () {
    const component = renderer.create(<AddCategoryForm/>).toJSON();
    expect(component).toMatchSnapshot(); 
});
