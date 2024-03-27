import { useNavigate } from "react-router-dom";

// style.css
import "./Button.css";

export default function Button() {
  // почитать
  const navigate = useNavigate();

  return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}
