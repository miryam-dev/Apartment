package models;

public class MessegeModel {

        String senderMail;
        String messegeBody;
        String getterMail;
        int newMessege;
        int id;

        public MessegeModel(String sender, String messegeBody, String mail, int newMessege, int id) {
            this.senderMail = sender;
            this.messegeBody = messegeBody;
            this.getterMail=mail;
            this.newMessege=newMessege;
            this.id=id;
        }

        public String getSender() {
            return senderMail;
        }

        public String getMessegeBody() {
            return messegeBody;
        }

        public void setSender(String sender) {
            this.senderMail = sender;
        }

        public void setMessegeBody(String messegeBody) {
            this.messegeBody = messegeBody;
        }

    public String getMail() {
        return getterMail;
    }

    public void setMail(String mail) {
        this.getterMail = mail;
    }

    public int getNewMessege() {
        return newMessege;
    }

    public void setNewMessege(int newMessege) {
        this.newMessege = newMessege;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}


