json.array! @guests.where(age: (40..50)) do |guest|
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
end
