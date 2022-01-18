import * as React from "react";
import {Link} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { getHomes } from "../routes/route";

import Example from "./sample";

function eachDropItem(val: {url: string, title: string}, i: number) {
    return <Dropdown.Item><Link to={val.url}>{val.title}</Link></Dropdown.Item>;
}

const HeaderPanel:React.FC = () => {
    let homes:any = getHomes();
    return (
        <div>
            <ul>
                <li>
                </li>
            </ul>
        </div>
    );
}

export default HeaderPanel;