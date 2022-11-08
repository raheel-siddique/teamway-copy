import React from "react";
import { Menu } from "antd";

import DropDownButton from "../../components/DropDownButton/DropDownButton";
import SearchBar from "../../components/SearchBar/SearchBar";

import { LocationListStyle } from "./location.style";

function LocationList() {
  return (
    <LocationListStyle>
      <h3 className="section-header">Location List</h3>

      <SearchBar />

      <table className="teams-list-table" width="100%">
        <thead>
          <tr>
            <td>No.</td>
            <td>Project Name</td>
            <td>Team</td>
            <td>Description</td>
            <td>Date Started</td>
            <td>Date End</td>
            <td>Mode</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Dummy Project</td>
            <td>Frontend team</td>
            <td>Dummy Description about project</td>
            <td>01-01-2022</td>
            <td>01-03-2022</td>
            <td>
              <DropDownButton
                menu={
                  <Menu>
                    <Menu.Item key="0">
                      <p>Edit</p>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <p>Delete</p>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <p>Archive</p>
                    </Menu.Item>
                  </Menu>
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </LocationListStyle>
  );
}

export default LocationList;
