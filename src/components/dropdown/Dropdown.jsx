import React from 'react'
import styled from 'styled-components';

function Dropdown(props, ref) {
  const {children} = props;
  return (
    <Wrapper ref={ref} className='dropdown'>
      {children}
    </Wrapper>
  )
}

export default React.forwardRef(Dropdown);

const Wrapper = styled.div`
  position: absolute;
  width: 200px;
  left: 0;
  transform: translateX(-50%);
  margin-top: .5rem;
  background-color: var(--background-primary);
  
  border: 1px solid var(--gray);
  border-radius: var(--border);

  box-shadow: 3px 4px 8px -7px rgba(0, 0, 0, .7);

  z-index: 10;
`;