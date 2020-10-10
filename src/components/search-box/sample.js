class Person {
    constructor(name, age) {
        this.name = name
        this.age = age;
    }

    setName (name) {
        return ""
    }
    getName () {
        return this.name
    }

    formatName () {
        return props.someProps(this.getName);
    }
}

const props = {
    someProps (e) {
        return e().toUpperCase();
    }
}

let odira = new Person("uju eze", 22)
console.log(odira.formatName())