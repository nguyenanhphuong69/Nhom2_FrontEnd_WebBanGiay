import styled from "styled-components";
export const FeaturedInfo = styled.div`
  .featured {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .featuredItem {
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }

  .featuredTitle {
    font-size: 20px;
  }

  .featuredMoneyContainer {
    margin: 10px 0px;
    display: flex;
    align-items: center;
  }

  .featuredMoney {
    font-size: 30px;
    font-weight: 600;
  }

  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }

  .featuredIcon.negative {
    color: red;
  }

  .featuredSub {
    font-size: 15px;
    color: gray;
  }
`;
