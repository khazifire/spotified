import { Waveform } from '@uiball/loaders'
const Loading = () => {
    return ( 
        <div className='ml-40 mt-56 md:ml-96'>
            <Waveform 
                size={80}
                lineWeight={5}
                speed={1.2} 
                color="white" 
            />
        </div>
     );
}
 
export default Loading;