const Button = (props) => {
  const { children, type = "info" } = props;

  return (
    <button className={`btn btn-${type} shadow`} {...props}>
      {children}
    </button>
  );
};

export default Button;
