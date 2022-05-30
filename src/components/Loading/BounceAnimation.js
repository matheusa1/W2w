import { keyframes } from "styled-components";

export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  25% {
    margin-bottom: 0.5rem;
  }

  50% { 
    margin-bottom: 1rem;
  }
  
  75% {
    margin-bottom: 0.5rem;
  }

  100% { 
    margin-bottom: 0;
  }
`