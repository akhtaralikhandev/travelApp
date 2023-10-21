// details of all the replies for selected Post
import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
import { Box, Typography, Breadcrumbs } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AttachmentIcon from "@material-ui/icons/Attachment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PanToolIcon from "@material-ui/icons/PanTool";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import LockIcon from "@material-ui/icons/Lock";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import ReplyIcon from "@material-ui/icons/Reply";

import "./TopicDetail.css";
// for quoting
import QuoteForm from "./forum_components/QuoteForm";
import ReactHtmlParser from "react-html-parser";
import EditPost from "./forum_components/EditPost";
// for editing replies
import EditReplyForm from "./forum_components/EditReplyForm";
import Layout from "../../components/common/Layout";

import {
  deletePost,
  deleteTopic,
  getPost,
  getPosts,
  getTopic,
} from "../../services/posts";

import ReplyTopic from "./forum_components/replyTopic";
import {
  deleteInternalPost,
  deleteInternalTopic,
  getInternalPost,
  getInternalPosts,
  getInternalTopic,
} from "../../services/internaltopics";

function TopicDetail(props) {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const [replyForm, setReplyForm] = useState(false);

  const [quoteForm, setQuoteForm] = useState(false);
  const [quotePostForm, setQuotePostForm] = useState(false);

  const [editForm, setEditForm] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ type: "", message: "" });

  let { topicId } = useParams();

  const [topicReply, setTopicReply] = useState(false);
  const [postReply, setPostReply] = useState(false);

  const [topic, setTopic] = useState({});
  const [replies, setReplies] = useState([]);
  //submit edit form
  const submitForm = (e) => {
    e.preventDefault();
    setShowForm(false);
    setEditPost(false);
  };

  //SubmitForm for the topic reply
  const submitReplyForm = (e) => {
    e.preventDefault();
    setShowReplyForm(false);
    setTopicReply(false);
  };
  //SubmitForm for the Post reply
  const submitReplyPostForm = (e) => {
    e.preventDefault();
    setShowReplyForm(false);
    setPostReply(false);
  };

  const submitQuoteForm = (e) => {
    e.preventDefault();
    setShowForm(false);
    setQuoteForm(false);
  };

  const submitQuotePostForm = (e) => {
    e.preventDefault();
    setShowForm(false);
    setQuotePostForm(false);
  };

  function goBackHandler() {
    history.push(`/forum/${topic.catId._id}`);
  }
  //passing data from child to parent
  const alertSuccess = (msg) => {
    setAlertMessage({ type: "success", message: msg });
    setTimeout(function () {
      setAlertMessage({});
    }, 1000);
  };

  //Passing data from child to parent
  const alertFailure = (msg) => {
    setAlertMessage({ type: "danger", message: msg });
    setTimeout(function () {
      setAlertMessage({});
    }, 1000);
  };

  const loadPage = async () => {
    const p = await getPosts();
    console.log(p.data);
    let filteredPosts = p.data.filter((e) => e.topicId._id === topicId);
    setReplies(filteredPosts);
    const data = await getTopic(topicId);
    console.log(data.data);
    setTopic(data.data);
  };
  //post a reply
  const submitReply = (e, idx) => {
    setReplyForm({ id: idx, state: false });
    setEditForm({ id: idx, state: false });
    e.preventDefault();
  };

  useEffect(() => {
    console.log(props.page);
    loadPage();
  }, []);

  // main topic reply
  const handleReply = (e) => {
    e.preventDefault();
    setTopicReply(true);
  };

  const handleQuote = (e) => {
    e.preventDefault();
    console.log("quote");
    setQuoteForm(true);
  };
  const handleQuotePost = (e, idx) => {
    e.preventDefault();
    console.log("here meryem");
    setQuotePostForm({ id: idx, state: true });
  };

  const editReply = (e, idx) => {
    setEditForm({ id: idx, state: true });
  };

  const addPostReply = (e, idx) => {
    setPostReply({ id: idx, state: true });
  };

  const handleEditPost = (e) => {
    e.preventDefault();
    setEditPost(true);
    setEditForm(false);
    setShowForm(false);
  };

  const handleDelete = async (event, id) => {
    event.preventDefault();
    const myPosts = await getPosts();
    let filteredPosts = myPosts.data.filter((e) => e.topicId._id === id);
    filteredPosts.map(async (e) => {
      await deletePost(e._id);
    });
    await deleteTopic(id);
    history.push("/forum");
  };

  const [nestedComments, setNestedComments] = useState([]);

  const stateRef = useRef();
  stateRef.current = nestedComments;

  const deleteReply = async (e, id) => {
    e.preventDefault();
    try {
      const comments = await getPosts();
      for (let j = 0; j < comments.data.length; j++) {
        const promise1 = Promise.resolve(
          getParent(comments.data[j], comments.data[j], id)
        );
        promise1.then(async (value) => {
          if (value !== null) {
            await deletePost(value._id);
          }
        });
        if (j == comments.data.length - 1) {
          await deletePost(id);
          loadPage();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getParent = async (c, comment, id) => {
    if (comment.parentId === id) {
      return c;
    } else {
      if (!comment.parentId) {
        return null;
      } else {
        const p = await getPost(comment.parentId);
        return getParent(c, p.data, id);
      }
    }
  };

  return (
    <Layout>
      <Box mt={15} mb={15} className="container p-0 px-md-2">
        <div className="col-lg-12 bg-white col-12">
          <div className="col-lg-10 col-sm-12 col-12">
            {/* go back button */}
            <div
              style={{ justifyContent: "space-between", alignItems: "center" }}
              className="row mt-2"
            >
              <button
                onClick={goBackHandler}
                className="btn btn-secondary mt-3 ml-3"
              >
                Go Back
              </button>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  className="linkStyle"
                  onClick={() => history.push(`/forum`)}
                >
                  <Typography color="text.primary" und>
                    Forum
                  </Typography>
                </Link>
                <Link
                  underline="hover"
                  className="linkStyle"
                  onClick={() => history.push(`/forum/${topic.catId._id}`)}
                >
                  <Typography color="text.primary" und>
                    {topic?.catId?.name}
                  </Typography>
                </Link>
                <Link
                  underline="hover"
                  className="linkStyle"
                  onClick={() => history.push(`/forum/topic/${topic._id}`)}
                >
                  <Typography color="text.primary" und>
                    {topic?.title}
                  </Typography>
                </Link>
              </Breadcrumbs>
            </div>

            {topic._id && (
              <div className="">
                <div
                  className="card shadow-none bg-white  p-0 "
                  style={{ border: "none" }}
                >
                  <div className="card-body text-dark">
                    <div className="mt-2">
                      {/* Avatar and email */}
                      <div className="media mb-4">
                        <img
                          src={`${topic?.user?.imageSrc}`}
                          className="rounded-circle mr-3 mail-img "
                          alt="media image"
                          width="70"
                          height="70"
                        />
                        <div className="media-body">
                          <h8 className="">
                            {topic?.user?.contactName.first +
                              " " +
                              topic?.user?.contactName.last}
                          </h8>{" "}
                          <br />
                          <div className="">
                            <i className="mdi mdi-clock mr-1 align-center"></i>
                            <small className="">
                              {Date(topic.createdOn).slice(0, 16)}
                            </small>
                          </div>
                          <p>{topic.narrative} </p>
                        </div>
                      </div>
                      {/* <!-- media --> */}

                      {/* body */}
                      <div>
                        {" "}
                        {editPost ? (
                          <div className="mb-3">
                            <EditPost
                              type={props.page}
                              submitForm={submitForm}
                              Post={topic}
                              loadPage={loadPage}
                            />
                          </div>
                        ) : (
                          <div>{ReactHtmlParser(topic.message)}</div>
                        )}
                        {topicReply ? (
                          <div className="mb-3">
                            <ReplyTopic
                              reply="topic"
                              type={props.page}
                              submitReplyForm={submitReplyForm}
                              Post={topic}
                              loadPage={loadPage}
                            />
                          </div>
                        ) : (
                          <div>{ReactHtmlParser(topic.message)}</div>
                        )}
                        {quoteForm ? (
                          // for quoting
                          <div>
                            <QuoteForm
                              message={topic.narrative}
                              name={topic.title}
                              type={props.page}
                              submitForm={submitQuoteForm}
                              Post={topic}
                              quote="topic"
                              loadPage={loadPage}
                              alertSuccess={alertSuccess}
                              alertFailure={alertFailure}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="row bg-light px-3 py-3 border-bottom justify-content-end">
                      <div>
                        <div class="btn-group">
                          {" "}
                          <>
                            <div className="comment-reply d-flex justify-content-end align-items-center">
                              <Box>
                                <span style={{ marginRight: ".5rem" }}>
                                  <FormatQuoteIcon onClick={handleQuote} />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <FavoriteBorderIcon />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <AttachmentIcon />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <BookmarkBorderIcon />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <ReplyIcon onClick={handleReply} />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <EditIcon onClick={handleEditPost} />
                                </span>

                                <span style={{ marginRight: ".5rem" }}>
                                  <PanToolIcon />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <DeleteIcon
                                    onClick={(e) => handleDelete(e, topic._id)}
                                  />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <LockIcon />
                                </span>
                              </Box>
                            </div>
                          </>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* End Body */}

          {/* Body  for replies*/}
          <div className="col-lg-10 ">
            <div className="ml-1 ml-md-4">
              <div
                className="card shadow-none bg-white "
                style={{ border: "none" }}
              >
                {replies.length !== 0
                  ? replies.map((reply, idx) => (
                      // better ui
                      <div className="card-body text-dark">
                        {/* Avatar and email */}
                        <div className="media mb-4">
                          <img
                            src={`${reply.user.imageSrc}`}
                            className="rounded-circle mr-3 mail-img "
                            alt="media image"
                            width="70"
                            height="70"
                          />
                          <div className="media-body">
                            <h8 className="">
                              {reply?.user?.contactName.first +
                                " " +
                                reply?.user?.contactName.last}
                            </h8>{" "}
                            <br />
                            <div className="">
                              <i className="mdi mdi-clock mr-1 align-center"></i>
                              <small className="">
                                {" "}
                                {Date(reply.createdOn).slice(0, 16)}
                              </small>
                            </div>
                            <p>{reply.narrative} </p>
                          </div>
                        </div>
                        {/* <!-- media --> */}
                        {/* body */}
                        {editForm.id == idx && editForm.state ? (
                          <>
                            <EditReplyForm
                              type={props.page}
                              submitReply={submitReply}
                              idx={idx}
                              reply={reply}
                              loadPage={loadPage}
                            />
                          </>
                        ) : (
                          <div>{ReactHtmlParser(reply.message)}</div>
                        )}
                        {postReply.id == idx && postReply.state ? (
                          <div className="mb-3">
                            <ReplyTopic
                              submitReplyForm={submitReplyPostForm}
                              type={props.page}
                              idx={idx}
                              Post={reply}
                              loadPage={loadPage}
                            />
                          </div>
                        ) : (
                          <div>{ReactHtmlParser(topic.message)}</div>
                        )}
                        {quotePostForm.id == idx && quotePostForm.state ? (
                          // for quoting
                          <div>
                            <QuoteForm
                              message={reply.narrative}
                              idx={idx}
                              type={props.page}
                              name={
                                reply?.user?.contactName.first +
                                " " +
                                reply?.user?.contactName.last
                              }
                              submitForm={submitQuotePostForm}
                              Post={reply}
                              loadPage={loadPage}
                              alertSuccess={alertSuccess}
                              alertFailure={alertFailure}
                            />
                          </div>
                        ) : (
                          ""
                        )}

                        <div class="col-lg-12">
                          <div class="row bg-light px-3 py-3  justify-content-end mt-3 mb-3">
                            {" "}
                            <div className="comment-reply d-flex justify-content-end align-items-center">
                              <Box>
                                <span style={{ marginRight: ".5rem" }}>
                                  <FormatQuoteIcon
                                    id={reply.userId}
                                    onClick={(e) => handleQuotePost(e, idx)}
                                  />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <FavoriteBorderIcon />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <AttachmentIcon />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <BookmarkBorderIcon />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <ReplyIcon
                                    id={reply.userId}
                                    onClick={(e) => addPostReply(e, idx)}
                                  />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <EditIcon
                                    id={reply.userId}
                                    onClick={(e) => editReply(e, idx)}
                                  />
                                </span>

                                <span style={{ marginRight: ".5rem" }}>
                                  <PanToolIcon />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <DeleteIcon
                                    id={reply.userId}
                                    onClick={(e) => deleteReply(e, reply._id)}
                                  />
                                </span>
                                <span style={{ marginRight: ".5rem" }}>
                                  <LockIcon />
                                </span>
                              </Box>
                            </div>{" "}
                          </div>
                        </div>
                        <hr />
                        {/* better ui  end*/}
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
          {/* End Body for replies*/}
        </div>
      </Box>
    </Layout>
  );
}
export default TopicDetail;
