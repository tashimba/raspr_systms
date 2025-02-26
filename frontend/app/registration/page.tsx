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
  const [error, setError] = React.useState(false);

  const handleSetNumber = (value: string) => {
    setError(false);
    setNumber(value);
  };

  const validateNumber = (value: string) => {
    const regExp = /^(?:\+7|8)9\d{9}$/;
    if (!regExp.test(value)) {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const onSubmit = () => {
    if (name.length === 0 || password.length === 0) return;

    if (validateNumber(number)) {
      api.register(name, password, number);
      router.push("/main");
    }
  };

  return (
    <div className="flex w-full h-[100vh] flex-col items-center justify-center">
      <Form
        name={name}
        password={password}
        number={number}
        setName={setName}
        setPassword={setPassword}
        setNumber={handleSetNumber}
        onSubmit={onSubmit}
        isLogin={false}
      />
    </div>
  );
}
