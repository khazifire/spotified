import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const usePlaylist =() =>{
    const { data, error } = useSWR(`/api/playlists`, fetcher)
    return {
        playlists: data?.items,
        isLoading: !error && !data,
        isError: error
    }
}

export const useUser =() =>{
    const { data, error } = useSWR(`/api/userInfo`, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}

export const useTopTracks =() =>{
    const { data, error } = useSWR(`/api/topTracks`, fetcher)
    return {
        tracks: data,
        isLoading: !error && !data,
        isError: error
    }
}
export const useTopArtists =() =>{
    const { data, error } = useSWR(`/api/topArtists`, fetcher)
    return {
        artists: data,
        isLoading: !error && !data,
        isError: error
    }
}