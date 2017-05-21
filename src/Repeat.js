import React from 'react';
import PropTypes from 'prop-types'; 

function Repeat(props) {
  const { times, order, wrapper, ...rest } = props;
  const Wrapper = wrapper;

  let items = [];
  
  if (order === 'asc') {
    for (let i = 0; i < times; i++) {
      items.push(props.children(i));
    }
  }

  if (order === 'desc') { 
    for (let i = times - 1; i >= 0; i--) {
      items.push(props.children(i));
    }
  }

  return <Wrapper {...rest}>{items}</Wrapper>;
}

Repeat.propTypes = {
  times   : PropTypes.number.isRequired,
  order   : PropTypes.oneOf(['asc', 'desc']).isRequired,
  wrapper : PropTypes.string.isRequired
};

Repeat.defaultProps = {
  order   : 'asc',
  wrapper : 'div'
};

export default Repeat;