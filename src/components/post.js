import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0
        }
    }

    render() {
        if(this.props.type === 'recent') {
            return (
                <li className="recent-post">
                    <div className="recent-post__title">
                        {this.props.name}
                    </div>

                    <div className="recent-post__topics">
                        <a href={this.props.url}>API URL</a>
                    </div>
                </li>
            )
        } else if(this.props.type === 'result') {
            return (
                <li className="result-post"
                    onMouseEnter={() => this.setState({ height: 70 })}
                    onMouseLeave={() => this.setState({ height: 0 })}
                >
                    <div className="result-post__topics">
                        {this.props.ability.name}
                    </div>

                    <div className='result-post__title'>
                        <a href={this.props.ability.url}>
                            ABILITY API
                        </a>
                    </div>

                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >
                        <div className="result-post__links">
                            <div className='post-link'>
                                <div className='post-link__box'></div>
                                <div className='post-link__link'>
                                    <a href={this.props.ability.url}>API LINK</a>
                                </div>
                            </div>
                        </div>
                    </AnimateHeight>
                </li>
            )
        }
    }
}

export default Post;