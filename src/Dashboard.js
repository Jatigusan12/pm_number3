import React, {Component} from 'react';

class Dashboard extends Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div>
            <div><h2>Welcome</h2></div>
            <div><h2>Master,{this.props.username}</h2></div>
            </div>
        )
    }
}
export default Dashboard;