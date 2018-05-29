import React from 'react'
export default (phone, symbol) => {
  return (<div>
          {phone.substr(0, 3)}
          <span class='mask'>{symbol}</span>
          {phone.substr(7, 11)}
    </div> );
}