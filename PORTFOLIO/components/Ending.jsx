
import TwinkleBG from "./Twinkle_BG"
import ConnectCard from "./ConnectCard"

function Ending() {
    return (
        <>  
            {/* <TwinkleBG className="z-0 absolute bottom-0 right-0" /> */}
            <div className="h-screen">
                <h1 className="text-8xl text-center pt-50 font-bold p-10">
                    Feel Free to <span className="text-red-500">Connect</span> 
                </h1>
                <div className="h-1/2 flex flex-row justify-center">
                    <ConnectCard/>
                    <ConnectCard/>
                    <ConnectCard/>
                </div>
            </div>
        </>
    )
}


export default Ending