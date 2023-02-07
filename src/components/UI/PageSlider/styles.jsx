import styled from 'styled-components';

export const SliderBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 90%;
  background-color: #BF9F9F;
  height: 15px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 12px;
`

export const Slider = styled.div`
  width: ${(props) => (1 / props.totalCount * 100) + '%'};
  height: 100%;
  font-family: Bangers;
  background-color: white;
  margin-left: ${(props) => (props.index / props.totalCount * 100) + '%'};
  border-radius: 12px;
  
  @keyframes slidein-middle-right {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slidein-end-right {
    from {
      transform: translateX(200%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slidein-middle-left {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slidein-end-left {
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(0%);
    }
  }

animation: 
    ${(props) => {
      if (props.index !== 0 && props.nextButtonClicked) {
        return 'slidein-middle-right 0.5s linear';
      }
      else if (props.nextButtonClicked) {
        return 'slidein-end-right 0.5s linear';
      }
      else if (props.index !== props.totalCount - 1 && props.prevButtonClicked) {
        return 'slidein-middle-left 0.5s linear';
      }
      else if (props.prevButtonClicked) {
        return 'slidein-end-left 0.5s linear';
      }
    }
  }; 
`