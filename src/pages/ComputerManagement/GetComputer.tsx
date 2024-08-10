import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Input from "../../components/Input";

const GetComputer = () => {
  const [computer, setComputer] = useState<string>("");
  const { loading, result, error, request } = useFetch();
  const deleteFetch = useFetch();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await request("GET", `computers/${computer}`);
    console.log(result);
  }

  async function deleteComputer() {
    const confirm = window.confirm(
      "Are you sure you want to delete the computer permanently?"
    );
    if (!confirm) return;
    await deleteFetch.request("DELETE", `computers/${computer}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <Input
          type="text"
          name="pc"
          state={computer}
          setState={setComputer}
          label="Computer Name"
        ></Input>

        <button disabled={!computer || loading}>
          {loading ? "Loading..." : "Search"}{" "}
        </button>

        {result && result?.length === 0 && (
          <p className="text-error">Computer not found!</p>
        )}

        {error && <p className="text-error">Error {error}</p>}
      </form>
      <div className="computer-container">
        {result && (
          <div className="user-table">
            <p>Name: {result.givenName}</p>
            <p>DN: {result.dn}</p>
            <button
              onClick={deleteComputer}
              disabled={deleteFetch.loading}
              className="btn-delete"
            >
              Delete computer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetComputer;
