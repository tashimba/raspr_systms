"use client";

import { useState, ChangeEvent } from "react";

const wordList: string[] = [
  "Виноградов",
  "Глушков",
  "Грунская",
  "Комаровский",
  "Лицеванова",
  "Максимов",
  "Морозов",
  "Николаев",
  "Пименов",
  "Родин",
  "Смирнов",
  "Ташимбетов",
  "Тростин",
  "Турбина",
  "Угрюмов",
  "Щелочкова",
  "Голубев",
  "Абдулаев",
  "Таланков",
  "Пелагейко",
];

export default function Autocomplete() {
  const [input, setInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 1) {
      const filtered = wordList.filter((word) => {
        return word.toLowerCase().startsWith(value.toLowerCase());
      });
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (word: string) => {
    setInput(word);
    setSuggestions([]);
  };

  return (
    <div className="relative w-64 ">
      <h1 className="text-2xl font-bold mb-4">Список группы</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="Введите слово..."
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full border bg-white mt-1">
          {suggestions.map((word, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(word)}
            >
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
