import TestRenderer from "react-test-renderer";
import AddCategoryForm from "./AddCategoryForm";
import { fireEvent, screen, render} from "@testing-library/react"
import React from "react";
import renderer from 'react-test-renderer';

const categoryHandler = require("../../event-handler/categoryHandler")


describe("add category form tests", () => {
    test("render smoke test", () => {
        TestRenderer.create(<AddCategoryForm/>)
    })
});

test("add category form test", function () {
    const component = renderer.create(<AddCategoryForm/>).toJSON();
    expect(component).toMatchSnapshot(); 

    render(<AddCategoryForm/>)
    const nameInput = screen.getByPlaceholderText("Enter name");
    fireEvent.change(nameInput, {target: {value: "test name"}});

    const colorInput = screen.getByTestId("color");
    fireEvent.change(colorInput, {target: {value: "#692f89"}})

    const submitInput = screen.getByTestId("submit")

    categoryHandler.submitAddCategoryForm = async(name, color, icon) => {
        return {
            status: 200
        }
    } 
        
    fireEvent.click(submitInput)
});
