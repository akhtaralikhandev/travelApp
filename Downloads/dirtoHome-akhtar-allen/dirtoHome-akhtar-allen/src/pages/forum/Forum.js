import React, { Component } from "react";
import { Link } from "react-router-dom";
import GeneralHeader from "../../components/common/GeneralHeader";
import { deletePost, getPosts, getPostsData, getTopics } from '../../services/posts';
import { getForumSubCats } from '../../services/forumsubcategories';
import { getForumCats } from '../../services/forumcategories';
import { Box } from '@material-ui/core';
import CategoryTable from './CategoryIndex';
import Spinner from '../../components/spinner';


//  --------======== DEMO DATA ========------
// Latest Data..
const latestData = [
  {
    id: 1,
    replies: 15,
    title: "Our default branch is main now",
    tags: [
      {
        title: "dev",
        color: "black",
      },
    ],
  },
  {
    id: 2,
    replies: 15,
    title: "Our default branch is main now",
    tags: [
      {
        title: "dev",
        color: "black",
      },
    ],
  },
  {
    id: 3,
    replies: 15,
    title: "Our default branch is main now",
    tags: [
      {
        title: "dev",
        color: "black",
      },
    ],
  },
  {
    id: 4,
    replies: 15,
    title: "Our default branch is main now",
    tags: [
      {
        title: "dev",
        color: "black",
      },
    ],
  },
];


// Component of ForumHome..
class Forum extends Component {
  // Constructor method..
  constructor(props) {
    super(props);

    // State..
    this.state = {
      forumsubcats: [],
      topicsResult: [],
      lastName: "",
      lastUpdated: "hi",
      forumcats: [],
      forumId: "",
      forumCatName: "",
      loading: true,
    };

    // For Demo Loading.. page.
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);

  }

  // Get forum categories..
  async getforumCats() {
    const { forum_cat_id } = this.props.match.params;
    const { pathname, state } = this.props.location;
    console.log("props", this.props);

    const forumCatName = state;

    const { data: forumcats } = await getForumCats();
    forumcats.map(e=>console.log(e._id) )    

    if (pathname === "/forum") {
      this.setState({
        forumId: forumcats[0]._id,
        forumCatName: forumcats[0].name
      });

    } else {
      this.setState({
        forumId: forum_cat_id,
        forumCatName: forumCatName
      });
    }
const topics = forumcats.map(e=>{return e.lastTopic} )
console.log(topics)
    this.setState({
      forumcats,
      topicsResult:topics
      
    });
  };


  // Get forum sub-categories..
  async getforumSubCats() {
    const { data: forumsubcats } = await getForumSubCats();

    console.log('Fetching Data forums subcates');


    // this.setState({ forumsubcats: forumsubcats });
    // console.log("state subcats", this.state.forumsubcats);
    // console.log("subcats", forumsubcats);
    // this.setState({ loading: false });
  };


  // After loadPage we will get Posts data also..
  async loadPage() {
    const { data: apiGetTopics } = await getTopics();
    // const { data: apiGetPosts } = await getPosts();

    if (apiGetTopics.length == 0) {
      this.setState({ lastUpdated: "" });
    } else {
      apiGetTopics.forEach((element) => {
        element.createdAt = new Date(element.createdAt)
          .toString()
          .substring(4, 15);

        element.updatedAt = new Date(element.updatedAt)
          .toString()
          .substring(4, 15);
      });

      let total = 0;
      apiGetTopics.forEach((element) => {
        total = total + element.userReply.length;
      });
      this.setState({ topicsResult: apiGetTopics });
      this.setState({ lastName: apiGetTopics[0].user.username });
      this.setState({ lastUpdated: apiGetTopics[0].updatedAt });
    }
  };


  // Calling all async functions..
  async componentDidMount() {
    await this.getforumCats();
    await this.getforumSubCats();
    await this.loadPage();
  }

  // The Render Method..
  render() {
    // Necessary States..
    const {forumcats, forumId, loading, topicsResult } = this.state;

    console.log('TEST WITH POSTS -->> ', topicsResult.length);

    if (loading) {
      return (
        <Spinner
          color="black"
          size={80}
        />
      );
    }

    // Write your code here..
    return (
      <React.Fragment>
        {/* ----- Header ------ */}
        <div
          style={{
            backgroundColor: "#333F57",
            width: "100%",
            height: "80px",
          }}
        >
          <GeneralHeader />
        </div>

        {/* ------- Content -------- */}
        <Box>
          <CategoryTable
            categoriesData={forumcats}
            latestData={topicsResult}
          />
        </Box>

        {/* Old Design */}
        {/* <div className="container mt-5">
            <div className="row">
              <div className=""></div>
              
              <div className="col-lg-10 mt-4">
                
                <div className="col-lg-10">
                  <ForumSubCategories />

                  <div className="mt-5">
                    <ForumCategories
                      forumcats={forumcats}
                    // updateForumCatName={(ele) => this.setState({ lastName: ele })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}


      </React.Fragment>
    );

  }
}

export default Forum;