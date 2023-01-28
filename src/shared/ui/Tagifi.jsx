import React from "react";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { useCallback } from "react";

const Tagify = () => {
  const tags = [
    {
      id: 1,
      text: "dev",
      color: "#a11e1e",
    },
    {
      id: 2,
      text: "soft",
      color: "#39b71d",
    },
  ];

  const [value] = React.useState([
    {
      id: 2,
      value: "soft",
      style: "--tag-bg:" + "#39b71d",
    },
  ]);

  const setting = {
    delimiters: ",| ", // [RegEx] split tags by any of these delimiters ("null" to cancel) Example: ",| |."
    pattern: /^.{0,50}$/, // RegEx pattern to validate input by. Ex: /[1-9]/
    tagTextProp: "value", // tag data Object property which will be displayed as the tag's text
    maxTags: 10, // Maximum number of tags
    duplicates: true, // "true" - allow duplicate tags
    whitelist: tags.map((item) => ({
      id: item.id,
      value: item.text,
      style: "--tag-bg:" + item.color,
    })), // Array of tags to suggest as the user types (can be used along with "enforceWhitelist" setting)
    blacklist: [], // A list of non-allowed tags
    enforceWhitelist: true, // Only allow tags from the whitelist
    backspace: false, // false / true / "edit"
    showFilteredDropdown: "a",
    dropdown: {
      enabled: 1, // show suggestion after 1 typed character
      fuzzySearch: false, // match only suggestions that starts with the typed characters
      position: "text", // position suggestions list next to typed text
      caseSensitive: true, // allow adding duplicate items if their case is different
    },
    templates: {
      dropdownItemNoMatch: function (data) {
        return `<div class='${this.settings.classNames.dropdownItem}' value="noMatch" tabindex="0" role="option">
				Не найдено: <strong>${data.value}</strong>
			</div>`;
      },
    },
    editTags: false, // 1 or 2 clicks to edit a tag. false/null for not allowing editing
    trim: true, // whether or not the value provided should be trimmed, before being added as a tag
    placeholder: "Введите текст",
  };

  const onChange = useCallback((e) => {
    console.log("onChange", e.detail.tagify.getCleanValue());
  }, []);
  // const onAdd = useCallback((e) => {
  //   console.log("onAdd", e.detail.tagify.getCleanValue());
  // }, []);
  // const onRemove = useCallback((e) => {
  //   console.log("onRemove", e.detail.tagify.getCleanValue());
  // }, []);

  // const addValue = () => {
  //   setValue((prev) => [
  //     ...prev,
  //     {
  //       id: 3,
  //       value: "dev",
  //       style: "--tag-bg:" + "#b22323",
  //     },
  //   ]);
  // };

  return (
    <>
      {/*<Button onClick={addValue}>Add</Button>*/}
      <Tags
        // defaultValue={value}
        value={value}
        settings={setting}
        // onAdd={onAdd}
        onChange={onChange}
        //  onRemove={onRemove}
      />
    </>
  );
};
export default Tagify;
