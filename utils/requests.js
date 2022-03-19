const API_KEY = process.env.API_KEY;

export default{
    fetchTrending:{
        title:'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchToprated:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchAction:{
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_geners=28`
    },
    fetchCommedy:{
        title:'Commedy',
        url:`/discover/movie?api_key=${API_KEY}&with_geners=35`
    },
    fetchHorror:{
        title:'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_geners=27`
    },
    fetchRomance:{
        title:'Romance',
        url:`/discover/movie?api_key=${API_KEY}&with_geners=10749`
    },
    fetchMystery:{
        title:'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&width_genres=9648`
    },
    fetchScifi:{
        title:'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&width_genres=878`
    },
    fetchWestern:{
        title:'Western',
        url: `/discover/movie?api_key=${API_KEY}&width_genres=37`
    },
    fetchAnimation:{
        title:'Animation',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTvMovie:{
        title:'TV Movie',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    }
}



// fetchTrending: {
//     title:'Trending',
//     url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
// },
// fetchNetflixOriginals: {
//   title:'Netflix',
//   url:`/discover/tv?api_key=${API_KEY}&with_networks=213`
// },
// fetchTopRated: {
//   title:'Top Rated',
//   url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
// },
// fetchTopActionMovies: {
//   title:'Action',
//   url:`/discover/movie?api_key=${API_KEY}&with_geners=28`
// } ,
// fetchTopComedyMovies: {
//   title:'Comedy',
//   url:`/discover/movie?api_key=${API_KEY}&with_geners=35`
// },
// fetchTopHorrorMovies: {
//   title:'Horror',
//   url:`/discover/movie?api_key=${API_KEY}&with_geners=27`
// },
// fetchTopRomanceMovies: {
// title:'Romance',  
// url:`/discover/movie?api_key=${API_KEY}&with_geners=10749`
// },
// fetchTopDocumentaries: {
// title:'Documentaries',  
// url:`/discover/movie?api_key=${API_KEY}&with_geners=99`
// },