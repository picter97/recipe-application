
export const Auth = () => {
    return (
    <div className="auth">
        <login/>
        <Register/>
    </div>

    );
};


const Login = () => {
    return <div></div>
};


const Register = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


return
 <div className="auth-container">
<form>
<h2>Register</h2>
<div className="form-group">
<label htmlfor="username">Username:</label>
<input
type="text"
id="userrname"
value={username}
onChange={(event) => setUsername(event.target.value)}></input>
</div>
<div className="form-group">
<label htmlfor="password"> Password:</label>
<input
type="text"
id="password"
value={password}
onChange={(event) => setPassword(event.target.value)}></input>
</div>


<button type="submit"> Register</button>
</form>


</div>
};




const Form = ({username, setUsername, password, setPassword}) => {
return
}
 