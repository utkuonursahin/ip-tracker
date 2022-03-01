import {useMain} from "../../context/MainContext";

const Error = () => {
  const {error, setError} = useMain()
  return (
      <div className="error">
        <h1>Something went wrong :(
          <span>
          {error.message}
        </span>
        </h1>
        <button onClick={() => setError(null)}>Okay</button>
      </div>
  );
};

export default Error;
