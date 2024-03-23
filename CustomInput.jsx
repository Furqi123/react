import { Row,Col,Input } from "antd";
import React from "react";


function CustomInput({placeholder,onChange}){
    return(

        <Row>
            <Col span={24}>
            <Input placeholder={placeholder} onChange={onChange}>
            </Input>
            </Col>
        </Row>
    )
}


export default CustomInput;

