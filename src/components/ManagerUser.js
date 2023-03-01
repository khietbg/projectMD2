import React from "react";

const ManagerUser = () => {
  return (
      <div style={{textAlign: "center"}}>
          <h2>manageruser</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">EMAIL</th>
            <th scope="col">FULLNAME</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManagerUser;
