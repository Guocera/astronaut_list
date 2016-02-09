# Homepage (Root path)
get '/' do
  erb :index
end

get '/nauts' do
  Naut.all.to_json
end

get '/selected_naut' do
  Naut.first.to_json
end