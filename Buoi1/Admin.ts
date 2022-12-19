import Account from "./Account";

class Admin extends Account {
    private role: string;

    constructor(id: number, username: string, role: string) {
        super(id, username);
        this.role = role;
    }

    public printInfo(): void {
        super.printInfo();
        console.log('Role: ' + this.role);
    }
}

export default Admin;