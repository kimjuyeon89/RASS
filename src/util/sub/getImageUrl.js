/* 
  No data image url 
  => https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-image-src
*/
export const getImageUrl = dir => {
    return new URL(dir, import.meta.url).href
}