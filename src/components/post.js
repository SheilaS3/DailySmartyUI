import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <li className="recent-post">
                <div className="recent-post__title">
                    {this.props.name}
                </div>

                <div className="recent-post__topics">
                    {this.props.url}
                </div>
            </li>
        )
    }
}

export default Post;