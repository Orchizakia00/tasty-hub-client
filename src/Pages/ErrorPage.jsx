import errorPage from '../assets/404_page_cover.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errorPage} className='w-[800px] my-auto min-h-screen' alt="" />
        </div>
    );
};

export default ErrorPage;