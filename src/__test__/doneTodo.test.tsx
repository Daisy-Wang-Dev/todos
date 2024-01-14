import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { task, addTask, findOneTaskEl } from "./functions";



describe("App", () => {
  it("mark a task as done", () => {
    render(<App />);
    addTask([task]);
    findOneTaskEl(task);
    const doneButtonElement = screen.getByTitle("done");
    fireEvent.click(doneButtonElement);
    const doneTask = screen.getByText(task);
    expect(doneTask).toHaveClass("todo__single--done");
  });

});
