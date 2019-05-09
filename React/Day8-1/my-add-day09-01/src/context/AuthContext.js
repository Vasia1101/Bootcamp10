import React, {Component, createContext} from 'react';
import userInfo from '../user-info.json';

export const AuthContext = createContext({
    isAuthenticated: false,
    user: {},
    onSignIn: () =>null,
    onSignOut: () =>null,
});

export default class AuttContextProvider extends Component{
    static Consumer = AuthContext.Consumer;
    state = {
        isAuthenticated:false,
        user: {}
    }
    onSignIn=()=>{
        this.setState({
            isAuthenticated: true,
            user: userInfo
        })
        console.log('cklik')
    }
    onSignOut=()=>{
        this.setState({
            isAuthenticated: false,
            user: {}
        })
        console.log('out')
    }

    render() {
        const {children} = this.props;
        const {isAuthenticated, user} = this.state;
      return (
        <AuthContext.Provider
        value = {{
            isAuthenticated,
    user,
    onSignIn: this.onSignIn,
    onSignOut: this.onSignOut

        }}
        >
            {children}
        </AuthContext.Provider>
      )
    }
}