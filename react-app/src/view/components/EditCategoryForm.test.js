//import TestRenderer from "react-test-renderer";
import EditCategoryForm from "./EditCategoryForm";
import React from "react";
import { fireEvent, screen, render} from "@testing-library/react"
import renderer from 'react-test-renderer';

const categoryHandler = require("../../event-handler/categoryHandler")

test("edit category form test", function () {
    renderer.create(<EditCategoryForm/>).toJSON();
    
    render(<EditCategoryForm/>)
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
