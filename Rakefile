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
    country: "USA",
    selection_year: 2000
  )
  t_kopra = Naut.find_or_create_by(
    first_name: "Timothy",
    last_name: "Kopra",
    country: "USA",
    selection_year: 2000
  )
  m_barratt = Naut.find_or_create_by(
    first_name: "Michael",
    last_name: "Barratt",
    country: "USA",
    selection_year: 2000
  )
  s_kelly = Naut.find_or_create_by(
    first_name: "Scott",
    last_name: "Kelly",
    country: "USA",
    selection_year: 1996
  )

  b_wilmore.degrees.find_or_create_by(
    name: "Bachelor of Science",
    field: "Electrical Engineering",
    university: "Tennessee Technological University"
  )
  b_wilmore.degrees.find_or_create_by(
    name: "Master of Science",
    field: "Electrical Engineering",
    university: "Tennessee Technological University"
  )
  b_wilmore.degrees.find_or_create_by(
    name: "Master of Science",
    field: "Aviation Systems",
    university: "University of Tennessee"
  )

  t_kopra.degrees.find_or_create_by(
    name: "Bachelor of Science",
    university: "United States Military Academy"
  )

  t_kopra.degrees.find_or_create_by(
    name: "Master of Science",
    field: "Aerospace Engineering",
    university: "Georgia Institute of Technology"
  )
  
  t_kopra.degrees.find_or_create_by(
    name: "Master of Strategic Studies",
    university: "U.S. Army War College"
  )
  
  t_kopra.degrees.find_or_create_by(
    name: "Masters of Business Administration",
    university: "Columbia University and London Business School"
  )

  m_barratt.degrees.find_or_create_by(
    name: "Bachelor of Science",
    field: "Zoology",
    university: "University of Washington"
  )

  m_barratt.degrees.find_or_create_by(
    name: "Doctor of Medicine",
    university: "Northwestern University"
  )

  s_kelly.degrees.find_or_create_by(
    name: "Bachelor of Science",
    field: "Electrical Engineering",
    university: "State University of New York Maritime College"
  )

  s_kelly.degrees.find_or_create_by(
    name: "Master of Science",
    field: "Aviation Systems",
    university: "University of Tennessee"
  )



end

desc "drop the database"
task "db:drop" do
  rm_f 'db/db.sqlite3'
end

desc 'Retrieves the current schema version number'
task "db:version" do
  puts "Current version: #{ActiveRecord::Migrator.current_version}"
end
