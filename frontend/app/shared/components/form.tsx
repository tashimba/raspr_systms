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
  const [isFieldsFill, setIsFieldsFill] = React.useState(true);
  const [errorNumber, setErrorNumber] = React.useState(false);

  const validateNumber = (value: string) => {
    const regExp = /^(?:\+7|8)9\d{9}$/;
    if (!regExp.test(value)) {
      setErrorNumber(true);
      return false;
    } else {
      setErrorNumber(false);
      return true;
    }
  };

  const cancelError = () => {
    setErrorNumber(false);
    setIsFieldsFill(true);
  };

  const checkInputs = () => {
    if (isLogin) {
      setIsFieldsFill(name.length > 0 && password.length > 0);
    } else {
      setIsFieldsFill(
        name.length > 0 && password.length > 0 && number.length > 0
      );
    }
  };
  const handleClick = () => {
    checkInputs();
    if (!isLogin) {
      validateNumber(number);
    }
    if (isFieldsFill === true) {
      console.log(isFieldsFill);
      onSubmit();
    }
  };

  return (
    <div className="flex gap-5 h-36 flex-col">
      <div className="flex flex-col gap-2 w-64 justify-between">
        <Input
          type="text"
          placeholder="Имя"
          value={name}
          changeValue={(value) => {
            cancelError();
            setName(value);
          }}
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          changeValue={(value) => {
            cancelError();
            setPassword(value);
          }}
        />
        {!isLogin && (
          <>
            <Input
              type="text"
              placeholder="Номер телефона"
              value={number}
              changeValue={(value) => {
                cancelError();
                setNumber(value);
              }}
            />
          </>
        )}
        <div className="min-h-[16px] flex items-center justify-center">
          {!isFieldsFill && (
            <p className="text-red-500 text-xs">Все поля обязательны</p>
          )}
          {isFieldsFill && errorNumber && (
            <p className="text-red-500 text-xs">Неверный формат номера</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5 w-64 justify-center">
        <button
          onClick={handleClick}
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
