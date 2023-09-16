"use client";
import axios from "axios";
import React, { useEffect } from "react";

function APIAxios() {
  useEffect(() => {
    let res = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((get) => {
        console.log(get);
      });
  }, []);

  const dataMap = [
    {
      id: "1",
      name: "Ali",
      lastname: "Hassan",
    },
    {
      id: "1",
      name: "Noor",
      lastname: "Muhammad",
    },
    {
      id: "1",
      name: "Hamza",
      lastname: "Ali",
    },
  ];
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
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
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
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Id</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody>
          {dataMap.map((formData) => {
            return (
              <tr>
                <td>{formData.name}</td>
                <td>{formData.lastname}</td>
                <td>{formData.id}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    
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
