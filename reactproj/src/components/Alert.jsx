const Alert = (props) => {
  return <div className="alert alert-primary">
    {props.children}
  </div>;
};

export default Alert;
