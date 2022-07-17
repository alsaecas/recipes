import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
export default function MenuFilter(props) {
  function handleChangeTypes(value) {
    value.element = "type";
    props.onChange(value);
  }
  function handleChangeIngredients(value) {
    value.element = "ingredients";
    props.onChange(value);
  }

  return (
    <>
      <Select
        isMulti
        options={props.loadValuesT}
        components={animatedComponents}
        placeholder="Ingredient Types"
        onChange={handleChangeTypes}
      />
      <Select
        isMulti
        options={props.loadValuesI}
        components={animatedComponents}
        placeholder="Ingredients"
        onChange={handleChangeIngredients}
      />
    </>
  );
}