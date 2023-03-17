import React from 'react';
import './Button.scss';

type Props = {
    className?: string,
    value: string,
    icon?: string,
}

const Button = ({className, value, icon}:Props) => {
  return (
    <button className={`button ${className}`} ><img src={icon} alt="icon" className="button__icon"/>{value}</button>
  )
}

export default Button