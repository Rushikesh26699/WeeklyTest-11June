import React from "react";
import { useState } from "react";
import axios from "axios";

function Users() {
  const [state, setState] = useState([]);
  const [users, setUsers] = useState([]);

  const getProducts = () => {
    axios.get("https://randomuser.me/api/?results=20").then((res) => {
      // console.log(res.data.results);
      setState(res.data.results);
      setUsers(res.data.results);
    });
  };

  return (
    <>
      <div style={{ padding: "10px" }}>
        <h2>Users Details</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          tempora accusamus, temporibus est possimus inventore. Ex commodi,
          nobis veniam fugiat quia perspiciatis soluta officiis maxime sint
          quidem autem velit pariatur ab, laborum est eos omnis molestiae!
          Dolore accusamus magni aliquid praesentium. At, molestiae sequi.
          Officiis numquam dignissimos repudiandae asperiores consequuntur eum,
          voluptate accusantium nesciunt. Numquam cumque suscipit mollitia
          perferendis nostrum ratione eaque excepturi facere rerum at ullam,
          repudiandae vitae recusandae voluptates laboriosam natus blanditiis!
          Eveniet aliquid incidunt reiciendis, recusandae blanditiis vero ut
          nemo ipsam placeat est voluptatem odit aspernatur laboriosam ipsum
          quam quasi laborum corrupti, nobis dolor ullam deleniti hic.
        </p>
        <button style={{width:"100px" ,height:"50px",fontWeight:"bold",backgroundColor:"black",color:"white",border:"none",cursor:"pointer"}} onClick={getProducts}>Get Users</button>
      </div>
      {users.length > 0 && (
        <div
          style={{
            width: "50%",
            margin: "20px auto",
            display: "flex",
            justifyContent: "space-evenly",
            fontWeight: "bold",
          }}
        >
          <div>
            <input
              type="radio"
              defaultChecked
              name="gender"
              value="all"
              onChange={() => {
                setUsers(state);
              }}
            />{" "}
            All
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              value="all"
              onChange={() => {
                setUsers(state.filter((data) => data.gender === "male"));
              }}
            />{" "}
            Male
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              value="all"
              onChange={() => {
                setUsers(state.filter((data) => data.gender === "female"));
              }}
            />{" "}
            Female
          </div>
        </div>
      )}
      {users.length > 0 && (
        <div>
          <table width="100%" frame="box" rules="all" cellPadding="5px">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody align="center">
              {users.map((ele) => {
                return (
                  <tr>
                    <td>
                      <img src={ele.picture.medium} alt="images" />
                    </td>
                    <td>
                      {ele.name.first} {ele.name.last}
                    </td>
                    <td>{ele.email}</td>
                    <td>{ele.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Users;
