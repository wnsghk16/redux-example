import React, {Component} from 'react';
import '../../assets/join.css'
import userActions from "../../actions/user.actions";
import {connect} from 'react-redux'

class Join extends Component<any,any> {
    constructor(props) {
        super(props);
        this.state={
            userid:'',
            passwd:'',
            email:'',
            submitted:false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({submitted:true})
        const{userid,passwd,email} = this.state
        if(userid && passwd && email){
            this.props.join(userid,passwd,email)
        }
    }
    render() {
        const {userid,passwd,email,submitted} = this.state
        const temp={}
        const helpBlock={color:"red"}
        return <div>
                <form name={"form"} style={temp} onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>

                        <label htmlFor="userid"><b>ID</b></label>
                        <input type="text" placeholder="Enter ID" name="userid" value={userid} onChange={this.handleChange}/>
                        {
                            submitted && !userid &&
                                <div style={helpBlock} className={"help-block"}>아이디는 필수값입니다.</div>
                        }

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="passwd" value={passwd} onChange={this.handleChange}/>
                        {
                            submitted && !passwd &&
                                <div style={helpBlock} className={"help-block"}>비밀번호는 필수값입니다.</div>
                        }

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" value={email} onChange={this.handleChange}/>
                        {
                            submitted && !email &&
                                <div style={helpBlock} className={"help-block"}>이메일은 필수값입니다.</div>
                        }
                        <label>
                            <input type="checkbox" name="remember" style={temp}/> Remember me
                        </label>

                        <p>By creating an account you agree to our <a href="#" style={temp}>Terms
                            & Privacy</a>.</p>

                        <div className="clearfix">
                            <button type="button" className="cancelbtn">Cancel</button>
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
    }
}
function mapStateToProps(state) {
    const {JoiningIn} = state.userReducers
    return {JoiningIn}
}
const actionCreator = {
    join : userActions.join
}
const connectedJoinPage = connect(mapStateToProps,actionCreator)(Join)
export {connectedJoinPage as Join}