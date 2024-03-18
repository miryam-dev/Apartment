package models;

import java.util.Date;

enum apartmentType{HousingUnit, Apartment, Duplex, Cottage, Warehouse}
public class ApartmentModel {
    String mail;
    String neighborhood;
    String street;
    int numBuild;
    int numApartment;
    double numRooms;
    double floor;
    apartmentType type;
    double meters;
    int AirDirections;
    Boolean porch;
    Boolean Elevator;
    Boolean yard;
    Boolean furniture;
    Boolean solarHeaters;
    Boolean sukkah;
    Boolean airConditioner;

    Date enterDate;
    Double price;
    Boolean flexiblePrice;
    String Description;
    int StartHour;
    int endHour;
    Boolean takanon;

    public ApartmentModel(String neighborhood, String street, int numBuild, int numApartment, double numRooms,
                          double floor, apartmentType type, double meters, int airDirections,
                          Boolean porch, Boolean elevator, Boolean yard, Boolean furniture, Boolean solarHeaters,
                          Boolean sukkah, Boolean airConditioner, Date enterDate, Double price, Boolean flexiblePrice,
                          String description, int startHour, int endHour, Boolean takanon, String mail) {
        this.neighborhood = neighborhood;
        this.street = street;
        this.numBuild = numBuild;
        this.numApartment = numApartment;
        this.numRooms = numRooms;
        this.floor = floor;
        this.type = type;
        this.meters = meters;
        AirDirections = airDirections;
        this.porch = porch;
        Elevator = elevator;
        this.yard = yard;
        this.furniture = furniture;
        this.solarHeaters = solarHeaters;
        this.sukkah = sukkah;
        this.airConditioner = airConditioner;
        this.enterDate = enterDate;
        this.price = price;
        this.flexiblePrice = flexiblePrice;
        Description = description;
        StartHour = startHour;
        this.endHour = endHour;
        this.takanon = takanon;
        this.mail=mail;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public String getMail() {
        return mail;
    }

    public String getStreet() {
        return street;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public int getNumBuild() {
        return numBuild;
    }

    public int getNumApartment() {
        return numApartment;
    }

    public double getNumRooms() {
        return numRooms;
    }

    public double getFloor() {
        return floor;
    }

    public apartmentType getType() {
        return type;
    }

    public double getMeters() {
        return meters;
    }

    public int getAirDirections() {
        return AirDirections;
    }

    public Boolean getPorch() {
        return porch;
    }

    public Boolean getElevator() {
        return Elevator;
    }

    public Boolean getYard() {
        return yard;
    }

    public Boolean getFurniture() {
        return furniture;
    }

    public Boolean getSolarHeaters() {
        return solarHeaters;
    }

    public Boolean getSukkah() {
        return sukkah;
    }

    public Boolean getAirConditioner() {
        return airConditioner;
    }

    public Date getEnterDate() {
        return enterDate;
    }

    public Double getPrice() {
        return price;
    }

    public Boolean getFlexiblePrice() {
        return flexiblePrice;
    }

    public String getDescription() {
        return Description;
    }

    public int getStartHour() {
        return StartHour;
    }

    public int getEndHour() {
        return endHour;
    }

    public Boolean getTakanon() {
        return takanon;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setNumBuild(int numBuild) {
        this.numBuild = numBuild;
    }

    public void setNumApartment(int numApartment) {
        this.numApartment = numApartment;
    }

    public void setNumRooms(double numRooms) {
        this.numRooms = numRooms;
    }

    public void setFloor(double floor) {
        this.floor = floor;
    }

    public void setType(apartmentType type) {
        this.type = type;
    }

    public void setMeters(double meters) {
        this.meters = meters;
    }

    public void setAirDirections(int airDirections) {
        AirDirections = airDirections;
    }

    public void setPorch(Boolean porch) {
        this.porch = porch;
    }

    public void setElevator(Boolean elevator) {
        Elevator = elevator;
    }

    public void setYard(Boolean yard) {
        this.yard = yard;
    }

    public void setFurniture(Boolean furniture) {
        this.furniture = furniture;
    }

    public void setSolarHeaters(Boolean solarHeaters) {
        this.solarHeaters = solarHeaters;
    }

    public void setSukkah(Boolean sukkah) {
        this.sukkah = sukkah;
    }

    public void setAirConditioner(Boolean airConditioner) {
        this.airConditioner = airConditioner;
    }

    public void setEnterDate(Date enterDate) {
        this.enterDate = enterDate;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setFlexiblePrice(Boolean flexiblePrice) {
        this.flexiblePrice = flexiblePrice;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public void setStartHour(int startHour) {
        StartHour = startHour;
    }

    public void setEndHour(int endHour) {
        this.endHour = endHour;
    }

    public void setTakanon(Boolean takanon) {
        this.takanon = takanon;
    }
}
