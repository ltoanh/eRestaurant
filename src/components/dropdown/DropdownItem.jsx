import React from 'react'
import styled from 'styled-components';

function DropdownItem(props) {
  const {children, onClick} = props;
  return (
    <Wrapper onClick={onClick}>{children}</Wrapper>
  )
}

export default DropdownItem

const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: .5rem 1rem;
  cursor: pointer;

  &:hover{
    background-color: var(--secondary);
  }

  &:first-child:hover{
    border-radius: var(--border) var(--border) 0 0;
  }
  &:last-child:hover{
    border-radius: 0 0 var(--border) var(--border);
  }

  &:not(:last-child){
    border-bottom: 1px solid var(--border-color);
  }
`