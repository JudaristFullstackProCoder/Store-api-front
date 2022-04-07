import PropTypes from "prop-types";
import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function DashboardPage () {
     const {user} = useContext(userContext);
     console.log(user);
     return <div>dashboard</div>
}

DashboardPage.propTypes = {

}
