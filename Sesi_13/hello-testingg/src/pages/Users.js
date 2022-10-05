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
        <table className="text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-blue-500">
            <tr>
              <th className="py-2 pr-6">ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {post.map((p, index) => {
              return (
                <tr key={index} className="border-b text-black">
                  <td className="py-2">{p.id}</td>
                  <td className="py-2 pr-6">{p.name}</td>
                  <td className="py-2 pr-6">{p.username}</td>
                  <td className="py-2 pr-6">{p.email}</td>
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
