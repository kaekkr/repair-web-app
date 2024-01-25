"use server";

export async function handleFormSubmit(formData: FormData) {
  try {
    const body = {
      name: formData.get("name"),
      phone: formData.get("phone"),
    };
    const res = await fetch(
      "${process.env.API_URL}/feedback",
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
