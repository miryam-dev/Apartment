class MessegeModel:
    def __init__(self, sender, messege_body, receiver_mail, new_messege, Messegeid):
        self.sender_mail = sender
        self.messege_body = messege_body
        self.getter_mail = receiver_mail  # Renamed for clarity
        self.new_messege = new_messege
        self.Messegeid = Messegeid