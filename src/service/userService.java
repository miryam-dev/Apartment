package service;

import db.Userdb;
import models.UserModel;

public class userService {
    private Userdb userdb;

    public void addUser(UserModel user)
    {
        userdb.addUser(user);
    }
    public void update(UserModel userModel)
    {
        userdb.update(userModel);
    }
    public void delete(String mail)
    {
      userdb.delete(mail);
    }
    public void getUserByMail(String mail)
    {
      userdb.getUserByMail(mail);
    }
    public void getAllUser()
    {
      userdb.getAllUser();
    }
}
