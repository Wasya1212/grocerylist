import React, { Component } from "react";

import GroceryTable from "../../components/GroceryTable/GroceryTable";
import GroceryControl from "../../components/GroceryControl/GroceryControl";

import GroceryService, { Grocery, GroceryStatus } from "../../services/GroceryService";

export interface GroceryListProps {

}

export interface GroceryListState {

}

export default class GroceryList extends Component<GroceryListProps, GroceryListState> {
    state = {
        groceryList: []
    }

    constructor(props: GroceryListProps) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            groceryList: GroceryService.getList()
        })
    }

    render() {
        return (
            <section className="grocery-list-section">
                <GroceryControl></GroceryControl>
                <GroceryTable items={this.state.groceryList}></GroceryTable>
                <GroceryControl></GroceryControl>
            </section>
        );
    }
}