const Footer = () => {
    return (
        <footer className='site-footer bg-dark text-white text-center py-4 fixed-bottom'>
            <div className='container'>
                <span>
                    All right reserved &copy; Copyright{" "}
                    {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
};

export default Footer;
