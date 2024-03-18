package models;

import java.util.ArrayList;

public class UserModel {
    String FirstName;
    String LastName;
    String mail;
    String phon;
    String password;
    ArrayList<MessegeModel> messeges;

    public UserModel(String firstName, String lastName, String mail, String phon, String password) {
        FirstName = firstName;
        LastName = lastName;
        this.mail = mail;
        this.phon = phon;
        this.password = password;
        messeges=new ArrayList<MessegeModel>();
    }

    public String getFirstName() {
        return FirstName;
    }

    public String getLastName() {
        return LastName;
    }

    public String getMail() {
        return mail;
    }

    public String getPhon() {
        return phon;
    }

    public String getPassword() {
        return password;
    }

    public ArrayList<MessegeModel> getMesseges() {
        return messeges;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setPhon(String phon) {
        this.phon = phon;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setMesseges(ArrayList<MessegeModel> messeges) {
        this.messeges = messeges;
    }


}
