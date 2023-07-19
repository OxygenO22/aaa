import {messages_en} from "./en.js";
import {messages_ru} from "./ru.js";

const LANGUAGES = [
  {
    code: "en",
    messages: messages_en,
    label: "English",
  },
  {
    code: "ru",
    messages: messages_ru,
    label: "Русский",
    isDefault: true,
  },
];

export default LANGUAGES;
