import React from "react";
import { useDispatch } from "react-redux";
import { act_get_user, del_user } from "../redux/action";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ManagerUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(act_get_user());
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>manageruser</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">EMAIL</th>
            <th scope="col">FULLNAME</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.email}</td>
              <td>{user.fullname}</td>
              <td>
                {user.permission ? (
                  <button className="btn btn-success">Admin</button>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(del_user(user.id))}
                  >
                    block
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerUser;
