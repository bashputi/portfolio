

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="text-center bg-[#915] text-white py-2">
            Developed by Rime Islam Rimu &copy; {currentYear}
        </div>
    );
};

export default Footer;