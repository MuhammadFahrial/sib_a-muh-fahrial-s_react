import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const user_API = "https://jsonplaceholder.typicode.com/users";
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(user_API).then((res) => {
      setPost(res.data);
      console.log(post);
    });
  }, []);

  return (
    <div className="m-10">
      <div className="mb-4 mt-6">
        <Link
          to="/"
          className="px-4 py-2 bg-green-600 text-white rounded"
          role="button"
        >
          Back to Home
        </Link>
      </div>
      <div className="overflow-x-auto relative">
        <table className="w-1/2 text-sm text-left text-gray-500">
          <thead className="text-xs text-black uppercase bg-gray-50 ">
            <tr>
              <th className="py-3">ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Username</th>
              <th className="py-3">Email</th>
            </tr>
          </thead>
          <tbody className="border-solid">
            {post.map((p, index) => {
              return (
                <tr key={index} className="bg-white border-b text-black">
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.username}</td>
                  <td>{p.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
