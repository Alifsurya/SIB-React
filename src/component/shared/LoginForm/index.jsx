const LoginForm = () => {
    const styles= {
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "320px",
            margin: "50px auto",
            padding: "24px",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa", // abu terang standar
            boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        },
        input:{
            padding:"12px",
            fontSize:"16px",
            border: "1px solid #ced4da", // abu standar bootstrap
            borderRadius: "6px",
            outline: "none",
            transition: "border-color 0.3s, box-shadow 0.3s",
        },
        button:{
            padding: "12px",
            backgroundColor: "#0d6efd", // biru bootstrap primary
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
        },
    };
    return(
        <form style={styles.form}>
            <input style={styles.input} type="text" placeholder="Username" />
            <input style={styles.input}  type="text" placeholder="Email" />
            <input style={styles.input}  type="password" placeholder="Password" />
            <button style={styles.button} >Login</button>
        </form>
    );
};

export default LoginForm;
