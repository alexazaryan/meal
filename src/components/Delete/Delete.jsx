import { useContext } from "react";
import UserContext from "../context/UserContext";

export const HomeWork = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    e.preventDefault();
    setUser(e.target.username.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setUser("");
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <h1>Имя:{user}</h1>
        <label>
          <input
            type="text"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            name="username"
          />
        </label>
        <button type="submit" onClick={handleClear}>
          Отправить!
        </button>
      </form>
    </div>
  );
};

export default HomeWork;
