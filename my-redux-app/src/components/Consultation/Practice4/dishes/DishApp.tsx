import type { JSX } from "react";
import DishesList from "./DishesList";
import DischForm from "./DischForm";

export default function DishApp(): JSX.Element {
  return (
    <div>
      <DischForm />
      <DishesList />
    </div>
  );
}
