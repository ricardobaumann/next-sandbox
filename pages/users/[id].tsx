import { useRouter } from "next/router"
import getUser from "../../app/lib/users/create-user";

export default function UserDetail() {
    const router = useRouter();
    const id = router.query.id;
    if (id == null) {
        return <>
            <p>Not user</p>
        </>
    }
    const user = getUser(id[0]);
    return <>
        <p>user id {id}</p>
        <p>user name {user.name}</p>
    </>
}