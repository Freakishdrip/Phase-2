import {useLoaderData, useParams} from "react-router-dom"
function Profile(){

    // const {id} = useParams();
    const user = useLoaderData();

    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.age}</p>
            <p>{user.email}</p>
        </div>
    )

}

export const userProfile = async ({params}) => {
    const { id } = params
    const response = await fetch(`http://localhost:4000/users/${id}`)
    return response.json()
}

export default Profile;
