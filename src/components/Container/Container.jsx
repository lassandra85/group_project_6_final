import React from 'react';
import './Container.module.css';
import { Wrapper } from './Container.styled';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
