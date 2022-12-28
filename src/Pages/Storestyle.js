import styled from "styled-components";

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
    cursor:pointer;
}
`
export const BannerArea = styled.div`
img {
    height:200px;
    width: 1450px;
    border-radius: 40px;
    cursor:pointer;
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
export const CartProductArea = styled.div`
    display: column;
    justify-content: space-between;


div {
    height: 150px;
    width: 1400px;
    border: 1px solid rgb(194,193,193);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;
    margin-left: 25px;

    button {
        font-size: 25px;
        background-color: transparent;
        border: none;
        color: red;
    }
}
`
export const PurchaseSummary = styled.div`
    display: flex;
    justify-content: center;


div {
    height: 275px;
    width: 300px;
    border: 1px solid rgb(194,193,193);
    display: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;

    button {
        height: 50px;
        width: 150px;
        font-size: 15px;
        background-color: red;
        border: none;
        border-radius: 10px;
        color: white;
        cursor: pointer;
    }
}
`
export const FooterArea = styled.div`
display: flex;
gap: 5px;
background-color: rgb(190, 190, 190);
justify-content: center;

img {
    height: 100px;
    width: 150px;
    background-color: transparent;
    margin-right: 80px;
}
`