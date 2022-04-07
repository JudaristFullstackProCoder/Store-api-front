import PropTypes from "prop-types";
import Helmet from "react-helmet";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default function UserProfilePage () {
     return <div>
          <Helmet>
               <title>User | Profile</title>
               <script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js"></script>
               <script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.1.3/firebase-auth-compat.js"></script>
          </Helmet>
          <div id="sign-in-status"></div>
          <div id="sign-in"></div>
          <pre id="account-details"></pre>
     </div>
}

UserProfilePage.propTypes = {

}
