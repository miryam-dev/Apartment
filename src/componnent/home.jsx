import React from "react";
function mapStateToProps(state) {
    return {
        usersList: state.user.userList
    };
}
export default connect(mapStateToProps)(function Home(props) {})