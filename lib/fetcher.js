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
//Get the current user's top artists based on calculated affinity
export const useTopArtists =(tracks) =>{
    const { data, error } = useSWR(`/api/topArtists`, fetcher)
    return {
        artists: data?.items,
        isLoading: !error && !data,
        isError: error
    }
}
