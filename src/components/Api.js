export async function getData(name) {
    try{
        const res = await fetch(`https://randomuser.me/api?results=50&name=${name}`)
        const response = await res.json()
        return response.results;
    }catch(error){
        console.error(error);
        return [];
    }
}