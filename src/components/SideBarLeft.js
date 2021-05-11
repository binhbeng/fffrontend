import React, { Component } from 'react';

class sideBarLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      listFriend: [],
      allPost: []
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);
  }

  componentDidMount() {
    let data = localStorage.getItem('login')
    data = JSON.parse(data)
    let token = data.token
    console.log("data", token)
    fetch('http://localhost:1337/user/get-user-info', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.setState({ username: data.userInfo.username })
        this.setState({ avatar: data.userInfo.avatar })
      })
      .catch((e) => {
        console.log("event ", e)
      });
    fetch('http://localhost:1337/contact/get-list-friends', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ status: "accepted" })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.setState({ listFriend: data.listFriend })

      })
      .catch((e) => {
        console.log("event ", e)
      });
    fetch('http://localhost:1337/post/get-all-posts', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token
      },

    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.setState({ allPost: data.data })

      })
      .catch((e) => {
        console.log("event ", e)
      })
  };

  render() {
    return (
      <div>
        <div id="page-contents">
          <div className="container">
            <div className="row">
              {/* Newsfeed Common Side Bar Left
    ================================================= */}
              <div className="col-md-3 static">
                <div className="profile-card">
                  <img src={this.state.avatar} alt="user" className="profile-photo" />
                  <h5><a href="timeline.html" className="text-white">Sarah{this.state.username}</a></h5>
                  <a href="#" className="text-white"><i className="ion ion-android-person-add" /> 1,299 followers</a>
                </div>{/*profile card ends*/}
                <ul className="nav-news-feed">
                  <li><i className="icon ion-ios-paper" /><div><a href="newsfeed.html">My Newsfeed</a></div></li>
                  <li><i className="icon ion-ios-people" /><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
                  <li><i className="icon ion-ios-people-outline" /><div><a href="newsfeed-friends.html">Friends</a></div></li>
                  <li><i className="icon ion-chatboxes" /><div><a href="newsfeed-messages.html">Messages</a></div></li>
                  <li><i className="icon ion-images" /><div><a href="newsfeed-images.html">Images</a></div></li>
                  <li><i className="icon ion-ios-videocam" /><div><a href="newsfeed-videos.html">Videos</a></div></li>
                </ul>{/*news-feed links ends*/}
                <div id="chat-block">
                  <div className="title">Chat online</div>
                  <ul className="online-users list-inline">
                    <li><a href="newsfeed-messages.html" title="Linda Lohan"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></a></li>
                    <li><a href="newsfeed-messages.html" title="Sophia Lee"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></a></li>
                    <li><a href="newsfeed-messages.html" title="John Doe"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></a></li>
                    <li><a href="newsfeed-messages.html" title="Alexis Clark"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></a></li>
                    <li><a href="newsfeed-messages.html" title="James Carter"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></a></li>
                    <li><a href="newsfeed-messages.html" title="Robert Cook"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></a></li>
                    <li><a href="newsfeed-messages.html" title="Richard Bell"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></a></li>
                    <li><a href="newsfeed-messages.html" title="Anna Young"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></a></li>
                    <li><a href="newsfeed-messages.html" title="Julia Cox"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></a></li>
                  </ul>
                </div>{/*chat block ends*/}
              </div>
              <div className="col-md-7">
                {/* Post Create Box
      ================================================= */}
                <div className="create-post">
                  <div className="row">
                    <div className="col-md-7 col-sm-7">
                      <div className="form-group">
                        <img src={this.state.avatar} alt="" className="profile-photo-md" />
                        <textarea name="texts" id="exampleTextarea" cols={30} rows={1} className="form-control" placeholder="Write what you wish" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <div className="tools">
                        <ul className="publishing-tools list-inline">
                          <li><a href="#"><i className="ion-compose" /></a></li>
                          <li><a href="#"><i className="ion-images" /></a></li>
                          <li><a href="#"><i className="ion-ios-videocam" /></a></li>
                          <li><a href="#"><i className="ion-map" /></a></li>
                        </ul>
                        <button className="btn btn-primary pull-right">Publish</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*ALl  Post Start*/}
                {
                  this.state.allPost.map(i => (
                    <div className="post-content">
                      <img src={i.images} alt="" className="img-responsive post-image" />
                      <div className="post-container">
                        <img src={i.userAvatar} alt="user" className="profile-photo-md pull-left" />
                        <div className="post-detail">
                          <div className="user-info">
                            <h5><a href="#" className="profile-link">{i.name}</a> <span className="following">following</span></h5>
                            <p className="text-muted">Published a photo about {i.createdAt} ? hour ago</p>
                          </div>
                          <div className="reaction">
                            <a className="btn text-green"><i className="icon ion-thumbsup" /> 2</a>
                            <a className="btn text-red"><i className="fa fa-thumbs-down" /> 0</a>
                          </div>
                          <div className="line-divider" />
                          <div className="post-text">
                            <p>{i.caption}</p>
                          </div>
                          <div className="line-divider" />
                          <div className="post-comment">
                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                            <p><a href="timeline.html" className="profile-link">Julia </a>Đây là binh luận của tôi.</p>
                          </div>
                          <div className="post-comment">
                            <img src={this.state.avatar} alt="" className="profile-photo-sm" />
                            <input type="text" className="form-control" placeholder="Post a comment" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>
              {/* Newsfeed Common Side Bar Right
    ================================================= */}
              <div className="col-md-2 static">
                <div className="suggestions" id="sticky-sidebar">
                  <h4 className="grey">Friends List</h4>
                  {
                    this.state.listFriend.map(i => (
                      <div className="follow-user">
                        <img src={i.contactAvatar} alt="" className="profile-photo-sm pull-left" />
                        <div>
                          <h5><a href="#">{i.contactName}</a></h5>
                        </div>
                        <a href="#" className="text-green"> Friends</a>
                      </div>
                    )

                    )
                  }

                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default sideBarLeft;