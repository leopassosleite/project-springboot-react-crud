import React, { Component } from "react";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <a href="http://localhost:8080/home/employees" className="navbar-brand"> XBarts App</a>
                </header>
            </div>
        )
    }
}

export default HeaderComponent