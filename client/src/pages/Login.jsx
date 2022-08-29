const Login = () => {
  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:3001/auth/github", "_self");
  };

  return (
    <div>
      <h2 onClick={google}>With Google</h2>
      <h2 onClick={github}>With Github</h2>
    </div>
  );
};

export default Login;
