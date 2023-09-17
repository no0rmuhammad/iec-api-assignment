"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function APIAxios() {
  const [allPosts, setAllPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setAllPosts(response.data);
      })
  }, []);

  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                {selectedPost?.title}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{selectedPost?.body}</div>
            <div class="modal-body">{selectedPost?.id}</div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Id</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody>
          {allPosts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.id}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => {
                      setSelectedPost(post);
                    }}
                  >
                    Click to Show
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default APIAxios;
