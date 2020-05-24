import React, { useRef, useEffect, useState } from "react";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import * as Yup from "yup";

import Input from "./components/Form/Input";

const initialData = {
  email: "daniel@gmail.com",
  address: {
    street: "Rua das laranjeiras",
    number: "55",
  },
};

function App() {
  const [user, setUser] = useState({});
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .email("Digite um email válido")
          .required("O email é obrigatório"),
        address: Yup.object().shape({
          city: Yup.string()
            .min(3, "No mínimo 3 caracteres")
            .required("A cidade é obrigatória"),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      formRef.current.setErrors({});

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: "Daniel Brito",
        email: "daniel@gmail.com",
        address: {
          city: "São Paulo",
        },
      });
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1>Sign up</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" name="name" />
        <Input name="email" />
        <Input type="password" name="password" />

        <Scope path="address">
          <Input name="street" />
          <Input name="number" />
          <Input name="neighborhood" />
          <Input name="city" />
          <Input name="state" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
