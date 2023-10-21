import React from 'react';
import { Link } from 'react-router-dom';

const ForumSubCategories = () => {
    return (
        <React.Fragment>
            {/* ------ Categories Name ----- */}
            <h2 className="mb-3">{"Category Name"}</h2>
            <div className="card card-forum">
                <ul className="forum-list forum-topic-list">
                    {/* list 1st */}
                    <li>
                        <div className="media">
                            <i className={`iconHere`}></i>{" "}
                        </div>
                        <div className="info-container">
                            <div className="info">
                                <h3 className="title">
                                    <Link to={`/forum/:id`}>{"Title Link here"}</Link>
                                </h3>
                                <ul className="info-start-end">
                                    <li>{"The Description here..."}</li>
                                    <li>
                                        latest post by{" ASad ANik"}
                                        <Link to="/el-detail">
                                            "The Details description here with more text"
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="date-replies">
                                <div className="replies">
                                    <div className="total">
                                        100
                                    </div>
                                    <div className="text"> POSTS</div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* list 2nd */}
                    <li>
                        <div className="media">
                            <i className={`iconHere`}></i>{" "}
                        </div>
                        <div className="info-container">
                            <div className="info">
                                <h3 className="title">
                                    <Link to={`/forum/:id`}>{"Title Link here"}</Link>
                                </h3>
                                <ul className="info-start-end">
                                    <li>{"The Description here..."}</li>
                                    <li>
                                        latest post by{" ASad ANik"}
                                        <Link to="/el-detail">
                                            "The Details description here with more text"
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="date-replies">
                                <div className="replies">
                                    <div className="total">
                                        100
                                    </div>
                                    <div className="text"> POSTS</div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* list 3rd */}
                    <li>
                        <div className="media">
                            <i className={`iconHere`}></i>{" "}
                        </div>
                        <div className="info-container">
                            <div className="info">
                                <h3 className="title">
                                    <Link to={`/forum/:id`}>{"Title Link here"}</Link>
                                </h3>
                                <ul className="info-start-end">
                                    <li>{"The Description here..."}</li>
                                    <li>
                                        latest post by{" ASad ANik"}
                                        <Link to="/el-detail">
                                            "The Details description here with more text"
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="date-replies">
                                <div className="replies">
                                    <div className="total">
                                        100
                                    </div>
                                    <div className="text"> POSTS</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default ForumSubCategories;