"use server";

export async function handleFormSubmit(formData: FormData) {
  try {
    const body = {
      name: formData.get("name"),
      phone: formData.get("phone"),
    };
    const res = await fetch(
      "http://mepebag547.temp.swtest.ru/api/V1/feedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (res.ok) {
      const resData = await res.json();
      console.log(resData);
    } else {
			console.log("res is not ok");
		}
  } catch (error) {
    console.error(error);
  }
}
