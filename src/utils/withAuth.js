

const withAuth = (Component) => {
    const isAuthenticated = true;
    return function (props) {
        if (isAuthenticated) {
            return <Component />
        } else {
            return <p>Not Autheticated please login</p>
        }
    }
}

export default withAuth;