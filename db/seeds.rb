3.times do |i|
  Book.create!(title: "本　#{i + 1}")
end
