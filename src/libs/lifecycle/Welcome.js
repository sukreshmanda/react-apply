import React from "react";
class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "name": this.props.name
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps");
        if(props.name === state.name) return null;
        else return props;
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
        console.log("render");
        return (
            <div>
                Hello {this.state.name} welcome to our page
            </div>
        )
    }
}
export default Welcome;