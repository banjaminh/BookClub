export default async function gatherLatest(){
    // const apiKey = 'utMaUH9VH3AtPn6S8dJGDPp6DMkzi9qU';
    console.log("TEST")
    try{
    const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=utMaUH9VH3AtPn6S8dJGDPp6DMkzi9qU')
    console.log("RESPONSE IN API", response)
    if(response.ok){
        
        const data = await response.json();
        console.log("IN IF BLOCK", data)
        return data;
    }
    else{
        console.log("RESPONSE NOT OK")
    }
} catch(error){
    console.log("HIT CATCH BLOCK")
}
}