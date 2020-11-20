import React from "react";
import { render } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact", () => {
  it("matches the Snapshot", () => {
    const { asFragment } = render(<Contact />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders all the elements", () => {
    const { getByTestId } = render(<Contact />);

    expect(getByTestId("name")).toHaveClass("formInputName");
    expect(getByTestId("email")).toHaveClass("formInputEmail");
    expect(getByTestId("subject")).toHaveClass("formInputSubject");
    expect(getByTestId("message")).toHaveClass("textarea");
    expect(getByTestId("submitButton")).toHaveClass("submitButtonForm");
  });
});
