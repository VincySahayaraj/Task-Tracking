const valid = (user) => {

    var styles = {
        color :'red',
            size : '20px',
            style:'italic',
            variant: 'small-caps'
      };

    let errors = {};

    if (!user.firstname) {
        errors.firstname = <p style={styles}>First Name is required</p>
    } else if (!/^[A-z][A-z]{3,23}$/.test(user.firstname)) {
        errors.firstname = <p style={styles}>Enter Valid Name</p>
        
    }

    if (!user.lastname) {
        errors.lastname = <p style={styles}>Last Name is required</p>
    } else if (!/^[A-z][A-z]{3,23}$/.test(user.lastname)) {
        errors.lastname = <p style={styles}>Enter Valid Name</p>
    }

    if (!user.email) {
        errors.email =<p style={styles}>Email is required</p>
    } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.email)) {
        errors.email = <p style={styles}>Enter valid Email</p>
    }
    if(!user.role){
        errors.role=<p style={styles}>Role is required</p>
    }else if(user.role===0){
        errors.role = <p style={styles}>Role is invalid</p> 
    }

    if (!user.password) {
        errors.password = <p style={styles}>Password is required</p>
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(user.password)) {
        errors.password = <p style={styles}>Must include Uppercase,Number,Special Character in your Password</p>
    }

    return errors;
}

export default valid;