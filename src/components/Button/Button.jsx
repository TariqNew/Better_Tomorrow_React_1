const Button = ({ name, onClick }) => {
    return (
        <div className="flex justify-center items-center">
            <button
                onClick={onClick}
                className="px-10 py-1 mt-5 bg-transparent text-white rounded-2xl shadow-md hover:bg-green-900 border-1 border- transition duration-300 ease-in-out focus:outline-none focus:ring-2"
            >
                {name}
            </button>
        </div>
    );
};

export default Button;
