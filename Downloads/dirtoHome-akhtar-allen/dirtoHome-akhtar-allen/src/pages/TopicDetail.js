import React from "react";
import { Link } from "react-router-dom";

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleMobileNoteNav = this.toggleMobileNoteNav.bind(this);
    this.state = {
      dropdownOpen: false,
      isMobileNoteNavOn: false,
    };
  }

  // componentDidMount() {
  //   this.context.handleSetPageContentFullHeight(true);
  //   this.context.handleSetPageContentFullWidth(true);
  // }
  //
  // componentWillUnmount() {
  //   this.context.handleSetPageContentFullHeight(false);
  //   this.context.handleSetPageContentFullWidth(false);
  // }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  toggleMobileNoteNav() {
    this.setState((state) => ({
      isMobileNoteNavOn: !state.isMobileNoteNavOn,
    }));
  }

  render() {
    return (
      <div className="vertical-box with-grid inbox bg-light">
        <div className="vertical-box-column">
          <div className="vertical-box">
            <div className="wrapper clearfix">
              <div className="pull-left">
                <div className="btn-group m-r-5">
                  <button className="btn btn-white btn-sm">
                    <i className="fa fa-reply m-r-3 m-r-xs-0"></i>{" "}
                    <span className="hidden-xs">Edit</span>
                  </button>
                </div>
                <div className="btn-group m-r-5">
                  <button className="btn btn-white btn-sm">
                    <i className="fa fa-trash m-r-3 m-r-xs-0"></i>{" "}
                    <span className="hidden-xs">Delete</span>
                  </button>
                </div>
              </div>
              <div className="pull-right">
                <div className="btn-group">
                  <Link
                    to="/ticket/inbox"
                    className="btn btn-white btn-sm disabled"
                  >
                    <i className="fa fa-arrow-up"></i>
                  </Link>
                  <Link to="/ticket/inbox" className="btn btn-white btn-sm">
                    <i className="fa fa-arrow-down"></i>
                  </Link>
                </div>
                <div className="btn-group m-l-5">
                  <Link to="/ticket/inbox" className="btn btn-white btn-sm">
                    <i className="fa fa-times"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="vertical-box-row bg-white">
              <div className="vertical-box-cell">
                <div className="vertical-box-inner-cell">
                  <div className="wrapper">
                    <h3 className="m-t-0 m-b-15 f-w-500">
                      Bootstrap v4.0 is coming soon
                    </h3>
                    <ul className="media-list underline m-b-15 p-b-15">
                      <li className="media media-sm clearfix">
                        <Link to="/ticket/inbox" className="pull-left">
                          <img
                            className="media-object rounded-corner"
                            alt=""
                            src="/assets/img/user/user-12.jpg"
                          />
                        </Link>
                        <div className="media-body">
                          <div className="email-from text-inverse f-s-14 f-w-600 m-b-3">
                            from support@wrapbootstrap.com
                          </div>
                          <div className="m-b-3">
                            <i className="fa fa-clock fa-fw"></i> Today, 8:30 AM
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="attached-document clearfix">
                      <li className="fa-file">
                        <div className="document-file">
                          <Link to="/ticket/detail">
                            <i className="fa fa-file-pdf"></i>
                          </Link>
                        </div>
                        <div className="document-name">
                          <Link to="/ticket/detail">flight_ticket.pdf</Link>
                        </div>
                      </li>
                      <li className="fa-camera">
                        <div className="document-file">
                          <Link to="/ticket/detail">
                            <img
                              src="/assets/img/gallery/gallery-11.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="document-name">
                          <Link to="/ticket/detail">front_end_mockup.jpg</Link>
                        </div>
                      </li>
                    </ul>

                    <p className="f-s-12 text-inverse p-t-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras vel auctor nisi, vel auctor orci. <br />
                      Aenean in pretium odio, ut lacinia tellus. Nam sed sem ac
                      enim porttitor vestibulum vitae at erat.
                    </p>
                    <p className="f-s-12 text-inverse">
                      Curabitur auctor non orci a molestie. Nunc non justo quis
                      orci viverra pretium id ut est. <br />
                      Nullam vitae dolor id enim consequat fermentum. Ut vel
                      nibh tellus. <br />
                      Duis finibus ante et augue fringilla, vitae scelerisque
                      tortor pretium. <br />
                      Phasellus quis eros erat. Nam sed justo libero.
                    </p>
                    <p className="f-s-12 text-inverse">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                      <br />
                      Sed tempus dapibus libero ac commodo.
                    </p>
                    <br />
                    <br />
                    <p className="f-s-12 text-inverse">
                      Best Regards,
                      <br />
                      Sean.
                      <br />
                      <br />
                      Information Technology Department,
                      <br />
                      Senior Front End Designer
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper text-right clearfix">
              <div className="btn-group">
                <Link
                  to="/ticket/inbox"
                  className="btn btn-white btn-sm disabled"
                >
                  <i className="fa fa-arrow-up"></i>
                </Link>
                <Link to="/ticket/inbox" className="btn btn-white btn-sm">
                  <i className="fa fa-arrow-down"></i>
                </Link>
              </div>
              <div className="btn-group m-l-5">
                <Link to="/ticket/inbox" className="btn btn-white btn-sm">
                  <i className="fa fa-times"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteDetail;
