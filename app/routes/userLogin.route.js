User.findOne({'email':email, 'password': password}, function(err, user) {

    if (err) {

        console.log('Login error');
        return done(err);
    }

    //if user found.
    if (user.length!=0) {
      if(user[0].email){
        console.log('User  exists!');                         
         }else{
            console.log('User does not exist, try again or please sign up: ');      
         }                                    
         var err = new Error();
        err.status = 310;
        return done(err);

    }

});