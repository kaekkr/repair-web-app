'use server';

export async function handleFormSubmit(
	formData: FormData
) {
	try {
		const body = {
			name: formData.get('name'),
			phone: formData.get('phone'),
		};
		const response = await fetch(
			'http://mepebag547.temp.swtest.ru/api/V1/feedback',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			}
		);

		if (response.ok) {
			const responseData = await response.json();
			console.log(responseData);
		} else {
			console.log(response.status);
		}
	} catch (error) {
		console.log(error);
	}
}
