import { useSelector } from "react-redux";
const Home = () => {
  const state = useSelector((state) => state);
  if (state.match.isLoading) {
    return <h6> Loading....</h6>;
  }
  return (
    <div className="home">
      {state.match.data &&
        state.match.data.map((e) => {
          return (
            <div key={e.id}>
              <li>{e.title}</li>
              <li>{e.id}</li>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
