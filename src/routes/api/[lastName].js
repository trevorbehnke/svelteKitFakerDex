import faker from 'faker';

export async function get({ params }) {
	const { lastName } = params;
	return {
		body: {
			lastName,
			firstName: faker.name.firstName(),
			avatar: `https://avatars.dicebear.com/api/big-smile/${lastName}.svg`,
			title: faker.name.title(),
			phone: faker.phone.phoneNumber(),
			email: faker.internet.email(),
			cpa: faker.company.catchPhraseAdjective(),
			noun: faker.company.bsNoun()
		}
	};
}
