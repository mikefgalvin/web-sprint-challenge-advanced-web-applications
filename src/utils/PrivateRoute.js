import React from 'react';
import { Route } from 'react-router-dom'; //can use Redirect as well


const PrivateRoute = ({component: Component, ...rest}) => {

    const redirect = () => {
        window.location.href = '/login'
    }
    
    return  (<Route {...rest} render={
        (props) => {
            if (localStorage.getItem('token')) {
            return <Component {...props}/>
            } else {
                return(
                    <div>
                        <h1>Log in to view this page</h1>
                       <button onClick={redirect}> Click here to log in</button>
                    </div>
                )
            }
        }
    }
    />);

}

export default PrivateRoute;