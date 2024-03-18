import pyodbc
import pyodbc

drivers = pyodbc.drivers()

print(drivers)

# print('pp')
# # Specifying the ODBC driver, server name, database, etc. directly
cnxn = pyodbc.connect('DRIVER={DESKTOP-MJT07VU\\SQLEXPRESS01};SERVER=localhost;DATABASE=newDB;')

# # Using a DSN, but providing a password as well
# cnxn = pyodbc.connect('DSN=test;PWD=password')
#
# # Create a cursor from the connection
cursor = cnxn.cursor()
from sqlalchemy import create_engine;


import pyodbc

# Assuming you've created a DSN named 'your_dsn_name'
cnxn = pyodbc.connect('DSN=your_dsn_name')  # Use DSN for easier connection management

# Or, if you don't have a DSN:
cnxn = pyodbc.connect('DRIVER={SQL Server Native Client 11.0};SERVER=localhost;DATABASE=newDB;Trusted_Connection=True')  # Adjust driver name as needed

cursor = cnxn.cursor()

# Your database operations here using the cursor

# Close the connection
cursor.close()
cnxn.close()




