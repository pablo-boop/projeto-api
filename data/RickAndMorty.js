import axios from "axios";
let URL_LINK = `https://rickandmortyapi.com/api/character?page=1`;

export const alterPage = (pageNum) => {
    console.log(pageNum);
    return URL_LINK = `https://rickandmortyapi.com/api/character?page=${pageNum}`;
}

const rickAndMorty = async () => {
    try {
        const answer = await axios.get(URL_LINK)
        return answer.results;
    } catch (error) {
        throw error
    }
}

export default rickAndMorty;