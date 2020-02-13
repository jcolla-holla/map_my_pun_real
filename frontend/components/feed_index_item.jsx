import React from 'react';

class FeedIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <li>this is FeedIndexItem that is a {this.props.itemType} of ID {this.props.item.id}</li>
         );
    }
}
 
export default FeedIndexItem;
