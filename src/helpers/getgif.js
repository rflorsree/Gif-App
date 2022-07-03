export const getgif= async(category) => {
    const url=`https://api.giphy.com/v1/gifs/search?api_key=sdlUGbbn7pJiUay86opO6M0P9iUwwSNz&q=${ category }&limit=30`
    const resp = await fetch( url );
    const {data}=await resp.json();
    const gifs=data.map(img=>({

        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }))

    return gifs;
}    