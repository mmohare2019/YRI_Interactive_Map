import TestRenderer from "react-test-renderer";
import EditCategoryForm from "./EditCategoryForm";
import React from "react";
//import renderer from 'react-test-renderer';

describe("edit category tests", () => {
    test("render smoke test", () => {
        TestRenderer.create(<EditCategoryForm/>)
    })
});

