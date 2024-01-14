import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { addTask, findOneTaskEl } from "./functions";



describe("App", () => {
  it("mark a task as done", () => {
    const task = "Go grocery shopping"
    render(<App />);
    addTask([task]);
    findOneTaskEl(task);
    const doneButtonElement = screen.getByTitle("done");
    fireEvent.click(doneButtonElement);
    const doneTask = screen.getByText("Go grocery shopping");
    expect(doneTask).toHaveClass("todo__single--done");
  });

});
