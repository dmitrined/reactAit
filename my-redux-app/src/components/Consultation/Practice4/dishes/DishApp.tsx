import type { JSX } from "react";
import DishesList from "./DishesList";
import DishForm from "./DishForm";

export default function DishApp(): JSX.Element {
  return (
    <div>
      <DishForm />
      <DishesList />
    </div>
  );
}
