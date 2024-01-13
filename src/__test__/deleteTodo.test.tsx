import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import {addTask} from "./functions";


describe("App", () => {
  it("deletes a new task correctly", () => {
    render(<App />);
    addTask(["Go grocery shopping"])
    const taskElement = screen.getByText("Go grocery shopping");
    expect(taskElement).toBeInTheDocument();
    const deleteButtonElement = screen.getByTitle("delete");
    fireEvent.click(deleteButtonElement);
    const deletedTask = screen.queryByText("Go grocery shopping");
    expect(deletedTask).not.toBeInTheDocument();
  });

//   it("adds all tasks correctly", () => {
//     render(<App />);
//     addTask(["Go grocery shopping", "Pet lizzy's cat", "Do the dishes"])
//     const taskElements = screen.getAllByTestId("taskItem");
//     expect(taskElements.length).toBe(3);
//   });
});
