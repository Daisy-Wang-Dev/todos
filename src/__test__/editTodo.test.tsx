import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { task, addTask, findOneTaskEl } from "./functions";

describe("App", () => {
  it("edit a task", () => {
    render(<App />);
    addTask([task]);
    findOneTaskEl(task);
    const editButtonElement = screen.getByTitle("edit");
    fireEvent.click(editButtonElement);
    const editElement = screen.getByTitle("edit mode");
    fireEvent.change(editElement, { target: { value: "Pet my cats" } });
    fireEvent.submit(editElement);
    const originalTask = screen.queryByText(task);
    const editTask = screen.getByText("Pet my cats");
    expect(originalTask).not.toBeInTheDocument();
    expect(editTask).toBeInTheDocument();
  });
});
