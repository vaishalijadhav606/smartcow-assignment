import React from 'react';
import styled from 'styled-components';
import './style.css';

import Menu from '../icons/menu.svg';
import Home from '../icons/home.svg';

import {
    Link
  } from "react-router-dom";

const color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']

const Header = styled.div`
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 14px #0000001A;
    z-index: 1;
    background-color: #fff;
`;

const Sidebar = styled.div((props)=>({
    position: 'fixed',
    left: 0,
    width: props.collapsed ? '50px' : '200px',
    height: 'calc(100vh - 50px)',
    backgroundColor: '#001529',
    transition: 'background .3s,width .3s cubic-bezier(.2,0,0,1) 0s',

    '@media(max-width: 768px)': {
        display: 'none'
    }
}));

const ListItem = styled.li`
    font-size: 18px;
    font-weight: 500;
    padding: 10px 20px;
    cursor: pointer;
    
    background-color: ${props => props.active ? '#1890ff' : 'transparent' };

    
    a {
        color: ${props => props.active ? '#fff' : '#ffffffa6' };
        text-decoration: none;
        &:hover {
            color: #fff;
        }  
    }
`;

const MenuIcon = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
    padding: 5px 8px;
    background-color: #000;
    border-radius: 50%;

    @media (max-width: 768px) { 
        display: none;
    }
`;

const Content = styled.div`
    margin-top: 50px;
    margin-left: ${props => props.collapsed ? '60px' : '210px' };
    padding-top: 10px;

    @media (max-width: 768px) { 
        margin-left: 5px;
        height: calc(100vh - 110px);
    }
`;

const Input = styled.input`
    border: 1px solid #ccc;
    width: 200px;
    padding: 5px;
    background-color: transparent;
    font-size: 14px;
    color: #000;
`;

const Card = styled.div`
    margin: 10px 10px 0 0;
    border-radius: 2px;
    border: 3px solid #000;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(3n) {
        border-color: ${props => props.color || 'red'};
    }
`;

const Button = styled.button`
    position: fixed;
    bottom: 0;
    left: 0;
    display: none;
    padding: 5px;
    background-color: #fff;
    width: 100%;
    border: 0;
    height: 50px;
    
    a {
        color: #fff;
        padding: 4px 20px;
        background-color: #1890ff;
        border: 1px solid #1890ff;
        border-radius: 5px;
        text-decoration: none;
        float: left;
        font-size: 20px;
    }    

    @media (max-width: 768px) { 
        display: block;
    }
`;

const size = {
    mobile: '768px',
}

const device = {
    mobile: `(min-width: ${size.mobile})`,
};

function Test1() {

    const [collapsed, setCollapsed] = React.useState(false);
    const [name, setName] = React.useState("");
    const nameText = React.useRef();

    const onclick = () => {
        if(!collapsed){
            setCollapsed(true);
        }else {
            setCollapsed(false);
        }
    }

    const renderCharacter = (obj, index) => {
        const random = Math.floor(Math.random() * (color.length - 1)); 
        if(obj == " "){
            return null;
        }else {
            return <Card key={index} color={color[random]}>{obj}</Card>
        }
    }

  return (
    <div>
        <Header>
            <div>Top Bar</div>
            <MenuIcon onClick={onclick }>
                <img src={Menu} width="14"/>
            </MenuIcon>
        </Header>
        <Sidebar collapsed={collapsed}>
            <ul className="list-style-none mb-0 pl-0">
                <ListItem active="true">
                        <span className="bg-img d-inline-block" style={{backgroundImage: `url(${Home})`, width: '15px', height: '15px'}}></span>
                    <Link to="/"> {collapsed ? '' : 'Test 1'}
                    </Link>
                </ListItem>
                <ListItem><span className="bg-img d-inline-block" style={{backgroundImage: `url(${Home})`, width: '15px', height: '15px'}}></span> <Link to="/test2">{collapsed ? '': 'Test 2'}</Link></ListItem>
            </ul>
        </Sidebar>
        <Content collapsed={collapsed}>
            <Input type="text" ref={nameText} onChange={(e) => setName(e.target.value)}/>

            <div style={{display: 'flex', flexWrap: 'wrap', paddingBottom: device.mobile ? '50px' : 0}}>
                {Array.from(name).map(renderCharacter)}
            </div>


        </Content>
        <Button>
            <Link to="/test2">Click to Test 2</Link>
        </Button>
    </div>
  );
}

export default Test1;
