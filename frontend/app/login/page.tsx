"use client";
import React from "react";
import Form from "../shared/components/form";
import { api } from "../api";
import { useRouter } from "next/navigation";

export default function PageLogin() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [number, setNumber] = React.useState("");

  const onSubmit = async () => {
    try {
      await api.login(name, password);
      router.push("/main");
    } catch (error) {
      alert(error);
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
        isLogin={true}
      />
    </div>
  );
}
