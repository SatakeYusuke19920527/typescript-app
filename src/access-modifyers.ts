export {};

class Person {
	protected name: string;
	protected age: number;
	protected natioarity: string;
	constructor(name: string, age: number, natioarity: string) {
		this.name = name;
		this.age = age;
		this.natioarity = natioarity;
	}
	profile() {
		return 'name: ' + this.name + '/age: ' + this.age + 'nationarity: ' + this.natioarity;
	}

	getName() {
		return this.name;
	}
}

class Android extends Person {
	constructor(name: string, age: number, natioarity: string) {
		super(name, age, natioarity);
	}

	profole() {
		return 'name: ' + this.name + '/age: ' + this.age + 'nationarity: ' + this.natioarity;
	}
}

let taro = new Person('taro', 28, 'JP');
// let hanako = new Person();

console.log(taro.getName());
