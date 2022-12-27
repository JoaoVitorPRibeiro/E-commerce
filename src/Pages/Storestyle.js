import styled, { css } from "styled-components";

export const HeaderArea = styled.div`
display: flex;
gap: 5px;
background-color: red;
justify-content: center;


h1 {
    color: white;
    margin-left: 0px;
}

input {
    height: 40px;
    width: 1000px;
    margin-top: 30px;
    align-items: center;
}

button {
    font-size: 25px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
}
img {
    height: 100px;
    width: 150px;
    background-color: transparent;
    margin-right: 80px;
}
`
export const LinksArea = styled.div`
ul { 
    list-style: none;
    display: flex;
    gap: 30px;
    margin-bottom: 25px;
}

`
export const ProductArea = styled.div`
display: flex;
gap: 50px;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-bottom: 75px;

div {
    height: 320px;
    width: 250px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
}
div {
    height: 320px;
    width: 230px;
    border: 1px solid rgb(194,193,193);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    button {
        font-size: 25px;
        background-color: transparent;
        border: none;
        color: red;
    }
}




`