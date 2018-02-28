json.extract! @party, :name, :location

json.guests @party.guests.map do |guest|
  json.name guest.name
  json.gifts guest.gifts.map do |gift|
    json.title gift.title
    json.description gift.description
  end
end
