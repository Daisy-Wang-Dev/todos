import { fireEvent, render, screen } from "@testing-library/react";

export const task:string = "Go grocery shopping"

export const addTask = (tasks: string[]) => {
  const inputElement = screen.getByPlaceholderText("enter a task");
  const buttonElement = screen.getByRole("button", { name: "GO" });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: "Go grocery shopping" },
    });
    fireEvent.click(buttonElement);
  });
};

export const findOneTaskEl = (task:string)=>{
  const taskElement = screen.getByText(task);
  expect(taskElement).toBeInTheDocument();
}