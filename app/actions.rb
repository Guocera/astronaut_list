# Homepage (Root path)
get '/' do
  erb :index
end

get '/nauts/?' do
  @nauts = Naut.all
end