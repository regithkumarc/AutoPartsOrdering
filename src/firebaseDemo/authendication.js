import React from 'react'
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import fire from '../config/fire'

class AuthendicationApp extends React.Component {

    uiConfig = {
        signInSuccessUrl: '/',
        signInFlow : "popup",
        signInOptions : [
            fire.auth.GoogleAuthProvider.PROVIDER_ID,
            fire.auth.FacebookAuthProvider.PROVIDER_ID,
            fire.auth.TwitterAuthProvider.PROVIDER_ID,
            fire.auth.GithubAuthProvider.PROVIDER_ID,
            fire.auth.EmailAuthProvider.PROVIDER_ID
            
        ]
    }

    render() {
        return(
            <div>
                <StyledFireBaseAuth
                    uiConfig = {this.uiConfig}
                    firebaseAuth = {fire.auth()}></StyledFireBaseAuth>
            </div>
        )
    }
}
export default AuthendicationApp;