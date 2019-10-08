import React, { PureComponent } from "react";
import StarRatingComponent from "react-star-rating-component";

import "./home.styles.css";
import DropDown from "../../components/DropDown/index.js";
import CourseListItem from "../../components/ListItem";

class HomeScreen extends PureComponent {
  state = {
    lectureStyleRatings: 0.0,
    isDepartmentVisible: false,
    isLevelVisible: false,
    isSemesterVisible: false,
    courses: [
      {
        id: 1231,
        courseCode: "csc 504",
        courseTitle: "Artificial Intelligence"
      }
    ],
    data: [
      {
        type: 'lecture-style',
        review: '',
        ratings: ""
      }
    ]
  };

  onStarClick = (nextValue, name)  => {
    const data = this.state.data;
    const newData = data.forEach(datum => {
      if(datum.type === name){
        return datum.ratings = nextValue;
      }
    })
    console.log(newData);
  }
  


  render() {
    return (
      <section className="wrapper">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div class="col-sm-10">
              <div className="mainContentWrapper">
                <div className="row text-center justify-content-center">
                  <div className="col-sm-8">
                    <div className="welcome-speech text-center">
                      <h1>Welcome to sentimental</h1>
                      <p>
                        Help your school to provide better learning environment,
                        by providing them with feedbacks and reviews about the
                        coursers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-sm-4">
                    <DropDown
                      title="Department"
                      selectedOption={null}
                      isVisible={this.state.isDepartmentVisible}
                      showDrop={() =>
                        this.setState({
                          isDepartmentVisible: !this.state.isDepartmentVisible,
                          isLevelVisible: false,
                          isSemesterVisible: false
                        })
                      }
                    />
                  </div>
                  <div className="col-sm-4">
                    <DropDown
                      title="Level"
                      selectedOption={null}
                      isVisible={this.state.isLevelVisible}
                      showDrop={() =>
                        this.setState({
                          isLevelVisible: !this.state.isLevelVisible,
                          isSemesterVisible: false,
                          isDepartmentVisible: false
                        })
                      }
                    />
                  </div>
                  <div className="col-sm-4">
                    <DropDown
                      title="Semester"
                      selectedOption={null}
                      isVisible={this.state.isSemesterVisible}
                      showDrop={() =>
                        this.setState({
                          isSemesterVisible: !this.state.isSemesterVisible,
                          isLevelVisible: false,
                          isDepartmentVisible: false
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="course__list">
                      <h5>List of Courses Taken</h5>

                      {/* {this.state.courses.map(course => {
                        return ( */}
                      <CourseListItem
                      // courseCode={course.courseCode}
                      // courseTitle={course.courseTitle}
                      />
                      {/* );
                      })} */}
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <form>
                      <div className="">
                        <div className="">
                          <span>Lecturing Styles</span>
                        </div>
                        <input type="text" placeholder="" name="" />
                      </div>
                      <div className="">
                        <div className="">
                          <span>Practicals of courses</span>
                          <span>
                            <StarRatingComponent
                              name="lectureStyleRatings"
                              starCount={5}
                              value={this.state.lectureStyleRatings}
                              onStarClick={this.onStarClick}
                            />
                          </span>
                        </div>
                        <input type="text" placeholder="" name="" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeScreen;
