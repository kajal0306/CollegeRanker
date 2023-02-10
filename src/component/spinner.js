import Spinner from "react-bootstrap/Spinner";
import "../css/collegeCard.css";

function IsLoading() {
  return (
    <div class="loading">
      <Spinner animation="border" variant="warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default IsLoading;
