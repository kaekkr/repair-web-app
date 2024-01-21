"use server";

import { getDictionary } from "../[lang]/dictionaries";

export async function getButtonTitle(lang: string) {
  try {
    const { button } = await getDictionary(lang);
    return button.title;
  } catch (error) {
    console.error(error);
  }
}
