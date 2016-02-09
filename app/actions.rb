# Homepage (Root path)
get '/' do
  erb :index
end

get '/nauts/?' do
  Naut.all.to_json
end