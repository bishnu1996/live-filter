import { useEffect, useState } from "react";
import { getData } from "../Api";
import FilterInput from "../FilterInput";
import Loading from "../Loading";
import UserCard from "../UserCard";
import "./style.css";

function App() {
  const [data, setData] = useState([]);
  const getUpdateData = async (name) => {
    const data = await getData(name);
    setData(data);
  };

  useEffect(() => {
    getUpdateData();
  }, []);

  const onChange = (e) => {
    getUpdateData(e.target.value);
  };

  return (
    <div className="container">
      <FilterInput
        onChange={onChange}
        title="Live User Filter"
        subtitle="Search by name and/or location"
      />
      <ul className="user-list">
        {!data.length ? (
          <Loading />
        ) : (
          data.map((user) => <UserCard key={user.email} user={user} />)
        )}
      </ul>
    </div>
  );
}

export default App;
