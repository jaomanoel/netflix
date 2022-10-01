const API_KEY = '838f864ce8700a52f434071359c44859';
const API_BASE = 'https://api.themoviedb.org/3';

const categorias = [
    {
        name: "originals",
        title: "Originais da netflix",
        path: `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
    },
    {
        name: "trending",
        title: "Recomendados para Você",
        path: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
    },
    {
        name: "toprated",
        title: "Em Alta",
        path: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
    },
    {
        name: "action",
        title: "Ação",
        path: `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
    },
    {
        name: "comedy",
        title: "Comédia",
        path: `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
    },
    {
        name: "horror",
        title: "Terror",
        path: `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
    },
    {
        name: "romance",
        title: "Romance",
        path: `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
    },
    {
        name: "documentary",
        title: "Documentários",
        path: `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
    },
]

export const getMovie = async (path) => {
    try{
        let url = `${API_BASE}${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch(err){
        console.log(err);
    }
}

export default categorias