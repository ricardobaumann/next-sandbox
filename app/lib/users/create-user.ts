export interface User{
    id: string,
    name: string
}

export default function getUser(id: string): User {
    return {id: id, name: "foo"};
}