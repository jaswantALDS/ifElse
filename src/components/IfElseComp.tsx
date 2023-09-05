import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { RiAddCircleFill, RiAddFill, RiArrowUpSLine } from "react-icons/ri";

const IfElseComp = () => {
  const [formValues, setFormValues] = useState<any>({
    conditionName: "",
    branches: [
      {
        branchName: "",
        segments: [
          {
            conditionSelectName: "",
            conditions: [
              {
                selectOne: "",
                selectOperator: "",
                conditionField: "",
              },
            ],
          },
        ],
      },
    ],
  });

  // console.log(formValues.branches);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: string,
    branchIndex?: number,
    segmentIndex?: number,
    conditionIndex?: number
  ) => {
    const { value, name } = e.target;

    setFormValues((prevState: any) => {
      if (fieldName === "conditionName") {
        return {
          ...prevState,
          conditionName: value,
        };
      } else if (fieldName === "branchName" && branchIndex !== undefined) {
        const newBranches = [...prevState.branches];
        newBranches[branchIndex] = {
          ...newBranches[branchIndex],
          branchName: value,
        };
        return {
          ...prevState,
          branches: newBranches,
        };
      } else if (
        fieldName === "conditionSelectName" &&
        branchIndex !== undefined &&
        segmentIndex !== undefined
      ) {
        const newBranches = [...prevState.branches];
        const newBranch = { ...newBranches[branchIndex] };
        newBranch.segments[segmentIndex].conditionSelectName = value;
        newBranches[branchIndex] = newBranch;
        return {
          ...prevState,
          branches: newBranches,
        };
      } else if (
        fieldName === "selectOne" &&
        branchIndex !== undefined &&
        segmentIndex !== undefined &&
        conditionIndex !== undefined
      ) {
        const newBranches = [...prevState.branches];
        const newBranch = { ...newBranches[branchIndex] };
        const newCondition = {
          ...newBranch.segments[segmentIndex].conditions[conditionIndex],
        };
        newCondition.selectOne = value;
        newBranch.segments[segmentIndex].conditions[conditionIndex] =
          newCondition;
        newBranches[branchIndex] = newBranch;
        return {
          ...prevState,
          branches: newBranches,
        };
      } else if (
        fieldName === "selectOperator" &&
        branchIndex !== undefined &&
        segmentIndex !== undefined &&
        conditionIndex !== undefined
      ) {
        const newBranches = [...prevState.branches];
        const newBranch = { ...newBranches[branchIndex] };
        const newCondition = {
          ...newBranch.segments[segmentIndex].conditions[conditionIndex],
        };
        newCondition.selectOperator = value;
        newBranch.segments[segmentIndex].conditions[conditionIndex] =
          newCondition;
        newBranches[branchIndex] = newBranch;
        return {
          ...prevState,
          branches: newBranches,
        };
      } else if (
        fieldName === "conditionField" &&
        branchIndex !== undefined &&
        segmentIndex !== undefined &&
        conditionIndex !== undefined
      ) {
        const newBranches = [...prevState.branches];
        const newBranch = { ...newBranches[branchIndex] };
        const newCondition = {
          ...newBranch.segments[segmentIndex].conditions[conditionIndex],
        };
        newCondition.conditionField = value;
        newBranch.segments[segmentIndex].conditions[conditionIndex] =
          newCondition;
        newBranches[branchIndex] = newBranch;
        return {
          ...prevState,
          branches: newBranches,
        };
      }
      return prevState;
    });
  };

  const SegSelectOptions = [
    "Contact Details",
    "Custom Values",
    "Date Time",
    "Events",
  ];
  const ContactOptions = ["Back to all Actions", "Address 1", "Address 2"];
  console.log("changes", formValues);

  const handleAddCondition = (branchIndex: number, segmentIndex: number) => {
    // Create a new condition object
    const newCondition = {
      selectOne: "",
      selectOperator: "",
      conditionField: "",
    };

    // Create a copy of the formValues
    const newFormValues = { ...formValues };

    // Access the specific branch and segment where you want to add the condition
    const targetBranch = newFormValues.branches[branchIndex];
    const targetSegment = targetBranch.segments[segmentIndex];

    // Add the new condition to the conditions array inside the segment
    targetSegment.conditions.push(newCondition);

    // Set the updated formValues
    setFormValues(newFormValues);
  };

  return (
    <div className=" m-48 border-2">
      {/* First Section */}
      <div className="p-3">
        <h1 className="text-[#2e384c] font-bold  text-lg mb-3">
          CONDITION NAME
        </h1>
        <input
          className="rounded-md p-2 border-2 w-full"
          name="conditionName"
          value={formValues.conditionName}
          onChange={(e) => handleChange(e, "conditionName")}
        />
      </div>

      {/* BRANCH Section */}
      <div className="p-3">
        <h1 className="text-[#2e384c] font-bold  text-lg mb-3">BRANCHES</h1>

        {formValues.branches.map((branch: any, branchIndex: number) => (
          <div
            key={branchIndex}
            className="bg-[#f4f4f8] rounded-md p-10 border-2"
          >
            {/* Branch Input */}
            <div className="flex gap-3 items-center">
              <input
                className="rounded-md p-2 border-2 w-full"
                name="branchName"
                value={branch.branchName}
                onChange={(e) => handleChange(e, "branchName", branchIndex)}
              />
              <RiArrowUpSLine className="text-4xl text-gray-500" />
            </div>

            {/* Segment Section */}
            {branch.segments.map((segment: any, segmentIndex: number) => (
              <div key={segmentIndex} className="mt-5">
                <h1 className="text-[#2e384c] font-bold text-lg mb-3">
                  SEGMENTS
                </h1>
                <div className="bg-[#e6e6ec] rounded-md p-10 ">
                  {segment.conditions.map(
                    (condition: any, conditionIndex: number) => (
                      <div
                        key={conditionIndex}
                        className="flex gap-2 w-full justify-between"
                      >
                        <div className="flex gap-2 w-1/2 ">
                          <FormControl fullWidth>
                            <InputLabel>Select</InputLabel>
                            <Select
                              className="bg-white"
                              label="Select"
                              onChange={(e: any) =>
                                handleChange(
                                  e,
                                  "selectOne",
                                  branchIndex,
                                  segmentIndex,
                                  conditionIndex
                                )
                              }
                              name="selectOne"
                              value={condition.selectOne}
                            >
                              {SegSelectOptions.map(
                                (item: any, index: number) => (
                                  <MenuItem key={index} value={item}>
                                    {item}
                                  </MenuItem>
                                )
                              )}
                            </Select>
                          </FormControl>
                          <FormControl fullWidth>
                            <InputLabel>Select Operator</InputLabel>
                            <Select
                              className="bg-white"
                              label="Select Operator"
                              onChange={(e: any) =>
                                handleChange(
                                  e,
                                  "selectOperator",
                                  branchIndex,
                                  segmentIndex,
                                  conditionIndex
                                )
                              }
                              name="selectOperator"
                              value={condition.selectOperator}
                            >
                              <MenuItem value={"Ten"}>Ten</MenuItem>
                              <MenuItem value={"Twenty"}>Twenty</MenuItem>
                              <MenuItem value={"Thirty"}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </div>

                        <input
                          className="rounded-md p-2 border-2 w-1/2 py-3.5"
                          name="conditionField"
                          value={condition.conditionField}
                          onChange={(e) =>
                            handleChange(
                              e,
                              "conditionField",
                              branchIndex,
                              segmentIndex,
                              conditionIndex
                            )
                          }
                        />
                      </div>
                    )
                  )}
                  <div className="flex gap-1 items-center mt-3 text-gray-500 font-semibold justify-end w-full ">
                    <RiAddCircleFill />
                    <button
                      onClick={() =>
                        handleAddCondition(branchIndex, segmentIndex)
                      }
                    >
                      Add Condition
                    </button>
                  </div>
                  <div className="flex justify-start w-full">
                    <ToggleButtonGroup
                      color="primary"
                      exclusive
                      aria-label="Platform"
                      value={segment.conditionSelectName}
                      onChange={(e: any, newValue) =>
                        handleChange(
                          e,
                          "conditionSelectName",
                          branchIndex,
                          segmentIndex
                        )
                      }
                    >
                      <ToggleButton value="and" selected>
                        AND
                      </ToggleButton>
                      <ToggleButton value="or">OR</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
                <div className="flex gap-1 items-center mt-3 text-gray-500 font-semibold justify-end w-full ">
                  <RiAddCircleFill />
                  <button>Add Segment</button>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="flex gap-1 items-center mt-3 text-gray-500 font-semibold justify-end w-full ">
          <RiAddCircleFill />
          <button>Add Branch </button>
        </div>
      </div>
    </div>
  );
};

export default IfElseComp;
