"use client";
import React from "react";
import Form from "../shared/components/form";
import { api } from "../api";
import { useRouter } from "next/navigation";

export default function PageRegistration() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [number, setNumber] = React.useState("");

  const validateNumber = (value: string) => {
    const regExp = /^\+?7?9?([0-9]{9})$/;
    if (!regExp.test(value)) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = () => {
    if (validateNumber(number)) {
      api.register(name, password, number);
      router.push("/main");
    } else {
      alert("Неверный формат номера");
    }
  };

  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      <Form
        name={name}
        password={password}
        number={number}
        setName={setName}
        setPassword={setPassword}
        setNumber={setNumber}
        onSubmit={onSubmit}
        isLogin={false}
      />
    </div>
  );
}
