import React from "react";
import { Link } from "react-router-dom";

import { $enum } from "ts-enum-util";

import {
    Container,
    Form,
    Table
} from "react-bootstrap";

import { Grocery, GroceryStatus } from "../../services/GroceryService";

export interface GroceryTableProps {
    items: Grocery[]
}

export const GroceryTable = (props: GroceryTableProps) => (
    <div className="grocery-list">
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>priority</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map((grocery: Grocery, index: number) => (
                            <tr key={`grocery-${index}`}>
                                <td>
                                    <div className="grocery-name">
                                        <Link to={`grocery/${grocery.id}`}>{grocery.name}</Link>
                                    </div>
                                </td>
                                <td>
                                    <div className="grocery-priority">
                                        <span>{grocery.priority}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="grocery-status">
                                        <Form>
                                            <Form.Group>
                                                <Form.Control as="select" name="status">
                                                    <option value={grocery.status}>{grocery.status}</option>
                                                    {
                                                        $enum(GroceryStatus)
                                                            .getValues()
                                                            .filter((status) => (
                                                                status !== grocery.status
                                                            ))
                                                            .map((status: string, index: number) => (
                                                                <option key={`status-${index}`} value={status}>{status}</option>
                                                            ))
                                                    }
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    </div>
);

export default GroceryTable;