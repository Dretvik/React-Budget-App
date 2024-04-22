// Import PropTypes
import PropTypes from 'prop-types'; 

// RRD imports
import { Form, NavLink } from "react-router-dom";

// Library
import { TrashIcon } from '@heroicons/react/24/solid';

// Assets 
import logomark from "../assets/logomark.svg";

const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink
            to="/"
            aria-label="Go to home">
                <img src={logomark} alt="" height={30}/>
                <span>HomeBudget</span>
        </NavLink>
        {
            userName && (
                <Form 
                    method="post"
                    action="/logout"
                    onSubmit={(event) => {
                        if (!confirm("Delete user and all data?")) {
                            event.preventDefault()
                        }
                    }}
                    >

                    <button type="submit" className="btn btn--warning">
                        <span>Delete user</span>
                        <TrashIcon width={20}/>
                    </button>
                </Form>
            )
        }
    </nav>
  )
}

// Add PropTypes validation
Nav.propTypes = {
    // Adjust the type according to your requirement
    userName: PropTypes.string,
  };

export default Nav
