import React, {Component} from 'react';

class Counter extends Component {
    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };
    /*addTags() {
        if(this.state.tags.length === 0) return "There is no tags available";

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }*/

    render() {
        console.log("Props", this.props);
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button style={{ fontSize: 15 }}
                        className="btn btn-secondary btn-sm"
                        onClick={ ()=>this.props.onIncrement(this.props.counter) } >Increment
                </button>
                <button style={{ fontSize: 15 }}
                        className="btn btn-danger btn-sm m-2"
                        onClick={ ()=>this.props.onDelete(this.props.counter.id) } >Delete
                </button>
                {/*<h3>{this.state.tags.length === 0 && "Please add Some tag"}</h3>
                <h3>{this.addTags()}</h3>*/}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;

