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
    <div className="ml-4">
      <div className="mb-4 mt-6">
        <Link
          to="/"
          className="px-4 py-2 bg-green-600 text-white rounded"
          role="button"
        >
          Back to Home
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <td className="bg-black/60 text-white">ID</td>
            <td className="bg-black/60 text-white">Name</td>
            <td className="bg-black/60 text-white">Username</td>
            <td className="bg-black/60 text-white">Email</td>
          </tr>
        </thead>
        <tbody className="border-solid">
          {post.map((p, index) => {
            return (
              <tr key={index}>
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
  );
};

export default Users;
