import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

const addTask = (tasks: string[]) => {
  const inputElement = screen.getByPlaceholderText("enter a task");
  const buttonElement = screen.getByRole("button", { name: "GO" });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: "Go grocery shopping" },
    });
    fireEvent.click(buttonElement);
  });
};

describe("App", () => {
  it("adds a new task correctly", () => {
    render(<App />);
    addTask(["Go grocery shopping"])
    const taskElement = screen.getByText("Go grocery shopping");
    expect(taskElement).toBeInTheDocument();
  });

  it("adds all tasks correctly", () => {
    render(<App />);
    addTask(["Go grocery shopping", "Pet lizzy's cat", "Do the dishes"])
    const taskElements = screen.getAllByTestId("taskItem");
    expect(taskElements.length).toBe(3);
  });
});
