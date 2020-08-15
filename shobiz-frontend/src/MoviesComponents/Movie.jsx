import React, {Component} from "react" 

class Movie extends Component { 
    state = {
        showImg: true 
    }

    handleClick = (e) => {
        const val = this.state.showImg 
        this.setState({
            showImg: !val 
        })
    }

    render() {
        return (
            <div> 
                <li>
                    <h1>{this.props.movie.title} - {this.props.movie.language}</h1> 
                    <p>{this.props.movie.overview}</p> 
                    <p>{this.props.movie.release_date}</p>
                    <img onClick={(e) => this.handleClick(e)} src={this.state.showImg ? this.props.movie.image_1 : this.props.movie.image_2} alt={this.props.movie.title} />
                </li>
            </div>
            
        )
    }
}

export default Movie; 