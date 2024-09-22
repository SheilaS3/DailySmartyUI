import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0
        }
    }

    getNameForPostLink(str) {
        var n = str.lastIndexOf('v2/');
        var link = str.substring(n + 3, str.length -1);

        if((n+1) == str.length) {
            link = str.slice(0, n);
            n = link.lastIndexOf('v2/');
            link = str.substring(n + 3, str.length - 1);
        }    

        if(link.includes('.html')) {
            link = link.substring(0, link.length - 5);
        }
        if(link.includes('.htm')) {
            link = link.substring(0, link.length - 4);
        }

        return link;
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
                                    <a href={this.props.ability.url}>{this.getNameForPostLink(this.props.ability.url)}</a>
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