import React, { useRef } from "react";
import { Form } from "@unform/web";
import { Scope, FormHandles } from "@unform/core";
import "./App.css";

import Input from "./components/Form/input";

const initialData = {
  password: "password",
};

function App() {
  const formRef = useRef(null);

  function handleSubmit(data: React.InputHTMLAttributes<HTMLInputElement>) {
    console.log(data.name);
  }

  return (
    <div className="App">
      <h1>hello unform</h1>

      <Form initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" />
        <Input name="email" />
        <Scope path="address">
          <Input name="password" type="password" />
          <Input name="street" />
          <Input name="number" />
        </Scope>

        <button type="submit">Send</button>
      </Form>
    </div>
  );
}

export default App;
