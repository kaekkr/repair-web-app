'use client';

import Image from 'next/image';
import {
	Select,
	Input,
	InputGroup,
	InputLeftElement,
	FormControl,
} from '@chakra-ui/react';

interface ConsultationFormProps {}

const ConsultationForm =
	({}: ConsultationFormProps) => {
		const requestConsultation = () => {
			console.log('hello');
		};

		return (
			<FormControl
				onSubmit={requestConsultation}
				className='grid grid-cols-2 gap-5'
			>
				<Select placeholder='Выберите технику'>
					<option value=''>1</option>
					<option value=''>2</option>
				</Select>
				<InputGroup>
					<InputLeftElement pointerEvents='none'>
						<Image
							src='/icons/phone-icon.svg'
							alt='phone icon'
							width={15}
							height={15}
						/>
					</InputLeftElement>
					<Input
						type='tel'
						placeholder='Сотовый номер'
					/>
				</InputGroup>
				<InputGroup className='col-span-2'>
					<InputLeftElement pointerEvents='none'>
						<Image
							src='/icons/people-icon.svg'
							alt='people icon'
							width={15}
							height={15}
						/>
					</InputLeftElement>
					<Input placeholder='Полное имя' />
				</InputGroup>
				<button className='button col-span-2'>
					Отправить
				</button>
			</FormControl>
		);
	};

export default ConsultationForm;
