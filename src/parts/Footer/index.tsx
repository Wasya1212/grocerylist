import React, { Component } from 'react';

export interface FooterPageProps {

}

export interface FooterPageState {

}

export const FooterComponent = () => (
    <footer className="bottom-footer">
        <div className="copyright">Copyright © 2020 Wasya1212 - All rights reserved</div>
    </footer>
);

export class Footer extends Component<FooterPageProps, FooterPageState>{
    constructor(props: FooterPageProps) {
        super(props);
    }
    
    render() {
        return (
            <FooterComponent></FooterComponent>
        );
    }
}

export default Footer;