import { css } from 'lit';

export const styleCustom = css`
.blr-text-input {
    font-family: inherit;
    width: 20%;
    border: 0;
    border-bottom: 1px solid #9b9b9b;
    outline: 0;
    font-size: 1.0rem;
    color: #fffff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
}
    
.blr-text-input:focus {
  padding-bottom: 6px;  
  border-width: 2px;
  border-image: linear-gradient(to right, #11998e,#38ef7d);
  border-image-slice: 1;
}

/* reset input */

.blr-text-input{
  &:required,&:invalid { box-shadow:none; }
}

`;
