
import apperror from "../assets/App-Error.png";


const AppError = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[40vh] bg-[#F5F5F5] py-20 px-4">
            <img src={apperror} alt="App Error" className="w-full max-w-sm h-auto object-contain" />
        </div>
    );
};

export default AppError;