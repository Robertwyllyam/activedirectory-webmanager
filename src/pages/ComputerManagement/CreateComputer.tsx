import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import Select from "react-select";
import { useFetch } from "../../hooks/useFetch";

export interface OUObject {
  dn: string;
}

const CreateComputer = () => {
  const { request, loading, result, error } = useFetch();
  const fetchPost = useFetch();

  useEffect(() => {
    request("GET", "adOU");
  }, []);

  const [computerName, setComputerName] = useState<string>("");
  const [options, setOptions] = useState<Array<any>>([]);
  const [chosenOption, setChosenOption] = useState<any>();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetchPost.request("POST", "computers", {
      name: computerName,
      ou: chosenOption.value,
    });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Computer Name"
          state={computerName}
          setState={setComputerName}
        ></Input>
        <div
          style={{ justifyContent: "center", alignItems: "center" }}
          className="w-full flex flex-col"
        >
          <label style={{ color: "white" }}>Computer OU</label>
          <Select
            className="select"
            options={
              result && Array.isArray(result)
                ? result.map((i: OUObject) => ({ label: i.dn, value: i.dn }))
                : []
            }
            value={chosenOption}
            onChange={(e) => {
              setChosenOption(e);
            }}
          ></Select>
        </div>

        <button
          style={{ marginTop: "10px" }}
          disabled={fetchPost.loading || !computerName || !chosenOption}
        >
          Criar
        </button>
        {fetchPost.result && (
          <p className="text-success">{fetchPost.result.toString()}</p>
        )}
        {fetchPost.error && (
          <p className="text-error">{fetchPost.error.toString()}</p>
        )}
      </form>
    </div>
  );
};

export default CreateComputer;
