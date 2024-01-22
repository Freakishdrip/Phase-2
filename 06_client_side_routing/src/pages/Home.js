import {useLoaderData, Link} from "react-router-dom"
const Home = () => {
  const users = useLoaderData()
  return (
    <div>
      <h1>Welcome to my app!</h1>
      {
        users.map(user => (
          <Link to={`/profile/${user.id.toString()}`} key={user.id}>
            <h2>{user.firstName}</h2>
          </Link>
        ))
      }
    </div>
  );
};
export default Home;