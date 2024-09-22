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
                <li className="pokemon">
                    <div className="pokemon__name">
                        {this.props.name}
                    </div>

                    <div className="pokemon__name">
                        <a href={this.props.url}>API URL</a>
                    </div>
                </li>
            )
        } else if(this.props.type === 'result') {
            return (
                <li className="abilities">
                    <div className="ability__name">
                        {this.props.ability.name}
                    </div>

                    <div className='api'>
                        <a href={this.props.ability.url}
                           onMouseEnter={() => this.setState({ height: 70 })}
                           onMouseLeave={() => this.setState({ height: 0 })}
                        >
                            ABILITY API
                        </a>
                    </div>

                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >
                        <div className="ability__url">
                            <a href={this.props.ability.url}>LINK</a>
                        </div>
                    </AnimateHeight>
                </li>
            )
        }
    }
}

export default Post;