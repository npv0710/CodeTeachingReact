class Department {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }
}

function printDepartment(d: Department): void {
    console.log('Deparment Id: ' + d.getId());
    console.log('Deparment name: ' + d.getName());
}

var department1 = new Department(1, 'DEV');

export {
    Department,
    department1,
    printDepartment
}