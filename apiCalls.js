import { API_KEY } from '@env'

export async function gatherLatest() {
    const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`)
    if(!res.ok) {
        throw new Error(`${res.status}: Failed to fetch latest`)
    }
   
    return res.json()
} 