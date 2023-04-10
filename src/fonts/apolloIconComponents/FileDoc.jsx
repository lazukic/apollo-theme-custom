/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgFileDoc(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M17.5 6h3.9a.25.25 0 00.177-.427L16.427.425A.25.25 0 0016 .6v3.9A1.5 1.5 0 0017.5 6z" />
        <path d="M21.75 7a.25.25 0 01.25.248V22a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h10.75a.25.25 0 01.25.248V4.5A2.5 2.5 0 0017.5 7h4.25zM4.867 17h1.841c1.463 0 2.478-.924 2.478-2.331s-1.015-2.338-2.478-2.338H4.867V17zm.994-.875v-2.919h.847c.959 0 1.463.637 1.463 1.463 0 .791-.539 1.456-1.463 1.456h-.847zm3.808-1.456c0 1.407 1.029 2.415 2.436 2.415 1.414 0 2.443-1.008 2.443-2.415s-1.029-2.415-2.443-2.415c-1.407 0-2.436 1.008-2.436 2.415zm3.857 0c0 .868-.56 1.533-1.421 1.533s-1.414-.665-1.414-1.533c0-.875.553-1.533 1.414-1.533.861 0 1.421.658 1.421 1.533zm3.948 2.415c1.064 0 1.652-.567 1.988-1.148l-.854-.413a1.266 1.266 0 01-1.134.679c-.812 0-1.428-.651-1.428-1.533 0-.882.616-1.533 1.428-1.533.518 0 .938.301 1.134.679l.854-.42c-.329-.581-.924-1.141-1.988-1.141-1.365 0-2.45.98-2.45 2.415s1.085 2.415 2.45 2.415z" />
      </g>
    </svg>
  );
}

export default SvgFileDoc;
