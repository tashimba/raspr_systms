"use client";
import React from "react";
import Form from "../shared/components/form";
import { api } from "../api";

export default function PageRegistration() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [number, setNumber] = React.useState("");
  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      <Form
        name={name}
        password={password}
        number={number}
        setName={setName}
        setPassword={setPassword}
        setNumber={setNumber}
        onSubmit={() => {
          api.register(name, password, number);
        }}
        isLogin={false}
      />
    </div>
  );
}
