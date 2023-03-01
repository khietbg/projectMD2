import React from "react";

const ManagerPro = () => {
  return (
    <div className="w-100">
      <h2 style={{textAlign:"center"}}>ManagerPro</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">NAME</th>
            <th scope="col">IMAGE</th>
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

export default ManagerPro;
