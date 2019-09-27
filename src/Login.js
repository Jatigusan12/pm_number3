import React, {Component} from 'react';
import Dashboard from './Dashboard';

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            userN :'',
            passw :'',
            passWord:'pnPhil',
            userName : "adrian",
            Login : false
        }
    }


    LoginB(event){
        event.preventDefault(event);
        let usern= this.state.userN;
        let username = this.state.userName;
        let pass = this.state.passw;
        let password = this.state.passWord;

        if(usern === username && pass === password){
            console.log("succesful");
            this.setState({Login: true})
        }else{
            console.log("Invalid Credentials");
            this.setState({Login: false})
        }
    }
    user(event){
        event.preventDefault(event);
        this.setState({userN : event.target.value});
    }
    pass(pass1){
        pass1.preventDefault(pass1);
        this.setState({passw: pass1.target.value});
    }
    

    render(){
        const Log = this.state.Login;
        if(!Log){
        return(
            <div><label>Username: </label>
                <input type="text"  placeholder="Username" onChange={(event)=>this.user(event)}/><br/>
                <label>Password: </label>
                <input type="password" placeholder="********" onChange={(pass1)=>this.pass(pass1)}/><br/>
                <button onClick={(event)=>this.LoginB(event)}>SUBMIT</button>

            </div>
            )
        }else{
            return(
            <div>
                <Dashboard username = {this.state.userN}/>
            </div>
            )    
    }
    }
}
export default Login;