import React from "react";
import ImageComponent from "./imageComponent";
import CollegeInfo from "./collegeInfo";
import ExtraInfo from "./extraInfo";
import LocationInfo from "./locationInfo";
import { masterData } from "./masterCollegeData";
import "../css/collegeCard.css";
import IsLoading from "./spinner";

function CollegeCard({
  fees,
  user_review_rating,
  location,
  college_name,
  college_dunia_ranking,
}) {
  return (
    <div class="card-info">
      <div className="image-container">
        <ImageComponent />
        <div className="left-text">📷 4 ▶ 3</div>
        <div className="right-text">
          COLLEGEDUNIA RATING {college_dunia_ranking}
        </div>
        <div className="bottom-text">{college_name}</div>
        <img
          className="logo-div"
          src="https://loremflickr.com/130/130/logo"
          alt="Logo"
        />
      </div>
      <LocationInfo location={location} />
      <CollegeInfo fees={fees} user_review_rating={user_review_rating} />
      <ExtraInfo />
    </div>
  );
}

class CollegeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: masterData.slice(0, 3),
      currentIndex: 3,
      isLoading: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { currentIndex, data, isLoading } = this.state;
    const threshold = 500; // this is the amount of scrolling required to trigger loading

    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - threshold
    ) {
      if (!isLoading && currentIndex < masterData.length) {
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.setState({
            data: [
              ...data,
              ...masterData.slice(currentIndex, currentIndex + 3),
            ],
            currentIndex: currentIndex + 3,
            isLoading: false,
          });
        }, 1000);
      }
    }
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <div>
        <div class="card-div">
          {data.map((college, index) => (
            <CollegeCard
              key={index}
              fees={college.fees}
              user_review_rating={college.user_review_rating}
              location={college.location}
              college_name={college.college_name}
              college_dunia_ranking={college.college_dunia_ranking}
            />
          ))}
        </div>
        {isLoading && <IsLoading />}
      </div>
    );
  }
}

export default CollegeList;
