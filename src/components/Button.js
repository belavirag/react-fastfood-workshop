const Button = (props) => {
  const { children } = props;

  return (
    <button className="btn btn-info shadow" {...props}>
      {children}
    </button>
  );
};

export default Button;
