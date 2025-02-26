import React from "react";
import Input from "../ui/input";
import Link from "next/link";

type Props = {
  name: string;
  password: string;
  number: string;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
  setNumber: (value: string) => void;
  isLogin: boolean;
  onSubmit: () => void;
};

export default function Form({
  isLogin,
  onSubmit,
  name,
  password,
  number,
  setName,
  setPassword,
  setNumber,
}: Props) {
  // const validateNumber = (value: string) => {
  //   const regExp = /^\+?7?9?(0[0-9]{9})$/;
  //   if (!regExp.test(value)) {
  //     setNumberError("Номер телефона должен быть в формате +380501234567");
  //   } else {
  //     setNumberError("");
  //   }
  // };

  return (
    <div className="flex gap-5 h-36 flex-col">
      <div className="flex flex-col gap-2 w-64 justify-between">
        <Input
          type="text"
          placeholder="Имя"
          value={name}
          changeValue={setName}
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          changeValue={setPassword}
        />
        {!isLogin && (
          <Input
            type="text"
            placeholder="Номер телефона"
            value={number}
            changeValue={(value) => {
              setNumber(value);
            }}
            // error={numberError}
          />
        )}
      </div>
      <div className="flex flex-col gap-5 w-64 justify-center">
        <button
          onClick={onSubmit}
          className={`w-full p-2 border rounded-md bg-blue-500 hover:bg-blue-700 duration-100 text-white `}
        >
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
        {isLogin ? (
          <p className="text-center text-sm ">
            Нет аккаунта?{" "}
            <span>
              <Link className="text-blue-500" href="/registration">
                Регистрация
              </Link>
            </span>
          </p>
        ) : (
          <p className="text-center text-sm ">
            Уже есть аккаунт?{" "}
            <span>
              <Link className="text-blue-500" href="/">
                Вход
              </Link>
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
