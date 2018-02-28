json.array! @parties do |party|
  json.name party.name
  json.location party.location
  json.guests do
    json.array! party.guests.pluck(:name)
  end
end
