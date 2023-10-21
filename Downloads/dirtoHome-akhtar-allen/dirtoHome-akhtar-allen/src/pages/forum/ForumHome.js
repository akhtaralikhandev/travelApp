import React, { Component } from "react";
import { getTopics } from "./../../services/posts";
import { getForumCats } from "./../../services/forumcategories";
import { Box } from "@material-ui/core";
import CategoryTable from "./CategoryIndex";
import Spinner from "../../components/spinner";
import Layout from "../../components/common/Layout";
import NavigateMenu from "./NavigateMenu";
import HeaderTable2 from "./HeaderTable2";

// Component of ForumHome..
class ForumHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forumsubcats: [],
      topicsResult: [],
      lastName: "",
      lastUpdated: "hi",
      forumcats: [],
      forumId: "",
      forumCatName: "",
      loading: false,
    };
  }

  // Get forum categories..
  async getforumCategories() {
    const { forum_cat_id } = this.props.match.params;
    const { pathname, state } = this.props.location;
    const forumCatName = state;

    const { data: forumcats } = await getForumCats();

    if (pathname === "/forum") {
      this.setState({
        forumId: forumcats[0]._id,
        forumCatName: forumcats[0].name,
      });
    } else {
      this.setState({
        forumId: forum_cat_id,
        forumCatName: forumCatName,
      });
    }

    const topics = forumcats.map((e) => {
      return e.lastTopic;
    });

    this.setState({
      forumcats,
      topicsResult: topics,
    });
  }

  // After loadPage we will get Posts data also..
  async loadPage() {
    const { data: apiGetTopics } = await getTopics();

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
        let userReply = element.userReply ? element.userReply.length : 0;
        total = total + userReply;
      });
      this.setState({ topicsResult: apiGetTopics });
      this.setState({ lastName: apiGetTopics[0].user.username });
      this.setState({ lastUpdated: apiGetTopics[0].updatedAt });
    }
  }

  // Calling all async functions..
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    await this.getforumCategories();
    await this.loadPage();

    this.setState({
      loading: false,
    });
  }

  // The Render Method..
  render() {
    // Necessary States..
    const { forumcats, loading, topicsResult } = this.state;

    return loading ? (
      <Spinner color="black" size={80} />
    ) : (
      <Layout>
        <Box mt={15} mb={15} className="container">
          <NavigateMenu />
          <HeaderTable2 />
          <CategoryTable categoriesData={forumcats} latestData={topicsResult} />
        </Box>
      </Layout>
    );
  }
}

export default ForumHome;
