const Button = ({ color, className, icon, text, ...rest }) => {
    return (
        <button className={`btn btn-${color} ${className}`} {...rest}>
            {icon && (
                <img className='button-icon' src={icon} alt='btn icon img' />
            )}{" "}
            {text}
        </button>
    );
};

export default Button;
