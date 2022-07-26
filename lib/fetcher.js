import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())


//Get a list of the playlists owned or followed by a Spotify user. 
export const usePlaylist =() =>{
    const { data, error } = useSWR(`/api/playlists`, fetcher)
    return {
        playlists: data?.items,
        isLoading: !error && !data,
        isError: error
    }
}
//Get public profile information about a Spotify user
export const useUser =() =>{
    const { data, error } = useSWR(`/api/userInfo`, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}
//Get the current user's top tracks based on calculated affinity
export const useTopTracks =() =>{
    const { data, error } = useSWR(`/api/topTracks`, fetcher)
    return {
        tracks: data?.items,
        isLoading: !error && !data,
        isError: error
    }
}
//get the user  top tracks (about 4 weeks)
export const useTopTracksMid =() =>{
    const { data, error } = useSWR(`/api/topTracksMid`, fetcher)
    return {
        trackMid: data?.items,
        isLoading: !error && !data,
        isError: error
    }
}
//get the user  top tracks (all time)
export const useTopTracksLong =() =>{
    const { data, error } = useSWR(`/api/topTracksLong`, fetcher)
    return {
        tracksLong: data?.items,
        isLoading: !error && !data,
        isError: error
    }
}

//Get the current user's top artists based on calculated affinity
export const useTopArtists =() =>{
    const { data, error } = useSWR(`/api/topArtists`, fetcher)
    return {
        artists: data?.items,
        isLoading: !error && !data,
        isError: error
    }
}
//get the user top artists (about 4 weeks)
export const useTopArtistssMid =() =>{
    const { data, error } = useSWR(`/api/topArtistsMid`, fetcher)
    return {
        artistsMid: data?.items,
        isLoading: !error && !data,
        isError: error
    }
}
//get the user  top artists (all time)
export const useTopArtistsLong =() =>{
    const { data, error } = useSWR(`/api/topArtistsLong`, fetcher)
    return {
        artistsLong: data?.items,
        isLoading: !error && !data,
        isError: error
    }
}
