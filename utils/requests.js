const API_KEY = process.env.API_KEY;

export default{
    fetchTrending:{
        title:'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchToprated:{
        title:'Top Rated',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchAction:{
        title:'Action',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchCommedy:{
        title:'Commedy',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchHorror:{
        title:'Horror',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTrending:{
        title:'Romance',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchMystery:{
        title:'Mystery',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchScifi:{
        title:'Sci-Fi',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchWestern:{
        title:'Western',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
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