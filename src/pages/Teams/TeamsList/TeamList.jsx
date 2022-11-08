import React from "react";
import { Menu } from "antd";

import DropDownButton from "../../../components/DropDownButton/DropDownButton";
import { TeamListStyle } from "./TeamList.style";
import SearchBar from "../../../components/SearchBar/SearchBar";

function TeamList() {
  return (
    <TeamListStyle>
      <h3 className="section-header">Team List</h3>

      <SearchBar />

      <table className="teams-list-table" width="100%">
        <thead>
          <tr>
            <td>No.</td>
            <td>Team Name</td>
            <td>Members Name</td>
            <td>Assigned Projects</td>
            <td>Mode</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Frontend Team</td>
            <td>Jahangir Khan</td>
            <td>Dummy Project</td>
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
    </TeamListStyle>
  );
}

export default TeamList;
