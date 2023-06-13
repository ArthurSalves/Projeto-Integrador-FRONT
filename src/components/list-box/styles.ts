import styled from 'styled-components'

export const UlStyled = styled.ul`
    color: #A1B5D8;
    font-size: 16px;
    font-weight: 500;
    font-weight: 600;
    max-height: 70%;
    overflow: scroll;
`

export const LiStyled = styled.li`
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    :nth-child(even) {
        color: #738290;
    }
  
    .checkbox-wrapper-7 .tgl {
      display: none;
    }
    .checkbox-wrapper-7 .tgl,
    .checkbox-wrapper-7 .tgl:after,
    .checkbox-wrapper-7 .tgl:before,
    .checkbox-wrapper-7 .tgl *,
    .checkbox-wrapper-7 .tgl *:after,
    .checkbox-wrapper-7 .tgl *:before,
    .checkbox-wrapper-7 .tgl + .tgl-btn {
      box-sizing: border-box;
    }
    .checkbox-wrapper-7 .tgl::-moz-selection,
    .checkbox-wrapper-7 .tgl:after::-moz-selection,
    .checkbox-wrapper-7 .tgl:before::-moz-selection,
    .checkbox-wrapper-7 .tgl *::-moz-selection,
    .checkbox-wrapper-7 .tgl *:after::-moz-selection,
    .checkbox-wrapper-7 .tgl *:before::-moz-selection,
    .checkbox-wrapper-7 .tgl + .tgl-btn::-moz-selection,
    .checkbox-wrapper-7 .tgl::selection,
    .checkbox-wrapper-7 .tgl:after::selection,
    .checkbox-wrapper-7 .tgl:before::selection,
    .checkbox-wrapper-7 .tgl *::selection,
    .checkbox-wrapper-7 .tgl *:after::selection,
    .checkbox-wrapper-7 .tgl *:before::selection,
    .checkbox-wrapper-7 .tgl + .tgl-btn::selection {
      background: none;
    }
    .checkbox-wrapper-7 .tgl + .tgl-btn {
      outline: 0;
      display: block;
      width: 35px;
      height: 20px;
      position: relative;
      right: 20px;
      cursor: pointer;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
    }
    .checkbox-wrapper-7 .tgl + .tgl-btn:after,
    .checkbox-wrapper-7 .tgl + .tgl-btn:before {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
    }
    .checkbox-wrapper-7 .tgl + .tgl-btn:after {
      left: 0;
    }
    .checkbox-wrapper-7 .tgl + .tgl-btn:before {
      display: none;
    }
    .checkbox-wrapper-7 .tgl:checked + .tgl-btn:after {
      left: 50%;
    }
  
    .checkbox-wrapper-7 .tgl-ios + .tgl-btn {
      background: #fbfbfb;
      border-radius: 1em;
      padding: 2px;
      transition: all 0.4s ease;
      border: 1px solid #e8eae9;
    }
    .checkbox-wrapper-7 .tgl-ios + .tgl-btn:after {
      border-radius: 2em;
      background: #fbfbfb;
      transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
    }
    .checkbox-wrapper-7 .tgl-ios + .tgl-btn:hover:after {
      will-change: padding;
    }
    .checkbox-wrapper-7 .tgl-ios + .tgl-btn:active {
      box-shadow: inset 0 0 0 2em #e8eae9;
    }
    .checkbox-wrapper-7 .tgl-ios + .tgl-btn:active:after {
      padding-right: 0.8em;
    }
    .checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn {
      background: #A1B5D8;
    }
    .checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn:active {
      box-shadow: none;
    }
    .checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn:active:after {
      margin-left: -0.8em;
    }

`

