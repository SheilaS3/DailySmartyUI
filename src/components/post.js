import React, { Component } from 'react';

class Post extends Component {
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
                    <div className='pokemon-name'>
                        {this.props.name}
                    </div>
                    <div className="ability__name">
                        {this.props.ability.name}
                    </div>

                    <div className="ability__url">
                        <a href={this.props.ability.url}>API URL</a>
                    </div>
                </li>
            )
        }
    }
}

export default Post;