from enum import Enum

class ApartmentType(Enum):
  HousingUnit = "HousingUnit"
  Apartment = "Apartment"
  Duplex = "Duplex"
  Cottage = "Cottage"
  Warehouse = "Warehouse"

class ApartmentModel:
  def __init__(self, neighborhood, street, num_build, num_apartment, num_rooms,
               floor, apartmentType, meters, air_directions, porch, elevator, yard, furniture,
               solar_heaters, sukkah, air_conditioner, enter_date, price, flexible_price,
               description, start_hour, end_hour, takanon, mail):
    self.neighborhood = neighborhood
    self.street = street
    self.num_build = num_build
    self.num_apartment = num_apartment
    self.num_rooms = num_rooms
    self.floor = floor
    self.apartmentType = apartmentType
    self.meters = meters
    self.air_directions = air_directions
    self.porch = porch
    self.elevator = elevator
    self.yard = yard
    self.furniture = furniture
    self.solar_heaters = solar_heaters
    self.sukkah = sukkah
    self.air_conditioner = air_conditioner
    self.enter_date = enter_date
    self.price = price
    self.flexible_price = flexible_price
    self.description = description
    self.start_hour = start_hour
    self.end_hour = end_hour
    self.takanon = takanon
    self.mail = mail


