import React, { useState } from "react";
import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import VerticalDivider from "../../Components/VerticalDivider";
import HorizontalDivider from "../../Components/HorizontalDivider";

function EditApplicants() {
  const [campusValue, setCampusValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  return (
    <div
      className="w-auto h-max border border-wrapperBorderColor bg-white"
      style={{
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 50,
        paddingLeft: 50,
        borderRadius: 20,
      }}
    >
      <h1 style={{ fontWeight: 700, fontSize: 24 }}>Edit Applicant</h1>

      <div style={{ marginTop: 25 }}>
        <div className="flex flex-row">
          <SelectInput
            label="Campus"
            id="campus"
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            options={[
              { value: "US", label: "Main Campus" },
              { value: "CA", label: "Gerji Campus" },
            ]}
          />
          <HorizontalDivider />
          <SelectInput
            label="Department"
            id="department"
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            options={[
              { value: "US", label: "[2013] Business Adminstration" },
              { value: "CA", label: "[2013] Accounting and finance" },
            ]}
          />
        </div>

        <VerticalDivider />

        <div className="flex flex-row">
          <Input
            label="Personal Name"
            id="personal_name"
            value={campusValue}
            onChange={(e) => setCampusValue(e.target.value)}
          />
          <HorizontalDivider />

          <Input
            label="Father Name"
            id="father_name"
            value={campusValue}
            onChange={(e) => setCampusValue(e.target.value)}
          />
        </div>

        <VerticalDivider />

        <div className="flex">
          <Input
            label="Grand Father Name"
            id="grandfather_name"
            value={campusValue}
            onChange={(e) => setCampusValue(e.target.value)}
          />

          <HorizontalDivider />

          <SelectInput
            label="Gender"
            id="gender"
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            options={[
              { value: "US", label: "Male" },
              { value: "CA", label: "Female" },
            ]}
          />
        </div>

        <VerticalDivider />

        <div className="flex">
          <Input
            label="Age"
            id="age"
            value={campusValue}
            onChange={(e) => setCampusValue(e.target.value)}
          />

          <HorizontalDivider />

          <Input
            label="Address"
            id="address"
            value={campusValue}
            onChange={(e) => setCampusValue(e.target.value)}
          />
        </div>

        <VerticalDivider />

        <div>
          <Input
            label="Phone Number"
            id="phone_number"
            value={campusValue}
            onChange={(e) => setCampusValue(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-end " style={{ marginTop: 40 }}>
          <button>Cancel</button>
          <button
            className="bg-primaryColor text-white"
            style={{
              width: 101,
              height: 39,
              borderRadius: 8,
              marginLeft: 40,
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditApplicants;
