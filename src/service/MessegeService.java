package service;

import db.Messegedb;
import models.MessegeModel;

public class MessegeService {
    private Messegedb messegedb;
    public void getSentMessege(String mail)
    {
      messegedb.getSentMessege(mail);
    }
    public void getSendMessege(String mail)
    {
      messegedb.getSendMessege(mail);
    }
    public void addMessege(MessegeModel messege)
    {
      messegedb.addMessege(messege);
    }
    public void deleteMessege(int id)
    {
     messegedb.deleteMessege(id);
    }
}
