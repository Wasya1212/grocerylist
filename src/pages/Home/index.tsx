import React, { Component } from "react";
import { Link } from "react-router-dom";

export interface HomeProps {

}

export interface HomeState {

}

export default class GroceryList extends Component<HomeProps, HomeState> {
    render() {
        return (
            <Link to="list">Go to list</Link>
        );
    }
}