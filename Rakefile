require 'rake'
require "sinatra/activerecord/rake"
require ::File.expand_path('../config/environment', __FILE__)

Rake::Task["db:create"].clear
Rake::Task["db:drop"].clear

# NOTE: Assumes SQLite3 DB
desc "create the database"
task "db:create" do
  touch 'db/db.sqlite3'
end

desc "populate the database"
task "db:populate" do
  b_wilmore = Naut.find_or_create_by(
    first_name: "Barry",
    last_name: "Wilmore",
    selection_year: 2000
  )
  t_kopra = Naut.find_or_create_by(
    first_name: "Timothy",
    last_name: "Kopra",
    selection_year: 2000
  )
  m_barratt = Naut.find_or_create_by(
    first_name: "Michael",
    last_name: "Barratt",
    selection_year: 2000
  )
  s_kelly = Naut.find_or_create_by(
    first_name: "Scott",
    last_name: "Kelly",
    selection_year: 1996
  )

  b_wilmore.

end

desc "drop the database"
task "db:drop" do
  rm_f 'db/db.sqlite3'
end

desc 'Retrieves the current schema version number'
task "db:version" do
  puts "Current version: #{ActiveRecord::Migrator.current_version}"
end
