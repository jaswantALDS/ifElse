import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import React from "react";
import { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const IfElseComp = () => {
  const [formValues, setFormValues] = useState<any>({
    conditionName: "",
    branches: [
      {
        branchName: "",
        segments: [{ selectOne: "", selectOperator: "" }],
      },
    ],
  });

  console.log(formValues.branches);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const SegSelectOptions = [
    "Contact Details",
    "Custom Values",
    "Date Time",
    "Events",
  ];
  const ContactOptions = ["Back to all Actions", "Address 1", "Address 2"];
  return (
    <div className=" m-48 border-2">
      {/* First Section */}
      <div className="p-3">
        <h1 className="text-[#2e384c] font-bold  text-lg mb-3">
          CONDITION NAME
        </h1>
        <input
          className=" rounded-md p-2 border-2 w-full"
          name="conditionName"
          value={formValues.conditionName}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* BRANCH Section */}
      <div className="p-3">
        <h1 className="text-[#2e384c] font-bold  text-lg mb-3">BRANCHES</h1>

        {formValues.branches.map((item: any, index: number) => (
          <div key={index} className="bg-[#f4f4f8] rounded-md p-10 border-2">
            {/* Branch Input */}
            <div className="flex gap-3 items-center">
              <input
                className=" rounded-md p-2 border-2 w-full"
                name="branchName"
                value={formValues.branches[0].branchName}
                onChange={(e) => handleChange(e)}
              />
              <RiArrowUpSLine className="text-4xl text-gray-500" />
            </div>

            {/* Segment Section */}
            <div className="mt-5">
              <h1 className="text-[#2e384c] font-bold text-lg mb-3">
                SEGMENTS
              </h1>
              <div className="bg-[#e6e6ec] rounded-md p-10 ">
                <div className="flex gap-2 w-7/12">
                  <FormControl fullWidth>
                    <InputLabel>Select</InputLabel>
                    <Select
                      label="Select"
                      onChange={(e) => handleChange(e)}
                      name="selectOne"
                      value={formValues.branches[0].segments[0].selectOne}
                    >
                      {SegSelectOptions.map((item: any, index: number) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel>Select</InputLabel>
                    <Select
                      label="Select"
                      onChange={(e) => handleChange(e)}
                      name="selectOperator"
                      value={formValues.branches[0].segments[0].selectOperator}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex justify-end w-full border-t">
                  <button> Add Condition </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IfElseComp;
