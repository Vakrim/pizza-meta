Dir['src/**/*.jsx'].each do |filename|
  f = File.open(filename, "r+")
  lines = f.readlines
  f.close

  lines = ["/* @flow */\n"] + lines

  output = File.new(filename, "w")
  lines.each { |line| output.write line }
  output.close
end
