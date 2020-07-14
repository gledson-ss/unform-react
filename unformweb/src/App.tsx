import React, { useRef } from "react";
import * as Yup from "yup";
import { Form } from "@unform/web";
import {
  Scope,
  FormHandles,
  UnformField,
  UnformContext,
  SubmitHandler,
} from "@unform/core";
import "./App.css";

import Input from "./components/Form/input";

const initialData = {
  email: "algo",
};
interface FormData {
  name: string;
  email: string;
}
function App() {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: any, { reset }: any) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("name is requered"),
        email: Yup.string()
          .email("not is correct")
          .required("email is required"),
        address: Yup.object().shape({
          city: Yup.string()
            .min(3, "minimun is 3")
            .required("city is required"),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);
        const errorMessages: any = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        formRef.current?.setErrors(errorMessages);
        reset();
      }
    }
  }

  return (
    <div className="App">
      <h1>hello unform</h1>

      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
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
