export interface AuthorModel {
    id: string;
    name: string;
}

export class AuthorModelImpl implements AuthorModel {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
