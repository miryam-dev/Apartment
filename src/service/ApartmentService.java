package service;

import db.Apartmentdb;
import models.ApartmentModel;

public class ApartmentService {
    private Apartmentdb apartmentdb;
    public void addApartment(ApartmentModel apartmentModel)
    {
     apartmentdb.addApartment(apartmentModel);
    }
    public void updateApartment(ApartmentModel apartmentModel)
    {
      apartmentdb.updateApartment(apartmentModel);
    }
    public void deleteApartment(String mail)
    {
      apartmentdb.deleteApartment(mail);
    }
    public void getAllApartment()
    {

    }
    public void getApetmentByUser()
    {

    }
}
