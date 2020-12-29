import React from "react";

import {
    Container,
    Card,
    Table
} from "react-bootstrap";

import { Grocery } from "../../services/GroceryService";

export interface GroceryViewProps {
    grocery: Grocery
}

export const GroceryView = (props: GroceryViewProps) => (
    <Container>
        <Card>
            <Card.Header>{props.grocery.name}</Card.Header>
            <Card.Body>
                <Card.Title>Status: {props.grocery.status}</Card.Title>
                <Card.Title>Priority: {props.grocery.priority}</Card.Title>
                <Card.Text>last upd date: now</Card.Text>
            </Card.Body>
        </Card>
    </Container>
)

export default GroceryView;