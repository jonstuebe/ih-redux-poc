import faker from "faker";

export const genUser = id => {
	return {
		id: id ? id : faker.random.number({ min: 1000, max: 50000 }),
		name: faker.name.findName(),
		email: faker.internet.exampleEmail()
	};
};

export const genUnit = id => {
	return {
		id: id ? id : faker.random.number({ min: 1000, max: 50000 }),
		streetAddress1: faker.address.streetAddress(),
		city: faker.address.city(),
		state: faker.address.state(),
		users: new Array(faker.random.number({ min: 0, max: 3 }))
			.fill({})
			.map(user => {
				return genUser();
			})
	};
};

export const fetchUnits = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(
				new Array(25).fill({}).map(unit => {
					return genUnit();
				})
			);
		}, 250);
	});
};

export const fetchUnit = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(genUnit());
		}, 250);
	});
};

export const fetchUnitError = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new Error("Test Error"));
		}, 250);
	});
};
