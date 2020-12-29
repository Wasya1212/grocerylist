import React, { Component } from "react";

import {
    Container,
    Button,
    Modal,
    Form
} from "react-bootstrap";

import { $enum } from "ts-enum-util";

import GroceryService, {
    Grocery,
    GroceryStatus,
    minGroseryPriorityValue,
    maxGroseryPriorityValue
} from "../../services/GroceryService";

export interface GroceryControlProps {

}

export interface GroceryControlState {

}

interface createGroseryModalProps {
    onSubmit?: (grocery: Grocery) => void | Promise<void>,
    onShow?: () => void | Promise<void>,
    onClose?: () => void | Promise<void>,
    show: boolean
}

export const CreateGroseryModalComponent = (props: createGroseryModalProps) => {
    let inputNameRef = React.createRef<HTMLInputElement>();
    let prioritySelectRef = React.createRef<HTMLSelectElement>();
    let statusSelectRef = React.createRef<HTMLSelectElement>();

    const handleSubmit = () => {
        const newGrocery = new Grocery({
            name: inputNameRef.current?.value,
            priority: parseInt(prioritySelectRef.current?.value || '1'),
            // @ts-ignore
            status: statusSelectRef.current?.value || GroceryStatus.OUT
        });
        props.onSubmit && props.onSubmit(newGrocery);
    }

    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="createGroseryFrom.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            ref={inputNameRef}
                            required={true}
                            type="text"
                            placeholder="Enter name of product"
                            name="name"
                        />
                    </Form.Group>
                    <Form.Group controlId="createGroseryFrom.ControlSelect1">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control as="select" name="priority" ref={prioritySelectRef}>
                            {
                                Array
                                    .from(Array(maxGroseryPriorityValue - minGroseryPriorityValue + 1).keys())
                                    .map((priority: number, index: number) => (
                                        <option key={`priority-${index}`}>{priority + minGroseryPriorityValue}</option>
                                    ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" name="status" ref={statusSelectRef}>
                            {
                                $enum(GroceryStatus)
                                    .getValues()
                                    .map((status: string, index: number) => (
                                        <option key={`status-${index}`} selected value={status}>{status}</option>
                                    ))
                            }
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Close
              </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Save Changes
              </Button>
            </Modal.Footer>
        </Modal>
    );
};

export class GroceryControl extends Component<GroceryControlProps, GroceryControlState> {
    state = {
        showCreateGroseryModal: false
    }

    constructor(props: GroceryControlProps) {
        super(props);
    }

    showCreateGroseryModal = (): void => {
        this.setState({ showCreateGroseryModal: true });
    }

    hideCreateGroseryModal = (): void => {
        this.setState({ showCreateGroseryModal: false });
    }

    createGrosery = async (grocery: Grocery): Promise<void> => {
        await GroceryService.create(grocery);
        this.hideCreateGroseryModal();
    }

    render() {
        return (
            <Container>
                <Button onClick={this.showCreateGroseryModal}>Create</Button>
                <CreateGroseryModalComponent
                    show={this.state.showCreateGroseryModal}
                    onClose={this.hideCreateGroseryModal}
                    onShow={this.showCreateGroseryModal}
                    onSubmit={this.createGrosery}
                ></CreateGroseryModalComponent>
            </Container>
        );
    }
};

export default GroceryControl;