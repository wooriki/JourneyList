import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import { SvgIconComponent } from "@mui/icons-material";
import HouseIcon from "@mui/icons-material/House";
import { styled } from "styled-components";
import Btn from "../Btn";

function Icon(props) {
    return <SvgIcon component={HouseIcon} inheritViewBox />;
}
const Header = () => {
    return (
        <HeaderTag>
            <h3>반갑습니다.</h3>
            <SubTag>
                <Link to="/">
                    <Btn>
                        <Icon />
                    </Btn>
                </Link>
            </SubTag>
        </HeaderTag>
    );
};

export default Header;

const HeaderTag = styled.div`
    width: 40%;
    margin: 0 auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
`;
const SubTag = styled.p`
    text-align: right;
`;
