export {};

class VisaCard {
	constructor(public readonly owner: string) {}
}

const card = new VisaCard('sata');
// card.owner = 'Yus';

console.log(card.owner);
