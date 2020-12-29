import React, { Component } from "react";

import GroceryView from "../../components/GroceryView/GroceryView";

import GroceryService, { Grocery, GroceryStatus } from "../../services/GroceryService";

export interface GroceryViewProps {

}

export interface GroceryViewState {

}

export default class GroceryList extends Component<GroceryViewProps, GroceryViewState> {
    state = {
        grocery: new Grocery({})
    }

    constructor(props: GroceryViewProps) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            grocery: GroceryService.getById()
        });
    }

    render() {
        return (
            <GroceryView grocery={this.state.grocery}></GroceryView>
        );
    }
}