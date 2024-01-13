import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { addTask } from "./functions";

describe("App", () => {
  it("deletes an added task correctly", () => {
    render(<App />);
    addTask(["Go grocery shopping"]);
    const taskElement = screen.getByText("Go grocery shopping");
    expect(taskElement).toBeInTheDocument();
    const deleteButtonElement = screen.getByTitle("delete");
    fireEvent.click(deleteButtonElement);
    const deletedTask = screen.queryByText("Go grocery shopping");
    expect(deletedTask).not.toBeInTheDocument();
  });

  it("deletes all added tasks", () => {
    render(<App />);
    const task: string[] = [
      "Go grocery shopping",
      "Pet lizzy's cat",
      "Do the dishes",
    ];
    addTask(task);
    const taskElements = screen.getAllByTestId("taskItem");
    expect(taskElements.length).toBe(task.length);
    const deleteButtonElements = screen.getAllByTitle("delete");
    for (let i = 0; i < task.length; i++) {
      deleteButtonElements.forEach((but) => fireEvent.click(but));
    }
    const deletedTasks = screen.queryAllByTestId("taskItem");
    expect(deletedTasks).not.toBe(0);
  });
});
