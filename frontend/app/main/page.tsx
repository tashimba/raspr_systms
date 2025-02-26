import React from "react";
import Autocomplete from "../shared/components/autocomplete";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      <Autocomplete />
    </div>
  );
}
