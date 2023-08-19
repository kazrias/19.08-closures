function createPerson(name = '', age = 18) {
    let _name = name;
    let _age = age;
    return {
        getName() { return _name },
        setName(newName) { _name = newName },
        getAge() { return _age },
        setAge(newAge) { _age = newAge }
    }
}
